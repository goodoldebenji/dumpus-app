"use client";

import satori, { Font, init as initSatori } from "satori/wasm";
import initYoga from "yoga-wasm-web";
import * as resvg from "@resvg/resvg-wasm";
import { useState } from "react";
import StaticShareImage, {
  type Props as StaticShareImageProps,
} from "~/components/StaticShareImage";
import { colors } from "../../tailwind.config";
import { useAtom, useAtomValue } from "jotai";
import { configAtom, selectedPackageAtom } from "~/stores";
import { Uint8ArrayToString, stringToUint8Array } from "~/utils/convert";

async function getFontData(weight: number) {
  return await fetch(
    `https://cdn.jsdelivr.net/npm/@fontsource/rubik/files/rubik-latin-${weight}-normal.woff`
  ).then((res) => res.arrayBuffer());
}

export default function useGenerateImg() {
  const [initialized, setInitialized] = useState(false);
  const selectedPackage = useAtomValue(selectedPackageAtom);
  const [config, setConfig] = useAtom(configAtom);

  async function init() {
    if (initialized) return;
    setInitialized(true);

    const yoga = await initYoga(
      await fetch("/wasm/yoga.wasm").then((res) => res.arrayBuffer())
    );
    initSatori(yoga);
    await resvg.initWasm(fetch("/wasm/resvg.wasm"));
  }

  async function generate(props: StaticShareImageProps) {
    const { shareImageData } = selectedPackage;
    let pngBuffer = shareImageData
      ? stringToUint8Array(shareImageData)
      : undefined;

    if (!pngBuffer) {
      const fonts = (await Promise.all(
        [400, 500, 600, 700].map(async (weight) => ({
          name: "Rubik Latin",
          data: await getFontData(weight),
          weight,
          style: "normal",
        }))
      )) as Font[];

      const width = 1200;
      const svg = await satori(<StaticShareImage {...props} />, {
        width,
        height: 627,
        fonts,
        tailwindConfig: {
          theme: {
            colors,
          },
        },
      });

      const resvgJS = new resvg.Resvg(svg, {
        fitTo: {
          mode: "width",
          value: width,
        },
        dpi: 2,
        shapeRendering: 2,
        textRendering: 2,
        imageRendering: 1,
      });
      pngBuffer = resvgJS.render().asPng();

      const newConfig = structuredClone(config);
      newConfig.db.packages.find(
        ({ id }) => id === selectedPackage.id
      )!.shareImageData = Uint8ArrayToString(pngBuffer);
      setConfig(newConfig);
    }

    const file = new File([pngBuffer], "image.png", { type: "image/png" });
    const svgURL = URL.createObjectURL(
      new Blob([pngBuffer], { type: "image/png" })
    );
    return { svgURL, file };
  }

  return { init, generate, initialized };
}
