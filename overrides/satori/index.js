var _l = Object.create;
var Pr = Object.defineProperty;
var Sl = Object.getOwnPropertyDescriptor;
var kl = Object.getOwnPropertyNames;
var Tl = Object.getPrototypeOf,
  Al = Object.prototype.hasOwnProperty;
var bn = (e, t) => () => (e && (t = e((e = 0))), t);
var T = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  vn = (e, t) => {
    for (var n in t) Pr(e, n, { get: t[n], enumerable: !0 });
  },
  jo = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of kl(t))
        !Al.call(e, i) &&
          i !== n &&
          Pr(e, i, {
            get: () => t[i],
            enumerable: !(r = Sl(t, i)) || r.enumerable,
          });
    return e;
  };
var Ol = (e, t, n) => (
    (n = e != null ? _l(Tl(e)) : {}),
    jo(
      t || !e || !e.__esModule
        ? Pr(n, "default", { value: e, enumerable: !0 })
        : n,
      e,
    )
  ),
  Br = (e) => jo(Pr({}, "__esModule", { value: !0 }), e);
var Ho = {};
vn(Ho, { getYogaModule: () => Pl });
async function Pl() {
  let { default: e } = await import("yoga-wasm-web/asm");
  return e();
}
var Vo = bn(() => {});
var Yn = T((Vn) => {
  "use strict";
  Object.defineProperty(Vn, "__esModule", { value: !0 });
  Object.defineProperty(Vn, "default", { enumerable: !0, get: () => zf });
  function zf(e) {
    if (((e = `${e}`), e === "0")) return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e))
      return e.replace(/^[+-]?/, (t) => (t === "-" ? "" : "-"));
    if (e.includes("var(") || e.includes("calc(")) return `calc(${e} * -1)`;
  }
});
var qu = T((Xn) => {
  "use strict";
  Object.defineProperty(Xn, "__esModule", { value: !0 });
  Object.defineProperty(Xn, "default", { enumerable: !0, get: () => Gf });
  var Gf = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content",
  ];
});
var Uu = T((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: !0 });
  Object.defineProperty(Qn, "default", { enumerable: !0, get: () => jf });
  function jf(e, t) {
    return e === void 0
      ? t
      : Array.isArray(e)
      ? e
      : [
          ...new Set(
            t
              .filter((r) => e !== !1 && e[r] !== !1)
              .concat(Object.keys(e).filter((r) => e[r] !== !1)),
          ),
        ];
  }
});
var Kn = T((Kg, zu) => {
  zu.exports = {
    content: [],
    presets: [],
    darkMode: "media",
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: ({ colors: e }) => ({
        inherit: e.inherit,
        current: e.current,
        transparent: e.transparent,
        black: e.black,
        white: e.white,
        slate: e.slate,
        gray: e.gray,
        zinc: e.zinc,
        neutral: e.neutral,
        stone: e.stone,
        red: e.red,
        orange: e.orange,
        amber: e.amber,
        yellow: e.yellow,
        lime: e.lime,
        green: e.green,
        emerald: e.emerald,
        teal: e.teal,
        cyan: e.cyan,
        sky: e.sky,
        blue: e.blue,
        indigo: e.indigo,
        violet: e.violet,
        purple: e.purple,
        fuchsia: e.fuchsia,
        pink: e.pink,
        rose: e.rose,
      }),
      columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" },
      backdropBlur: ({ theme: e }) => e("blur"),
      backdropBrightness: ({ theme: e }) => e("brightness"),
      backdropContrast: ({ theme: e }) => e("contrast"),
      backdropGrayscale: ({ theme: e }) => e("grayscale"),
      backdropHueRotate: ({ theme: e }) => e("hueRotate"),
      backdropInvert: ({ theme: e }) => e("invert"),
      backdropOpacity: ({ theme: e }) => e("opacity"),
      backdropSaturate: ({ theme: e }) => e("saturate"),
      backdropSepia: ({ theme: e }) => e("sepia"),
      backgroundColor: ({ theme: e }) => e("colors"),
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      backgroundOpacity: ({ theme: e }) => e("opacity"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
      blur: {
        0: "0",
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      borderColor: ({ theme: e }) => ({
        ...e("colors"),
        DEFAULT: e("colors.gray.200", "currentColor"),
      }),
      borderOpacity: ({ theme: e }) => e("opacity"),
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      borderSpacing: ({ theme: e }) => ({ ...e("spacing") }),
      borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
      },
      boxShadowColor: ({ theme: e }) => e("colors"),
      caretColor: ({ theme: e }) => e("colors"),
      accentColor: ({ theme: e }) => ({ ...e("colors"), auto: "auto" }),
      contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      container: {},
      content: { none: "none" },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
      },
      divideColor: ({ theme: e }) => e("borderColor"),
      divideOpacity: ({ theme: e }) => e("borderOpacity"),
      divideWidth: ({ theme: e }) => e("borderWidth"),
      dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
        md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
        lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
        xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000",
      },
      fill: ({ theme: e }) => e("colors"),
      grayscale: { 0: "0", DEFAULT: "100%" },
      hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
      },
      invert: { 0: "0", DEFAULT: "100%" },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexBasis: ({ theme: e }) => ({
        auto: "auto",
        ...e("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
      }),
      flexGrow: { 0: "0", DEFAULT: "1" },
      flexShrink: { 0: "0", DEFAULT: "1" },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gap: ({ theme: e }) => e("spacing"),
      gradientColorStops: ({ theme: e }) => e("colors"),
      gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-full": "1 / -1",
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridTemplateColumns: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
      },
      height: ({ theme: e }) => ({
        auto: "auto",
        ...e("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      inset: ({ theme: e }) => ({
        auto: "auto",
        ...e("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
      }),
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
        pulse: { "50%": { opacity: ".5" } },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
      margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }),
      maxHeight: ({ theme: e }) => ({
        ...e("spacing"),
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      maxWidth: ({ theme: e, breakpoints: t }) => ({
        none: "none",
        0: "0rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        ...t(e("screens")),
      }),
      minHeight: {
        0: "0px",
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      padding: ({ theme: e }) => e("spacing"),
      placeholderColor: ({ theme: e }) => e("colors"),
      placeholderOpacity: ({ theme: e }) => e("opacity"),
      outlineColor: ({ theme: e }) => e("colors"),
      outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
      outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
      ringColor: ({ theme: e }) => ({
        DEFAULT: e("colors.blue.500", "#3b82f6"),
        ...e("colors"),
      }),
      ringOffsetColor: ({ theme: e }) => e("colors"),
      ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
      ringOpacity: ({ theme: e }) => ({ DEFAULT: "0.5", ...e("opacity") }),
      ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
      saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },
      scrollMargin: ({ theme: e }) => ({ ...e("spacing") }),
      scrollPadding: ({ theme: e }) => e("spacing"),
      sepia: { 0: "0", DEFAULT: "100%" },
      skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
      },
      space: ({ theme: e }) => ({ ...e("spacing") }),
      stroke: ({ theme: e }) => e("colors"),
      strokeWidth: { 0: "0", 1: "1", 2: "2" },
      textColor: ({ theme: e }) => e("colors"),
      textDecorationColor: ({ theme: e }) => e("colors"),
      textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      textIndent: ({ theme: e }) => ({ ...e("spacing") }),
      textOpacity: ({ theme: e }) => e("opacity"),
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      transitionDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      translate: ({ theme: e }) => ({
        ...e("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
      }),
      width: ({ theme: e }) => ({
        auto: "auto",
        ...e("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
    },
    variantOrder: [
      "first",
      "last",
      "odd",
      "even",
      "visited",
      "checked",
      "empty",
      "read-only",
      "group-hover",
      "group-focus",
      "focus-within",
      "hover",
      "focus",
      "focus-visible",
      "active",
      "disabled",
    ],
    plugins: [],
  };
});
var Yr = {};
vn(Yr, { default: () => Hf });
var Hf,
  Xr = bn(() => {
    Hf = {
      info(e, t) {
        console.info(...(Array.isArray(e) ? [e] : [t, e]));
      },
      warn(e, t) {
        console.warn(...(Array.isArray(e) ? [e] : [t, e]));
      },
      risk(e, t) {
        console.error(...(Array.isArray(e) ? [e] : [t, e]));
      },
    };
  });
var Gu = T((Jn) => {
  "use strict";
  Object.defineProperty(Jn, "__esModule", { value: !0 });
  Object.defineProperty(Jn, "default", { enumerable: !0, get: () => Xf });
  var Vf = Yf((Xr(), Br(Yr)));
  function Yf(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Gt({ version: e, from: t, to: n }) {
    Vf.default.warn(`${t}-color-renamed`, [
      `As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${n}\`.`,
      "Update your configuration file to silence this warning.",
    ]);
  }
  var Xf = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
    get lightBlue() {
      return Gt({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
    },
    get warmGray() {
      return Gt({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
    },
    get trueGray() {
      return (
        Gt({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral
      );
    },
    get coolGray() {
      return Gt({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
    },
    get blueGray() {
      return Gt({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
    },
  };
});
var ju = T((Zn) => {
  "use strict";
  Object.defineProperty(Zn, "__esModule", { value: !0 });
  Object.defineProperty(Zn, "defaults", { enumerable: !0, get: () => Qf });
  function Qf(e, ...t) {
    for (let i of t) {
      for (let o in i) {
        var n;
        (!(e == null || (n = e.hasOwnProperty) === null || n === void 0) &&
          n.call(e, o)) ||
          (e[o] = i[o]);
      }
      for (let o of Object.getOwnPropertySymbols(i)) {
        var r;
        (!(e == null || (r = e.hasOwnProperty) === null || r === void 0) &&
          r.call(e, o)) ||
          (e[o] = i[o]);
      }
    }
    return e;
  }
});
var Hu = T((ei) => {
  "use strict";
  Object.defineProperty(ei, "__esModule", { value: !0 });
  Object.defineProperty(ei, "toPath", { enumerable: !0, get: () => Kf });
  function Kf(e) {
    if (Array.isArray(e)) return e;
    let t = e.split("[").length - 1,
      n = e.split("]").length - 1;
    if (t !== n)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${e}`);
    return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
});
var Yu = T((ti) => {
  "use strict";
  Object.defineProperty(ti, "__esModule", { value: !0 });
  Object.defineProperty(ti, "normalizeConfig", {
    enumerable: !0,
    get: () => Zf,
  });
  var jt = Jf((Xr(), Br(Yr)));
  function Vu(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (Vu = function (r) {
      return r ? n : t;
    })(e);
  }
  function Jf(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var n = Vu(t);
    if (n && n.has(e)) return n.get(e);
    var r = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        u && (u.get || u.set) ? Object.defineProperty(r, o, u) : (r[o] = e[o]);
      }
    return (r.default = e), n && n.set(e, r), r;
  }
  function Zf(e) {
    if (
      ((() => {
        if (
          e.purge ||
          !e.content ||
          (!Array.isArray(e.content) &&
            !(typeof e.content == "object" && e.content !== null))
        )
          return !1;
        if (Array.isArray(e.content))
          return e.content.every((r) =>
            typeof r == "string"
              ? !0
              : !(
                  typeof (r == null ? void 0 : r.raw) != "string" ||
                  (r != null &&
                    r.extension &&
                    typeof (r == null ? void 0 : r.extension) != "string")
                ),
          );
        if (typeof e.content == "object" && e.content !== null) {
          if (
            Object.keys(e.content).some(
              (r) => !["files", "extract", "transform"].includes(r),
            )
          )
            return !1;
          if (Array.isArray(e.content.files)) {
            if (
              !e.content.files.every((r) =>
                typeof r == "string"
                  ? !0
                  : !(
                      typeof (r == null ? void 0 : r.raw) != "string" ||
                      (r != null &&
                        r.extension &&
                        typeof (r == null ? void 0 : r.extension) != "string")
                    ),
              )
            )
              return !1;
            if (typeof e.content.extract == "object") {
              for (let r of Object.values(e.content.extract))
                if (typeof r != "function") return !1;
            } else if (
              !(
                e.content.extract === void 0 ||
                typeof e.content.extract == "function"
              )
            )
              return !1;
            if (typeof e.content.transform == "object") {
              for (let r of Object.values(e.content.transform))
                if (typeof r != "function") return !1;
            } else if (
              !(
                e.content.transform === void 0 ||
                typeof e.content.transform == "function"
              )
            )
              return !1;
          }
          return !0;
        }
        return !1;
      })() ||
        jt.default.warn("purge-deprecation", [
          "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
          "Update your configuration file to eliminate this warning.",
          "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources",
        ]),
      (e.safelist = (() => {
        var r;
        let { content: i, purge: o, safelist: u } = e;
        return Array.isArray(u)
          ? u
          : Array.isArray(i == null ? void 0 : i.safelist)
          ? i.safelist
          : Array.isArray(o == null ? void 0 : o.safelist)
          ? o.safelist
          : Array.isArray(
              o == null || (r = o.options) === null || r === void 0
                ? void 0
                : r.safelist,
            )
          ? o.options.safelist
          : [];
      })()),
      typeof e.prefix == "function")
    )
      jt.default.warn("prefix-function", [
        "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
        "Update `prefix` in your configuration to be a string to eliminate this warning.",
        "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function",
      ]),
        (e.prefix = "");
    else {
      var n;
      e.prefix = (n = e.prefix) !== null && n !== void 0 ? n : "";
    }
    e.content = {
      files: (() => {
        let { content: r, purge: i } = e;
        return Array.isArray(i)
          ? i
          : Array.isArray(i == null ? void 0 : i.content)
          ? i.content
          : Array.isArray(r)
          ? r
          : Array.isArray(r == null ? void 0 : r.content)
          ? r.content
          : Array.isArray(r == null ? void 0 : r.files)
          ? r.files
          : [];
      })(),
      extract: (() => {
        let r = (() => {
            var u, s, a, l, f, c, p, h, d, m;
            return !((u = e.purge) === null || u === void 0) && u.extract
              ? e.purge.extract
              : !((s = e.content) === null || s === void 0) && s.extract
              ? e.content.extract
              : !(
                  (a = e.purge) === null ||
                  a === void 0 ||
                  (l = a.extract) === null ||
                  l === void 0
                ) && l.DEFAULT
              ? e.purge.extract.DEFAULT
              : !(
                  (f = e.content) === null ||
                  f === void 0 ||
                  (c = f.extract) === null ||
                  c === void 0
                ) && c.DEFAULT
              ? e.content.extract.DEFAULT
              : !(
                  (p = e.purge) === null ||
                  p === void 0 ||
                  (h = p.options) === null ||
                  h === void 0
                ) && h.extractors
              ? e.purge.options.extractors
              : !(
                  (d = e.content) === null ||
                  d === void 0 ||
                  (m = d.options) === null ||
                  m === void 0
                ) && m.extractors
              ? e.content.options.extractors
              : {};
          })(),
          i = {},
          o = (() => {
            var u, s, a, l;
            if (
              !(
                (u = e.purge) === null ||
                u === void 0 ||
                (s = u.options) === null ||
                s === void 0
              ) &&
              s.defaultExtractor
            )
              return e.purge.options.defaultExtractor;
            if (
              !(
                (a = e.content) === null ||
                a === void 0 ||
                (l = a.options) === null ||
                l === void 0
              ) &&
              l.defaultExtractor
            )
              return e.content.options.defaultExtractor;
          })();
        if ((o !== void 0 && (i.DEFAULT = o), typeof r == "function"))
          i.DEFAULT = r;
        else if (Array.isArray(r))
          for (let { extensions: u, extractor: s } of r ?? [])
            for (let a of u) i[a] = s;
        else typeof r == "object" && r !== null && Object.assign(i, r);
        return i;
      })(),
      transform: (() => {
        let r = (() => {
            var o, u, s, a, l, f;
            return !((o = e.purge) === null || o === void 0) && o.transform
              ? e.purge.transform
              : !((u = e.content) === null || u === void 0) && u.transform
              ? e.content.transform
              : !(
                  (s = e.purge) === null ||
                  s === void 0 ||
                  (a = s.transform) === null ||
                  a === void 0
                ) && a.DEFAULT
              ? e.purge.transform.DEFAULT
              : !(
                  (l = e.content) === null ||
                  l === void 0 ||
                  (f = l.transform) === null ||
                  f === void 0
                ) && f.DEFAULT
              ? e.content.transform.DEFAULT
              : {};
          })(),
          i = {};
        return (
          typeof r == "function" && (i.DEFAULT = r),
          typeof r == "object" && r !== null && Object.assign(i, r),
          i
        );
      })(),
    };
    for (let r of e.content.files)
      if (typeof r == "string" && /{([^,]*?)}/g.test(r)) {
        jt.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, jt.dim)(
            r,
          )} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, jt.dim)(
            r.replace(/{([^,]*?)}/g, "$1"),
          )} to silence this warning.`,
        ]);
        break;
      }
    return e;
  }
});
var Xu = T((ri) => {
  "use strict";
  Object.defineProperty(ri, "__esModule", { value: !0 });
  Object.defineProperty(ri, "default", { enumerable: !0, get: () => ec });
  function ec(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
    let t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
});
var Qu = T((ii) => {
  "use strict";
  Object.defineProperty(ii, "__esModule", { value: !0 });
  Object.defineProperty(ii, "cloneDeep", { enumerable: !0, get: () => ni });
  function ni(e) {
    return Array.isArray(e)
      ? e.map((t) => ni(t))
      : typeof e == "object" && e !== null
      ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, ni(n)]))
      : e;
  }
});
var oi = T((Qr, Ku) => {
  "use strict";
  Qr.__esModule = !0;
  Qr.default = nc;
  function tc(e) {
    for (
      var t = e.toLowerCase(), n = "", r = !1, i = 0;
      i < 6 && t[i] !== void 0;
      i++
    ) {
      var o = t.charCodeAt(i),
        u = (o >= 97 && o <= 102) || (o >= 48 && o <= 57);
      if (((r = o === 32), !u)) break;
      n += t[i];
    }
    if (n.length !== 0) {
      var s = parseInt(n, 16),
        a = s >= 55296 && s <= 57343;
      return a || s === 0 || s > 1114111
        ? ["\uFFFD", n.length + (r ? 1 : 0)]
        : [String.fromCodePoint(s), n.length + (r ? 1 : 0)];
    }
  }
  var rc = /\\/;
  function nc(e) {
    var t = rc.test(e);
    if (!t) return e;
    for (var n = "", r = 0; r < e.length; r++) {
      if (e[r] === "\\") {
        var i = tc(e.slice(r + 1, r + 7));
        if (i !== void 0) {
          (n += i[0]), (r += i[1]);
          continue;
        }
        if (e[r + 1] === "\\") {
          (n += "\\"), r++;
          continue;
        }
        e.length === r + 1 && (n += e[r]);
        continue;
      }
      n += e[r];
    }
    return n;
  }
  Ku.exports = Qr.default;
});
var Zu = T((Kr, Ju) => {
  "use strict";
  Kr.__esModule = !0;
  Kr.default = ic;
  function ic(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    for (; n.length > 0; ) {
      var i = n.shift();
      if (!e[i]) return;
      e = e[i];
    }
    return e;
  }
  Ju.exports = Kr.default;
});
var ts = T((Jr, es) => {
  "use strict";
  Jr.__esModule = !0;
  Jr.default = oc;
  function oc(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    for (; n.length > 0; ) {
      var i = n.shift();
      e[i] || (e[i] = {}), (e = e[i]);
    }
  }
  es.exports = Jr.default;
});
var ns = T((Zr, rs) => {
  "use strict";
  Zr.__esModule = !0;
  Zr.default = uc;
  function uc(e) {
    for (var t = "", n = e.indexOf("/*"), r = 0; n >= 0; ) {
      t = t + e.slice(r, n);
      var i = e.indexOf("*/", n + 2);
      if (i < 0) return t;
      (r = i + 2), (n = e.indexOf("/*", r));
    }
    return (t = t + e.slice(r)), t;
  }
  rs.exports = Zr.default;
});
var Ht = T((Me) => {
  "use strict";
  Me.__esModule = !0;
  Me.stripComments = Me.ensureObject = Me.getProp = Me.unesc = void 0;
  var sc = en(oi());
  Me.unesc = sc.default;
  var ac = en(Zu());
  Me.getProp = ac.default;
  var lc = en(ts());
  Me.ensureObject = lc.default;
  var fc = en(ns());
  Me.stripComments = fc.default;
  function en(e) {
    return e && e.__esModule ? e : { default: e };
  }
});
var Ue = T((Vt, us) => {
  "use strict";
  Vt.__esModule = !0;
  Vt.default = void 0;
  var is = Ht();
  function os(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function cc(e, t, n) {
    return t && os(e.prototype, t), n && os(e, n), e;
  }
  var dc = function e(t, n) {
      if (typeof t != "object" || t === null) return t;
      var r = new t.constructor();
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = t[i],
            u = typeof o;
          i === "parent" && u === "object"
            ? n && (r[i] = n)
            : o instanceof Array
            ? (r[i] = o.map(function (s) {
                return e(s, r);
              }))
            : (r[i] = e(o, r));
        }
      return r;
    },
    pc = (function () {
      function e(n) {
        n === void 0 && (n = {}),
          Object.assign(this, n),
          (this.spaces = this.spaces || {}),
          (this.spaces.before = this.spaces.before || ""),
          (this.spaces.after = this.spaces.after || "");
      }
      var t = e.prototype;
      return (
        (t.remove = function () {
          return (
            this.parent && this.parent.removeChild(this),
            (this.parent = void 0),
            this
          );
        }),
        (t.replaceWith = function () {
          if (this.parent) {
            for (var r in arguments)
              this.parent.insertBefore(this, arguments[r]);
            this.remove();
          }
          return this;
        }),
        (t.next = function () {
          return this.parent.at(this.parent.index(this) + 1);
        }),
        (t.prev = function () {
          return this.parent.at(this.parent.index(this) - 1);
        }),
        (t.clone = function (r) {
          r === void 0 && (r = {});
          var i = dc(this);
          for (var o in r) i[o] = r[o];
          return i;
        }),
        (t.appendToPropertyAndEscape = function (r, i, o) {
          this.raws || (this.raws = {});
          var u = this[r],
            s = this.raws[r];
          (this[r] = u + i),
            s || o !== i ? (this.raws[r] = (s || u) + o) : delete this.raws[r];
        }),
        (t.setPropertyAndEscape = function (r, i, o) {
          this.raws || (this.raws = {}), (this[r] = i), (this.raws[r] = o);
        }),
        (t.setPropertyWithoutEscape = function (r, i) {
          (this[r] = i), this.raws && delete this.raws[r];
        }),
        (t.isAtPosition = function (r, i) {
          if (this.source && this.source.start && this.source.end)
            return !(
              this.source.start.line > r ||
              this.source.end.line < r ||
              (this.source.start.line === r && this.source.start.column > i) ||
              (this.source.end.line === r && this.source.end.column < i)
            );
        }),
        (t.stringifyProperty = function (r) {
          return (this.raws && this.raws[r]) || this[r];
        }),
        (t.valueToString = function () {
          return String(this.stringifyProperty("value"));
        }),
        (t.toString = function () {
          return [
            this.rawSpaceBefore,
            this.valueToString(),
            this.rawSpaceAfter,
          ].join("");
        }),
        cc(e, [
          {
            key: "rawSpaceBefore",
            get: function () {
              var r = this.raws && this.raws.spaces && this.raws.spaces.before;
              return (
                r === void 0 && (r = this.spaces && this.spaces.before), r || ""
              );
            },
            set: function (r) {
              (0, is.ensureObject)(this, "raws", "spaces"),
                (this.raws.spaces.before = r);
            },
          },
          {
            key: "rawSpaceAfter",
            get: function () {
              var r = this.raws && this.raws.spaces && this.raws.spaces.after;
              return r === void 0 && (r = this.spaces.after), r || "";
            },
            set: function (r) {
              (0, is.ensureObject)(this, "raws", "spaces"),
                (this.raws.spaces.after = r);
            },
          },
        ]),
        e
      );
    })();
  Vt.default = pc;
  us.exports = Vt.default;
});
var he = T((K) => {
  "use strict";
  K.__esModule = !0;
  K.UNIVERSAL =
    K.ATTRIBUTE =
    K.CLASS =
    K.COMBINATOR =
    K.COMMENT =
    K.ID =
    K.NESTING =
    K.PSEUDO =
    K.ROOT =
    K.SELECTOR =
    K.STRING =
    K.TAG =
      void 0;
  var hc = "tag";
  K.TAG = hc;
  var mc = "string";
  K.STRING = mc;
  var Dc = "selector";
  K.SELECTOR = Dc;
  var gc = "root";
  K.ROOT = gc;
  var bc = "pseudo";
  K.PSEUDO = bc;
  var vc = "nesting";
  K.NESTING = vc;
  var yc = "id";
  K.ID = yc;
  var xc = "comment";
  K.COMMENT = xc;
  var Fc = "combinator";
  K.COMBINATOR = Fc;
  var wc = "class";
  K.CLASS = wc;
  var Ec = "attribute";
  K.ATTRIBUTE = Ec;
  var Cc = "universal";
  K.UNIVERSAL = Cc;
});
var tn = T((Yt, fs) => {
  "use strict";
  Yt.__esModule = !0;
  Yt.default = void 0;
  var _c = kc(Ue()),
    ze = Sc(he());
  function ls() {
    if (typeof WeakMap != "function") return null;
    var e = new WeakMap();
    return (
      (ls = function () {
        return e;
      }),
      e
    );
  }
  function Sc(e) {
    if (e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var t = ls();
    if (t && t.has(e)) return t.get(e);
    var n = {},
      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
      }
    return (n.default = e), t && t.set(e, n), n;
  }
  function kc(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Tc(e, t) {
    var n;
    if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
      if (
        Array.isArray(e) ||
        (n = Ac(e)) ||
        (t && e && typeof e.length == "number")
      ) {
        n && (e = n);
        var r = 0;
        return function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return (n = e[Symbol.iterator]()), n.next.bind(n);
  }
  function Ac(e, t) {
    if (e) {
      if (typeof e == "string") return ss(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return ss(e, t);
    }
  }
  function ss(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function as(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Oc(e, t, n) {
    return t && as(e.prototype, t), n && as(e, n), e;
  }
  function Pc(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      ui(e, t);
  }
  function ui(e, t) {
    return (
      (ui =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      ui(e, t)
    );
  }
  var Bc = (function (e) {
    Pc(t, e);
    function t(r) {
      var i;
      return (i = e.call(this, r) || this), i.nodes || (i.nodes = []), i;
    }
    var n = t.prototype;
    return (
      (n.append = function (i) {
        return (i.parent = this), this.nodes.push(i), this;
      }),
      (n.prepend = function (i) {
        return (i.parent = this), this.nodes.unshift(i), this;
      }),
      (n.at = function (i) {
        return this.nodes[i];
      }),
      (n.index = function (i) {
        return typeof i == "number" ? i : this.nodes.indexOf(i);
      }),
      (n.removeChild = function (i) {
        (i = this.index(i)),
          (this.at(i).parent = void 0),
          this.nodes.splice(i, 1);
        var o;
        for (var u in this.indexes)
          (o = this.indexes[u]), o >= i && (this.indexes[u] = o - 1);
        return this;
      }),
      (n.removeAll = function () {
        for (var i = Tc(this.nodes), o; !(o = i()).done; ) {
          var u = o.value;
          u.parent = void 0;
        }
        return (this.nodes = []), this;
      }),
      (n.empty = function () {
        return this.removeAll();
      }),
      (n.insertAfter = function (i, o) {
        o.parent = this;
        var u = this.index(i);
        this.nodes.splice(u + 1, 0, o), (o.parent = this);
        var s;
        for (var a in this.indexes)
          (s = this.indexes[a]), u <= s && (this.indexes[a] = s + 1);
        return this;
      }),
      (n.insertBefore = function (i, o) {
        o.parent = this;
        var u = this.index(i);
        this.nodes.splice(u, 0, o), (o.parent = this);
        var s;
        for (var a in this.indexes)
          (s = this.indexes[a]), s <= u && (this.indexes[a] = s + 1);
        return this;
      }),
      (n._findChildAtPosition = function (i, o) {
        var u = void 0;
        return (
          this.each(function (s) {
            if (s.atPosition) {
              var a = s.atPosition(i, o);
              if (a) return (u = a), !1;
            } else if (s.isAtPosition(i, o)) return (u = s), !1;
          }),
          u
        );
      }),
      (n.atPosition = function (i, o) {
        if (this.isAtPosition(i, o))
          return this._findChildAtPosition(i, o) || this;
      }),
      (n._inferEndPosition = function () {
        this.last &&
          this.last.source &&
          this.last.source.end &&
          ((this.source = this.source || {}),
          (this.source.end = this.source.end || {}),
          Object.assign(this.source.end, this.last.source.end));
      }),
      (n.each = function (i) {
        this.lastEach || (this.lastEach = 0),
          this.indexes || (this.indexes = {}),
          this.lastEach++;
        var o = this.lastEach;
        if (((this.indexes[o] = 0), !!this.length)) {
          for (
            var u, s;
            this.indexes[o] < this.length &&
            ((u = this.indexes[o]), (s = i(this.at(u), u)), s !== !1);

          )
            this.indexes[o] += 1;
          if ((delete this.indexes[o], s === !1)) return !1;
        }
      }),
      (n.walk = function (i) {
        return this.each(function (o, u) {
          var s = i(o, u);
          if ((s !== !1 && o.length && (s = o.walk(i)), s === !1)) return !1;
        });
      }),
      (n.walkAttributes = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.ATTRIBUTE) return i.call(o, u);
        });
      }),
      (n.walkClasses = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.CLASS) return i.call(o, u);
        });
      }),
      (n.walkCombinators = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.COMBINATOR) return i.call(o, u);
        });
      }),
      (n.walkComments = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.COMMENT) return i.call(o, u);
        });
      }),
      (n.walkIds = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.ID) return i.call(o, u);
        });
      }),
      (n.walkNesting = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.NESTING) return i.call(o, u);
        });
      }),
      (n.walkPseudos = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.PSEUDO) return i.call(o, u);
        });
      }),
      (n.walkTags = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.TAG) return i.call(o, u);
        });
      }),
      (n.walkUniversals = function (i) {
        var o = this;
        return this.walk(function (u) {
          if (u.type === ze.UNIVERSAL) return i.call(o, u);
        });
      }),
      (n.split = function (i) {
        var o = this,
          u = [];
        return this.reduce(function (s, a, l) {
          var f = i.call(o, a);
          return (
            u.push(a),
            f ? (s.push(u), (u = [])) : l === o.length - 1 && s.push(u),
            s
          );
        }, []);
      }),
      (n.map = function (i) {
        return this.nodes.map(i);
      }),
      (n.reduce = function (i, o) {
        return this.nodes.reduce(i, o);
      }),
      (n.every = function (i) {
        return this.nodes.every(i);
      }),
      (n.some = function (i) {
        return this.nodes.some(i);
      }),
      (n.filter = function (i) {
        return this.nodes.filter(i);
      }),
      (n.sort = function (i) {
        return this.nodes.sort(i);
      }),
      (n.toString = function () {
        return this.map(String).join("");
      }),
      Oc(t, [
        {
          key: "first",
          get: function () {
            return this.at(0);
          },
        },
        {
          key: "last",
          get: function () {
            return this.at(this.length - 1);
          },
        },
        {
          key: "length",
          get: function () {
            return this.nodes.length;
          },
        },
      ]),
      t
    );
  })(_c.default);
  Yt.default = Bc;
  fs.exports = Yt.default;
});
var ai = T((Xt, ds) => {
  "use strict";
  Xt.__esModule = !0;
  Xt.default = void 0;
  var Ic = Lc(tn()),
    Rc = he();
  function Lc(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function cs(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Mc(e, t, n) {
    return t && cs(e.prototype, t), n && cs(e, n), e;
  }
  function Nc(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      si(e, t);
  }
  function si(e, t) {
    return (
      (si =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      si(e, t)
    );
  }
  var $c = (function (e) {
    Nc(t, e);
    function t(r) {
      var i;
      return (i = e.call(this, r) || this), (i.type = Rc.ROOT), i;
    }
    var n = t.prototype;
    return (
      (n.toString = function () {
        var i = this.reduce(function (o, u) {
          return o.push(String(u)), o;
        }, []).join(",");
        return this.trailingComma ? i + "," : i;
      }),
      (n.error = function (i, o) {
        return this._error ? this._error(i, o) : new Error(i);
      }),
      Mc(t, [
        {
          key: "errorGenerator",
          set: function (i) {
            this._error = i;
          },
        },
      ]),
      t
    );
  })(Ic.default);
  Xt.default = $c;
  ds.exports = Xt.default;
});
var fi = T((Qt, ps) => {
  "use strict";
  Qt.__esModule = !0;
  Qt.default = void 0;
  var Wc = Uc(tn()),
    qc = he();
  function Uc(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function zc(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      li(e, t);
  }
  function li(e, t) {
    return (
      (li =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      li(e, t)
    );
  }
  var Gc = (function (e) {
    zc(t, e);
    function t(n) {
      var r;
      return (r = e.call(this, n) || this), (r.type = qc.SELECTOR), r;
    }
    return t;
  })(Wc.default);
  Qt.default = Gc;
  ps.exports = Qt.default;
});
var rn = T((ub, hs) => {
  "use strict";
  var jc = {},
    Hc = jc.hasOwnProperty,
    Vc = function (t, n) {
      if (!t) return n;
      var r = {};
      for (var i in n) r[i] = Hc.call(t, i) ? t[i] : n[i];
      return r;
    },
    Yc = /[ -,\.\/:-@\[-\^`\{-~]/,
    Xc = /[ -,\.\/:-@\[\]\^`\{-~]/,
    Qc = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
    ci = function e(t, n) {
      (n = Vc(n, e.options)),
        n.quotes != "single" && n.quotes != "double" && (n.quotes = "single");
      for (
        var r = n.quotes == "double" ? '"' : "'",
          i = n.isIdentifier,
          o = t.charAt(0),
          u = "",
          s = 0,
          a = t.length;
        s < a;

      ) {
        var l = t.charAt(s++),
          f = l.charCodeAt(),
          c = void 0;
        if (f < 32 || f > 126) {
          if (f >= 55296 && f <= 56319 && s < a) {
            var p = t.charCodeAt(s++);
            (p & 64512) == 56320
              ? (f = ((f & 1023) << 10) + (p & 1023) + 65536)
              : s--;
          }
          c = "\\" + f.toString(16).toUpperCase() + " ";
        } else
          n.escapeEverything
            ? Yc.test(l)
              ? (c = "\\" + l)
              : (c = "\\" + f.toString(16).toUpperCase() + " ")
            : /[\t\n\f\r\x0B]/.test(l)
            ? (c = "\\" + f.toString(16).toUpperCase() + " ")
            : l == "\\" ||
              (!i && ((l == '"' && r == l) || (l == "'" && r == l))) ||
              (i && Xc.test(l))
            ? (c = "\\" + l)
            : (c = l);
        u += c;
      }
      return (
        i &&
          (/^-[-\d]/.test(u)
            ? (u = "\\-" + u.slice(1))
            : /\d/.test(o) && (u = "\\3" + o + " " + u.slice(1))),
        (u = u.replace(Qc, function (h, d, m) {
          return d && d.length % 2 ? h : (d || "") + m;
        })),
        !i && n.wrap ? r + u + r : u
      );
    };
  ci.options = {
    escapeEverything: !1,
    isIdentifier: !1,
    quotes: "single",
    wrap: !1,
  };
  ci.version = "3.0.0";
  hs.exports = ci;
});
var pi = T((Kt, gs) => {
  "use strict";
  Kt.__esModule = !0;
  Kt.default = void 0;
  var Kc = Ds(rn()),
    Jc = Ht(),
    Zc = Ds(Ue()),
    ed = he();
  function Ds(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function ms(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function td(e, t, n) {
    return t && ms(e.prototype, t), n && ms(e, n), e;
  }
  function rd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      di(e, t);
  }
  function di(e, t) {
    return (
      (di =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      di(e, t)
    );
  }
  var nd = (function (e) {
    rd(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this, r) || this),
        (i.type = ed.CLASS),
        (i._constructed = !0),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.valueToString = function () {
        return "." + e.prototype.valueToString.call(this);
      }),
      td(t, [
        {
          key: "value",
          get: function () {
            return this._value;
          },
          set: function (i) {
            if (this._constructed) {
              var o = (0, Kc.default)(i, { isIdentifier: !0 });
              o !== i
                ? ((0, Jc.ensureObject)(this, "raws"), (this.raws.value = o))
                : this.raws && delete this.raws.value;
            }
            this._value = i;
          },
        },
      ]),
      t
    );
  })(Zc.default);
  Kt.default = nd;
  gs.exports = Kt.default;
});
var mi = T((Jt, bs) => {
  "use strict";
  Jt.__esModule = !0;
  Jt.default = void 0;
  var id = ud(Ue()),
    od = he();
  function ud(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function sd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      hi(e, t);
  }
  function hi(e, t) {
    return (
      (hi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      hi(e, t)
    );
  }
  var ad = (function (e) {
    sd(t, e);
    function t(n) {
      var r;
      return (r = e.call(this, n) || this), (r.type = od.COMMENT), r;
    }
    return t;
  })(id.default);
  Jt.default = ad;
  bs.exports = Jt.default;
});
var gi = T((Zt, vs) => {
  "use strict";
  Zt.__esModule = !0;
  Zt.default = void 0;
  var ld = cd(Ue()),
    fd = he();
  function cd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function dd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Di(e, t);
  }
  function Di(e, t) {
    return (
      (Di =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      Di(e, t)
    );
  }
  var pd = (function (e) {
    dd(t, e);
    function t(r) {
      var i;
      return (i = e.call(this, r) || this), (i.type = fd.ID), i;
    }
    var n = t.prototype;
    return (
      (n.valueToString = function () {
        return "#" + e.prototype.valueToString.call(this);
      }),
      t
    );
  })(ld.default);
  Zt.default = pd;
  vs.exports = Zt.default;
});
var nn = T((er, Fs) => {
  "use strict";
  er.__esModule = !0;
  er.default = void 0;
  var hd = xs(rn()),
    md = Ht(),
    Dd = xs(Ue());
  function xs(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function ys(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function gd(e, t, n) {
    return t && ys(e.prototype, t), n && ys(e, n), e;
  }
  function bd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      bi(e, t);
  }
  function bi(e, t) {
    return (
      (bi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      bi(e, t)
    );
  }
  var vd = (function (e) {
    bd(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.qualifiedName = function (i) {
        return this.namespace ? this.namespaceString + "|" + i : i;
      }),
      (n.valueToString = function () {
        return this.qualifiedName(e.prototype.valueToString.call(this));
      }),
      gd(t, [
        {
          key: "namespace",
          get: function () {
            return this._namespace;
          },
          set: function (i) {
            if (i === !0 || i === "*" || i === "&") {
              (this._namespace = i), this.raws && delete this.raws.namespace;
              return;
            }
            var o = (0, hd.default)(i, { isIdentifier: !0 });
            (this._namespace = i),
              o !== i
                ? ((0, md.ensureObject)(this, "raws"),
                  (this.raws.namespace = o))
                : this.raws && delete this.raws.namespace;
          },
        },
        {
          key: "ns",
          get: function () {
            return this._namespace;
          },
          set: function (i) {
            this.namespace = i;
          },
        },
        {
          key: "namespaceString",
          get: function () {
            if (this.namespace) {
              var i = this.stringifyProperty("namespace");
              return i === !0 ? "" : i;
            } else return "";
          },
        },
      ]),
      t
    );
  })(Dd.default);
  er.default = vd;
  Fs.exports = er.default;
});
var yi = T((tr, ws) => {
  "use strict";
  tr.__esModule = !0;
  tr.default = void 0;
  var yd = Fd(nn()),
    xd = he();
  function Fd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function wd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      vi(e, t);
  }
  function vi(e, t) {
    return (
      (vi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      vi(e, t)
    );
  }
  var Ed = (function (e) {
    wd(t, e);
    function t(n) {
      var r;
      return (r = e.call(this, n) || this), (r.type = xd.TAG), r;
    }
    return t;
  })(yd.default);
  tr.default = Ed;
  ws.exports = tr.default;
});
var Fi = T((rr, Es) => {
  "use strict";
  rr.__esModule = !0;
  rr.default = void 0;
  var Cd = Sd(Ue()),
    _d = he();
  function Sd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function kd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      xi(e, t);
  }
  function xi(e, t) {
    return (
      (xi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      xi(e, t)
    );
  }
  var Td = (function (e) {
    kd(t, e);
    function t(n) {
      var r;
      return (r = e.call(this, n) || this), (r.type = _d.STRING), r;
    }
    return t;
  })(Cd.default);
  rr.default = Td;
  Es.exports = rr.default;
});
var Ei = T((nr, Cs) => {
  "use strict";
  nr.__esModule = !0;
  nr.default = void 0;
  var Ad = Pd(tn()),
    Od = he();
  function Pd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Bd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      wi(e, t);
  }
  function wi(e, t) {
    return (
      (wi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      wi(e, t)
    );
  }
  var Id = (function (e) {
    Bd(t, e);
    function t(r) {
      var i;
      return (i = e.call(this, r) || this), (i.type = Od.PSEUDO), i;
    }
    var n = t.prototype;
    return (
      (n.toString = function () {
        var i = this.length ? "(" + this.map(String).join(",") + ")" : "";
        return [
          this.rawSpaceBefore,
          this.stringifyProperty("value"),
          i,
          this.rawSpaceAfter,
        ].join("");
      }),
      t
    );
  })(Ad.default);
  nr.default = Id;
  Cs.exports = nr.default;
});
var Ss = T((sb, _s) => {
  _s.exports = function (t, n) {
    return function (...r) {
      return console.warn(n), t(...r);
    };
  };
});
var Ai = T((ur) => {
  "use strict";
  ur.__esModule = !0;
  ur.unescapeValue = Ti;
  ur.default = void 0;
  var ir = ki(rn()),
    Rd = ki(oi()),
    Ld = ki(nn()),
    Md = he(),
    Ci;
  function ki(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function ks(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Nd(e, t, n) {
    return t && ks(e.prototype, t), n && ks(e, n), e;
  }
  function $d(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Si(e, t);
  }
  function Si(e, t) {
    return (
      (Si =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      Si(e, t)
    );
  }
  var or = Ss(),
    Wd = /^('|")([^]*)\1$/,
    qd = or(
      function () {},
      "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.",
    ),
    Ud = or(
      function () {},
      "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.",
    ),
    zd = or(
      function () {},
      "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.",
    );
  function Ti(e) {
    var t = !1,
      n = null,
      r = e,
      i = r.match(Wd);
    return (
      i && ((n = i[1]), (r = i[2])),
      (r = (0, Rd.default)(r)),
      r !== e && (t = !0),
      { deprecatedUsage: t, unescaped: r, quoteMark: n }
    );
  }
  function Gd(e) {
    if (e.quoteMark !== void 0 || e.value === void 0) return e;
    zd();
    var t = Ti(e.value),
      n = t.quoteMark,
      r = t.unescaped;
    return (
      e.raws || (e.raws = {}),
      e.raws.value === void 0 && (e.raws.value = e.value),
      (e.value = r),
      (e.quoteMark = n),
      e
    );
  }
  var on = (function (e) {
    $d(t, e);
    function t(r) {
      var i;
      return (
        r === void 0 && (r = {}),
        (i = e.call(this, Gd(r)) || this),
        (i.type = Md.ATTRIBUTE),
        (i.raws = i.raws || {}),
        Object.defineProperty(i.raws, "unquoted", {
          get: or(function () {
            return i.value;
          }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
          set: or(function () {
            return i.value;
          }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now."),
        }),
        (i._constructed = !0),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.getQuotedValue = function (i) {
        i === void 0 && (i = {});
        var o = this._determineQuoteMark(i),
          u = _i[o],
          s = (0, ir.default)(this._value, u);
        return s;
      }),
      (n._determineQuoteMark = function (i) {
        return i.smart ? this.smartQuoteMark(i) : this.preferredQuoteMark(i);
      }),
      (n.setValue = function (i, o) {
        o === void 0 && (o = {}),
          (this._value = i),
          (this._quoteMark = this._determineQuoteMark(o)),
          this._syncRawValue();
      }),
      (n.smartQuoteMark = function (i) {
        var o = this.value,
          u = o.replace(/[^']/g, "").length,
          s = o.replace(/[^"]/g, "").length;
        if (u + s === 0) {
          var a = (0, ir.default)(o, { isIdentifier: !0 });
          if (a === o) return t.NO_QUOTE;
          var l = this.preferredQuoteMark(i);
          if (l === t.NO_QUOTE) {
            var f = this.quoteMark || i.quoteMark || t.DOUBLE_QUOTE,
              c = _i[f],
              p = (0, ir.default)(o, c);
            if (p.length < a.length) return f;
          }
          return l;
        } else
          return s === u
            ? this.preferredQuoteMark(i)
            : s < u
            ? t.DOUBLE_QUOTE
            : t.SINGLE_QUOTE;
      }),
      (n.preferredQuoteMark = function (i) {
        var o = i.preferCurrentQuoteMark ? this.quoteMark : i.quoteMark;
        return (
          o === void 0 &&
            (o = i.preferCurrentQuoteMark ? i.quoteMark : this.quoteMark),
          o === void 0 && (o = t.DOUBLE_QUOTE),
          o
        );
      }),
      (n._syncRawValue = function () {
        var i = (0, ir.default)(this._value, _i[this.quoteMark]);
        i === this._value
          ? this.raws && delete this.raws.value
          : (this.raws.value = i);
      }),
      (n._handleEscapes = function (i, o) {
        if (this._constructed) {
          var u = (0, ir.default)(o, { isIdentifier: !0 });
          u !== o ? (this.raws[i] = u) : delete this.raws[i];
        }
      }),
      (n._spacesFor = function (i) {
        var o = { before: "", after: "" },
          u = this.spaces[i] || {},
          s = (this.raws.spaces && this.raws.spaces[i]) || {};
        return Object.assign(o, u, s);
      }),
      (n._stringFor = function (i, o, u) {
        o === void 0 && (o = i), u === void 0 && (u = Ts);
        var s = this._spacesFor(o);
        return u(this.stringifyProperty(i), s);
      }),
      (n.offsetOf = function (i) {
        var o = 1,
          u = this._spacesFor("attribute");
        if (((o += u.before.length), i === "namespace" || i === "ns"))
          return this.namespace ? o : -1;
        if (
          i === "attributeNS" ||
          ((o += this.namespaceString.length),
          this.namespace && (o += 1),
          i === "attribute")
        )
          return o;
        (o += this.stringifyProperty("attribute").length),
          (o += u.after.length);
        var s = this._spacesFor("operator");
        o += s.before.length;
        var a = this.stringifyProperty("operator");
        if (i === "operator") return a ? o : -1;
        (o += a.length), (o += s.after.length);
        var l = this._spacesFor("value");
        o += l.before.length;
        var f = this.stringifyProperty("value");
        if (i === "value") return f ? o : -1;
        (o += f.length), (o += l.after.length);
        var c = this._spacesFor("insensitive");
        return (
          (o += c.before.length),
          i === "insensitive" && this.insensitive ? o : -1
        );
      }),
      (n.toString = function () {
        var i = this,
          o = [this.rawSpaceBefore, "["];
        return (
          o.push(this._stringFor("qualifiedAttribute", "attribute")),
          this.operator &&
            (this.value || this.value === "") &&
            (o.push(this._stringFor("operator")),
            o.push(this._stringFor("value")),
            o.push(
              this._stringFor(
                "insensitiveFlag",
                "insensitive",
                function (u, s) {
                  return (
                    u.length > 0 &&
                      !i.quoted &&
                      s.before.length === 0 &&
                      !(i.spaces.value && i.spaces.value.after) &&
                      (s.before = " "),
                    Ts(u, s)
                  );
                },
              ),
            )),
          o.push("]"),
          o.push(this.rawSpaceAfter),
          o.join("")
        );
      }),
      Nd(t, [
        {
          key: "quoted",
          get: function () {
            var i = this.quoteMark;
            return i === "'" || i === '"';
          },
          set: function (i) {
            Ud();
          },
        },
        {
          key: "quoteMark",
          get: function () {
            return this._quoteMark;
          },
          set: function (i) {
            if (!this._constructed) {
              this._quoteMark = i;
              return;
            }
            this._quoteMark !== i &&
              ((this._quoteMark = i), this._syncRawValue());
          },
        },
        {
          key: "qualifiedAttribute",
          get: function () {
            return this.qualifiedName(this.raws.attribute || this.attribute);
          },
        },
        {
          key: "insensitiveFlag",
          get: function () {
            return this.insensitive ? "i" : "";
          },
        },
        {
          key: "value",
          get: function () {
            return this._value;
          },
          set: function (i) {
            if (this._constructed) {
              var o = Ti(i),
                u = o.deprecatedUsage,
                s = o.unescaped,
                a = o.quoteMark;
              if ((u && qd(), s === this._value && a === this._quoteMark))
                return;
              (this._value = s), (this._quoteMark = a), this._syncRawValue();
            } else this._value = i;
          },
        },
        {
          key: "attribute",
          get: function () {
            return this._attribute;
          },
          set: function (i) {
            this._handleEscapes("attribute", i), (this._attribute = i);
          },
        },
      ]),
      t
    );
  })(Ld.default);
  ur.default = on;
  on.NO_QUOTE = null;
  on.SINGLE_QUOTE = "'";
  on.DOUBLE_QUOTE = '"';
  var _i =
    ((Ci = {
      "'": { quotes: "single", wrap: !0 },
      '"': { quotes: "double", wrap: !0 },
    }),
    (Ci[null] = { isIdentifier: !0 }),
    Ci);
  function Ts(e, t) {
    return "" + t.before + e + t.after;
  }
});
var Pi = T((sr, As) => {
  "use strict";
  sr.__esModule = !0;
  sr.default = void 0;
  var jd = Vd(nn()),
    Hd = he();
  function Vd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Yd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Oi(e, t);
  }
  function Oi(e, t) {
    return (
      (Oi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      Oi(e, t)
    );
  }
  var Xd = (function (e) {
    Yd(t, e);
    function t(n) {
      var r;
      return (
        (r = e.call(this, n) || this),
        (r.type = Hd.UNIVERSAL),
        (r.value = "*"),
        r
      );
    }
    return t;
  })(jd.default);
  sr.default = Xd;
  As.exports = sr.default;
});
var Ii = T((ar, Os) => {
  "use strict";
  ar.__esModule = !0;
  ar.default = void 0;
  var Qd = Jd(Ue()),
    Kd = he();
  function Jd(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Zd(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Bi(e, t);
  }
  function Bi(e, t) {
    return (
      (Bi =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      Bi(e, t)
    );
  }
  var ep = (function (e) {
    Zd(t, e);
    function t(n) {
      var r;
      return (r = e.call(this, n) || this), (r.type = Kd.COMBINATOR), r;
    }
    return t;
  })(Qd.default);
  ar.default = ep;
  Os.exports = ar.default;
});
var Li = T((lr, Ps) => {
  "use strict";
  lr.__esModule = !0;
  lr.default = void 0;
  var tp = np(Ue()),
    rp = he();
  function np(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function ip(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Ri(e, t);
  }
  function Ri(e, t) {
    return (
      (Ri =
        Object.setPrototypeOf ||
        function (r, i) {
          return (r.__proto__ = i), r;
        }),
      Ri(e, t)
    );
  }
  var op = (function (e) {
    ip(t, e);
    function t(n) {
      var r;
      return (
        (r = e.call(this, n) || this), (r.type = rp.NESTING), (r.value = "&"), r
      );
    }
    return t;
  })(tp.default);
  lr.default = op;
  Ps.exports = lr.default;
});
var Is = T((un, Bs) => {
  "use strict";
  un.__esModule = !0;
  un.default = up;
  function up(e) {
    return e.sort(function (t, n) {
      return t - n;
    });
  }
  Bs.exports = un.default;
});
var Mi = T((S) => {
  "use strict";
  S.__esModule = !0;
  S.combinator =
    S.word =
    S.comment =
    S.str =
    S.tab =
    S.newline =
    S.feed =
    S.cr =
    S.backslash =
    S.bang =
    S.slash =
    S.doubleQuote =
    S.singleQuote =
    S.space =
    S.greaterThan =
    S.pipe =
    S.equals =
    S.plus =
    S.caret =
    S.tilde =
    S.dollar =
    S.closeSquare =
    S.openSquare =
    S.closeParenthesis =
    S.openParenthesis =
    S.semicolon =
    S.colon =
    S.comma =
    S.at =
    S.asterisk =
    S.ampersand =
      void 0;
  var sp = 38;
  S.ampersand = sp;
  var ap = 42;
  S.asterisk = ap;
  var lp = 64;
  S.at = lp;
  var fp = 44;
  S.comma = fp;
  var cp = 58;
  S.colon = cp;
  var dp = 59;
  S.semicolon = dp;
  var pp = 40;
  S.openParenthesis = pp;
  var hp = 41;
  S.closeParenthesis = hp;
  var mp = 91;
  S.openSquare = mp;
  var Dp = 93;
  S.closeSquare = Dp;
  var gp = 36;
  S.dollar = gp;
  var bp = 126;
  S.tilde = bp;
  var vp = 94;
  S.caret = vp;
  var yp = 43;
  S.plus = yp;
  var xp = 61;
  S.equals = xp;
  var Fp = 124;
  S.pipe = Fp;
  var wp = 62;
  S.greaterThan = wp;
  var Ep = 32;
  S.space = Ep;
  var Rs = 39;
  S.singleQuote = Rs;
  var Cp = 34;
  S.doubleQuote = Cp;
  var _p = 47;
  S.slash = _p;
  var Sp = 33;
  S.bang = Sp;
  var kp = 92;
  S.backslash = kp;
  var Tp = 13;
  S.cr = Tp;
  var Ap = 12;
  S.feed = Ap;
  var Op = 10;
  S.newline = Op;
  var Pp = 9;
  S.tab = Pp;
  var Bp = Rs;
  S.str = Bp;
  var Ip = -1;
  S.comment = Ip;
  var Rp = -2;
  S.word = Rp;
  var Lp = -3;
  S.combinator = Lp;
});
var Ns = T((fr) => {
  "use strict";
  fr.__esModule = !0;
  fr.default = zp;
  fr.FIELDS = void 0;
  var E = Mp(Mi()),
    yt,
    Q;
  function Ms() {
    if (typeof WeakMap != "function") return null;
    var e = new WeakMap();
    return (
      (Ms = function () {
        return e;
      }),
      e
    );
  }
  function Mp(e) {
    if (e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var t = Ms();
    if (t && t.has(e)) return t.get(e);
    var n = {},
      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
      }
    return (n.default = e), t && t.set(e, n), n;
  }
  var Np =
      ((yt = {}),
      (yt[E.tab] = !0),
      (yt[E.newline] = !0),
      (yt[E.cr] = !0),
      (yt[E.feed] = !0),
      yt),
    $p =
      ((Q = {}),
      (Q[E.space] = !0),
      (Q[E.tab] = !0),
      (Q[E.newline] = !0),
      (Q[E.cr] = !0),
      (Q[E.feed] = !0),
      (Q[E.ampersand] = !0),
      (Q[E.asterisk] = !0),
      (Q[E.bang] = !0),
      (Q[E.comma] = !0),
      (Q[E.colon] = !0),
      (Q[E.semicolon] = !0),
      (Q[E.openParenthesis] = !0),
      (Q[E.closeParenthesis] = !0),
      (Q[E.openSquare] = !0),
      (Q[E.closeSquare] = !0),
      (Q[E.singleQuote] = !0),
      (Q[E.doubleQuote] = !0),
      (Q[E.plus] = !0),
      (Q[E.pipe] = !0),
      (Q[E.tilde] = !0),
      (Q[E.greaterThan] = !0),
      (Q[E.equals] = !0),
      (Q[E.dollar] = !0),
      (Q[E.caret] = !0),
      (Q[E.slash] = !0),
      Q),
    Ni = {},
    Ls = "0123456789abcdefABCDEF";
  for (sn = 0; sn < Ls.length; sn++) Ni[Ls.charCodeAt(sn)] = !0;
  var sn;
  function Wp(e, t) {
    var n = t,
      r;
    do {
      if (((r = e.charCodeAt(n)), $p[r])) return n - 1;
      r === E.backslash ? (n = qp(e, n) + 1) : n++;
    } while (n < e.length);
    return n - 1;
  }
  function qp(e, t) {
    var n = t,
      r = e.charCodeAt(n + 1);
    if (!Np[r])
      if (Ni[r]) {
        var i = 0;
        do n++, i++, (r = e.charCodeAt(n + 1));
        while (Ni[r] && i < 6);
        i < 6 && r === E.space && n++;
      } else n++;
    return n;
  }
  var Up = {
    TYPE: 0,
    START_LINE: 1,
    START_COL: 2,
    END_LINE: 3,
    END_COL: 4,
    START_POS: 5,
    END_POS: 6,
  };
  fr.FIELDS = Up;
  function zp(e) {
    var t = [],
      n = e.css.valueOf(),
      r = n,
      i = r.length,
      o = -1,
      u = 1,
      s = 0,
      a = 0,
      l,
      f,
      c,
      p,
      h,
      d,
      m,
      v,
      g,
      b,
      x,
      F,
      y;
    function k(P, B) {
      if (e.safe) (n += B), (g = n.length - 1);
      else throw e.error("Unclosed " + P, u, s - o, s);
    }
    for (; s < i; ) {
      switch (
        ((l = n.charCodeAt(s)), l === E.newline && ((o = s), (u += 1)), l)
      ) {
        case E.space:
        case E.tab:
        case E.newline:
        case E.cr:
        case E.feed:
          g = s;
          do
            (g += 1),
              (l = n.charCodeAt(g)),
              l === E.newline && ((o = g), (u += 1));
          while (
            l === E.space ||
            l === E.newline ||
            l === E.tab ||
            l === E.cr ||
            l === E.feed
          );
          (y = E.space), (p = u), (c = g - o - 1), (a = g);
          break;
        case E.plus:
        case E.greaterThan:
        case E.tilde:
        case E.pipe:
          g = s;
          do (g += 1), (l = n.charCodeAt(g));
          while (
            l === E.plus ||
            l === E.greaterThan ||
            l === E.tilde ||
            l === E.pipe
          );
          (y = E.combinator), (p = u), (c = s - o), (a = g);
          break;
        case E.asterisk:
        case E.ampersand:
        case E.bang:
        case E.comma:
        case E.equals:
        case E.dollar:
        case E.caret:
        case E.openSquare:
        case E.closeSquare:
        case E.colon:
        case E.semicolon:
        case E.openParenthesis:
        case E.closeParenthesis:
          (g = s), (y = l), (p = u), (c = s - o), (a = g + 1);
          break;
        case E.singleQuote:
        case E.doubleQuote:
          (F = l === E.singleQuote ? "'" : '"'), (g = s);
          do
            for (
              h = !1, g = n.indexOf(F, g + 1), g === -1 && k("quote", F), d = g;
              n.charCodeAt(d - 1) === E.backslash;

            )
              (d -= 1), (h = !h);
          while (h);
          (y = E.str), (p = u), (c = s - o), (a = g + 1);
          break;
        default:
          l === E.slash && n.charCodeAt(s + 1) === E.asterisk
            ? ((g = n.indexOf("*/", s + 2) + 1),
              g === 0 && k("comment", "*/"),
              (f = n.slice(s, g + 1)),
              (v = f.split(`
`)),
              (m = v.length - 1),
              m > 0 ? ((b = u + m), (x = g - v[m].length)) : ((b = u), (x = o)),
              (y = E.comment),
              (u = b),
              (p = b),
              (c = g - x))
            : l === E.slash
            ? ((g = s), (y = l), (p = u), (c = s - o), (a = g + 1))
            : ((g = Wp(n, s)), (y = E.word), (p = u), (c = g - o)),
            (a = g + 1);
          break;
      }
      t.push([y, u, s - o, p, c, s, a]), x && ((o = x), (x = null)), (s = a);
    }
    return t;
  }
});
var Hs = T((cr, js) => {
  "use strict";
  cr.__esModule = !0;
  cr.default = void 0;
  var Gp = _e(ai()),
    $i = _e(fi()),
    jp = _e(pi()),
    $s = _e(mi()),
    Hp = _e(gi()),
    Vp = _e(yi()),
    Wi = _e(Fi()),
    Yp = _e(Ei()),
    Ws = an(Ai()),
    Xp = _e(Pi()),
    qi = _e(Ii()),
    Qp = _e(Li()),
    Kp = _e(Is()),
    w = an(Ns()),
    _ = an(Mi()),
    Jp = an(he()),
    te = Ht(),
    ot,
    Ui;
  function Gs() {
    if (typeof WeakMap != "function") return null;
    var e = new WeakMap();
    return (
      (Gs = function () {
        return e;
      }),
      e
    );
  }
  function an(e) {
    if (e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var t = Gs();
    if (t && t.has(e)) return t.get(e);
    var n = {},
      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
      }
    return (n.default = e), t && t.set(e, n), n;
  }
  function _e(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function qs(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Zp(e, t, n) {
    return t && qs(e.prototype, t), n && qs(e, n), e;
  }
  var ji =
      ((ot = {}),
      (ot[_.space] = !0),
      (ot[_.cr] = !0),
      (ot[_.feed] = !0),
      (ot[_.newline] = !0),
      (ot[_.tab] = !0),
      ot),
    e0 = Object.assign({}, ji, ((Ui = {}), (Ui[_.comment] = !0), Ui));
  function Us(e) {
    return { line: e[w.FIELDS.START_LINE], column: e[w.FIELDS.START_COL] };
  }
  function zs(e) {
    return { line: e[w.FIELDS.END_LINE], column: e[w.FIELDS.END_COL] };
  }
  function ut(e, t, n, r) {
    return { start: { line: e, column: t }, end: { line: n, column: r } };
  }
  function xt(e) {
    return ut(
      e[w.FIELDS.START_LINE],
      e[w.FIELDS.START_COL],
      e[w.FIELDS.END_LINE],
      e[w.FIELDS.END_COL],
    );
  }
  function zi(e, t) {
    if (e)
      return ut(
        e[w.FIELDS.START_LINE],
        e[w.FIELDS.START_COL],
        t[w.FIELDS.END_LINE],
        t[w.FIELDS.END_COL],
      );
  }
  function Ft(e, t) {
    var n = e[t];
    if (typeof n == "string")
      return (
        n.indexOf("\\") !== -1 &&
          ((0, te.ensureObject)(e, "raws"),
          (e[t] = (0, te.unesc)(n)),
          e.raws[t] === void 0 && (e.raws[t] = n)),
        e
      );
  }
  function Gi(e, t) {
    for (var n = -1, r = []; (n = e.indexOf(t, n + 1)) !== -1; ) r.push(n);
    return r;
  }
  function t0() {
    var e = Array.prototype.concat.apply([], arguments);
    return e.filter(function (t, n) {
      return n === e.indexOf(t);
    });
  }
  var r0 = (function () {
    function e(n, r) {
      r === void 0 && (r = {}),
        (this.rule = n),
        (this.options = Object.assign({ lossy: !1, safe: !1 }, r)),
        (this.position = 0),
        (this.css =
          typeof this.rule == "string" ? this.rule : this.rule.selector),
        (this.tokens = (0, w.default)({
          css: this.css,
          error: this._errorGenerator(),
          safe: this.options.safe,
        }));
      var i = zi(this.tokens[0], this.tokens[this.tokens.length - 1]);
      (this.root = new Gp.default({ source: i })),
        (this.root.errorGenerator = this._errorGenerator());
      var o = new $i.default({ source: { start: { line: 1, column: 1 } } });
      this.root.append(o), (this.current = o), this.loop();
    }
    var t = e.prototype;
    return (
      (t._errorGenerator = function () {
        var r = this;
        return function (i, o) {
          return typeof r.rule == "string" ? new Error(i) : r.rule.error(i, o);
        };
      }),
      (t.attribute = function () {
        var r = [],
          i = this.currToken;
        for (
          this.position++;
          this.position < this.tokens.length &&
          this.currToken[w.FIELDS.TYPE] !== _.closeSquare;

        )
          r.push(this.currToken), this.position++;
        if (this.currToken[w.FIELDS.TYPE] !== _.closeSquare)
          return this.expected(
            "closing square bracket",
            this.currToken[w.FIELDS.START_POS],
          );
        var o = r.length,
          u = {
            source: ut(i[1], i[2], this.currToken[3], this.currToken[4]),
            sourceIndex: i[w.FIELDS.START_POS],
          };
        if (o === 1 && !~[_.word].indexOf(r[0][w.FIELDS.TYPE]))
          return this.expected("attribute", r[0][w.FIELDS.START_POS]);
        for (var s = 0, a = "", l = "", f = null, c = !1; s < o; ) {
          var p = r[s],
            h = this.content(p),
            d = r[s + 1];
          switch (p[w.FIELDS.TYPE]) {
            case _.space:
              if (((c = !0), this.options.lossy)) break;
              if (f) {
                (0, te.ensureObject)(u, "spaces", f);
                var m = u.spaces[f].after || "";
                u.spaces[f].after = m + h;
                var v =
                  (0, te.getProp)(u, "raws", "spaces", f, "after") || null;
                v && (u.raws.spaces[f].after = v + h);
              } else (a = a + h), (l = l + h);
              break;
            case _.asterisk:
              if (d[w.FIELDS.TYPE] === _.equals)
                (u.operator = h), (f = "operator");
              else if ((!u.namespace || (f === "namespace" && !c)) && d) {
                a &&
                  ((0, te.ensureObject)(u, "spaces", "attribute"),
                  (u.spaces.attribute.before = a),
                  (a = "")),
                  l &&
                    ((0, te.ensureObject)(u, "raws", "spaces", "attribute"),
                    (u.raws.spaces.attribute.before = a),
                    (l = "")),
                  (u.namespace = (u.namespace || "") + h);
                var g = (0, te.getProp)(u, "raws", "namespace") || null;
                g && (u.raws.namespace += h), (f = "namespace");
              }
              c = !1;
              break;
            case _.dollar:
              if (f === "value") {
                var b = (0, te.getProp)(u, "raws", "value");
                (u.value += "$"), b && (u.raws.value = b + "$");
                break;
              }
            case _.caret:
              d[w.FIELDS.TYPE] === _.equals &&
                ((u.operator = h), (f = "operator")),
                (c = !1);
              break;
            case _.combinator:
              if (
                (h === "~" &&
                  d[w.FIELDS.TYPE] === _.equals &&
                  ((u.operator = h), (f = "operator")),
                h !== "|")
              ) {
                c = !1;
                break;
              }
              d[w.FIELDS.TYPE] === _.equals
                ? ((u.operator = h), (f = "operator"))
                : !u.namespace && !u.attribute && (u.namespace = !0),
                (c = !1);
              break;
            case _.word:
              if (
                d &&
                this.content(d) === "|" &&
                r[s + 2] &&
                r[s + 2][w.FIELDS.TYPE] !== _.equals &&
                !u.operator &&
                !u.namespace
              )
                (u.namespace = h), (f = "namespace");
              else if (!u.attribute || (f === "attribute" && !c)) {
                a &&
                  ((0, te.ensureObject)(u, "spaces", "attribute"),
                  (u.spaces.attribute.before = a),
                  (a = "")),
                  l &&
                    ((0, te.ensureObject)(u, "raws", "spaces", "attribute"),
                    (u.raws.spaces.attribute.before = l),
                    (l = "")),
                  (u.attribute = (u.attribute || "") + h);
                var x = (0, te.getProp)(u, "raws", "attribute") || null;
                x && (u.raws.attribute += h), (f = "attribute");
              } else if (
                (!u.value && u.value !== "") ||
                (f === "value" && !c)
              ) {
                var F = (0, te.unesc)(h),
                  y = (0, te.getProp)(u, "raws", "value") || "",
                  k = u.value || "";
                (u.value = k + F),
                  (u.quoteMark = null),
                  (F !== h || y) &&
                    ((0, te.ensureObject)(u, "raws"),
                    (u.raws.value = (y || k) + h)),
                  (f = "value");
              } else {
                var P = h === "i" || h === "I";
                (u.value || u.value === "") && (u.quoteMark || c)
                  ? ((u.insensitive = P),
                    (!P || h === "I") &&
                      ((0, te.ensureObject)(u, "raws"),
                      (u.raws.insensitiveFlag = h)),
                    (f = "insensitive"),
                    a &&
                      ((0, te.ensureObject)(u, "spaces", "insensitive"),
                      (u.spaces.insensitive.before = a),
                      (a = "")),
                    l &&
                      ((0, te.ensureObject)(u, "raws", "spaces", "insensitive"),
                      (u.raws.spaces.insensitive.before = l),
                      (l = "")))
                  : (u.value || u.value === "") &&
                    ((f = "value"),
                    (u.value += h),
                    u.raws.value && (u.raws.value += h));
              }
              c = !1;
              break;
            case _.str:
              if (!u.attribute || !u.operator)
                return this.error(
                  "Expected an attribute followed by an operator preceding the string.",
                  { index: p[w.FIELDS.START_POS] },
                );
              var B = (0, Ws.unescapeValue)(h),
                j = B.unescaped,
                ie = B.quoteMark;
              (u.value = j),
                (u.quoteMark = ie),
                (f = "value"),
                (0, te.ensureObject)(u, "raws"),
                (u.raws.value = h),
                (c = !1);
              break;
            case _.equals:
              if (!u.attribute)
                return this.expected("attribute", p[w.FIELDS.START_POS], h);
              if (u.value)
                return this.error(
                  'Unexpected "=" found; an operator was already defined.',
                  { index: p[w.FIELDS.START_POS] },
                );
              (u.operator = u.operator ? u.operator + h : h),
                (f = "operator"),
                (c = !1);
              break;
            case _.comment:
              if (f)
                if (
                  c ||
                  (d && d[w.FIELDS.TYPE] === _.space) ||
                  f === "insensitive"
                ) {
                  var oe = (0, te.getProp)(u, "spaces", f, "after") || "",
                    ue = (0, te.getProp)(u, "raws", "spaces", f, "after") || oe;
                  (0, te.ensureObject)(u, "raws", "spaces", f),
                    (u.raws.spaces[f].after = ue + h);
                } else {
                  var N = u[f] || "",
                    L = (0, te.getProp)(u, "raws", f) || N;
                  (0, te.ensureObject)(u, "raws"), (u.raws[f] = L + h);
                }
              else l = l + h;
              break;
            default:
              return this.error('Unexpected "' + h + '" found.', {
                index: p[w.FIELDS.START_POS],
              });
          }
          s++;
        }
        Ft(u, "attribute"),
          Ft(u, "namespace"),
          this.newNode(new Ws.default(u)),
          this.position++;
      }),
      (t.parseWhitespaceEquivalentTokens = function (r) {
        r < 0 && (r = this.tokens.length);
        var i = this.position,
          o = [],
          u = "",
          s = void 0;
        do
          if (ji[this.currToken[w.FIELDS.TYPE]])
            this.options.lossy || (u += this.content());
          else if (this.currToken[w.FIELDS.TYPE] === _.comment) {
            var a = {};
            u && ((a.before = u), (u = "")),
              (s = new $s.default({
                value: this.content(),
                source: xt(this.currToken),
                sourceIndex: this.currToken[w.FIELDS.START_POS],
                spaces: a,
              })),
              o.push(s);
          }
        while (++this.position < r);
        if (u) {
          if (s) s.spaces.after = u;
          else if (!this.options.lossy) {
            var l = this.tokens[i],
              f = this.tokens[this.position - 1];
            o.push(
              new Wi.default({
                value: "",
                source: ut(
                  l[w.FIELDS.START_LINE],
                  l[w.FIELDS.START_COL],
                  f[w.FIELDS.END_LINE],
                  f[w.FIELDS.END_COL],
                ),
                sourceIndex: l[w.FIELDS.START_POS],
                spaces: { before: u, after: "" },
              }),
            );
          }
        }
        return o;
      }),
      (t.convertWhitespaceNodesToSpace = function (r, i) {
        var o = this;
        i === void 0 && (i = !1);
        var u = "",
          s = "";
        r.forEach(function (l) {
          var f = o.lossySpace(l.spaces.before, i),
            c = o.lossySpace(l.rawSpaceBefore, i);
          (u += f + o.lossySpace(l.spaces.after, i && f.length === 0)),
            (s +=
              f + l.value + o.lossySpace(l.rawSpaceAfter, i && c.length === 0));
        }),
          s === u && (s = void 0);
        var a = { space: u, rawSpace: s };
        return a;
      }),
      (t.isNamedCombinator = function (r) {
        return (
          r === void 0 && (r = this.position),
          this.tokens[r + 0] &&
            this.tokens[r + 0][w.FIELDS.TYPE] === _.slash &&
            this.tokens[r + 1] &&
            this.tokens[r + 1][w.FIELDS.TYPE] === _.word &&
            this.tokens[r + 2] &&
            this.tokens[r + 2][w.FIELDS.TYPE] === _.slash
        );
      }),
      (t.namedCombinator = function () {
        if (this.isNamedCombinator()) {
          var r = this.content(this.tokens[this.position + 1]),
            i = (0, te.unesc)(r).toLowerCase(),
            o = {};
          i !== r && (o.value = "/" + r + "/");
          var u = new qi.default({
            value: "/" + i + "/",
            source: ut(
              this.currToken[w.FIELDS.START_LINE],
              this.currToken[w.FIELDS.START_COL],
              this.tokens[this.position + 2][w.FIELDS.END_LINE],
              this.tokens[this.position + 2][w.FIELDS.END_COL],
            ),
            sourceIndex: this.currToken[w.FIELDS.START_POS],
            raws: o,
          });
          return (this.position = this.position + 3), u;
        } else this.unexpected();
      }),
      (t.combinator = function () {
        var r = this;
        if (this.content() === "|") return this.namespace();
        var i = this.locateNextMeaningfulToken(this.position);
        if (i < 0 || this.tokens[i][w.FIELDS.TYPE] === _.comma) {
          var o = this.parseWhitespaceEquivalentTokens(i);
          if (o.length > 0) {
            var u = this.current.last;
            if (u) {
              var s = this.convertWhitespaceNodesToSpace(o),
                a = s.space,
                l = s.rawSpace;
              l !== void 0 && (u.rawSpaceAfter += l), (u.spaces.after += a);
            } else
              o.forEach(function (y) {
                return r.newNode(y);
              });
          }
          return;
        }
        var f = this.currToken,
          c = void 0;
        i > this.position && (c = this.parseWhitespaceEquivalentTokens(i));
        var p;
        if (
          (this.isNamedCombinator()
            ? (p = this.namedCombinator())
            : this.currToken[w.FIELDS.TYPE] === _.combinator
            ? ((p = new qi.default({
                value: this.content(),
                source: xt(this.currToken),
                sourceIndex: this.currToken[w.FIELDS.START_POS],
              })),
              this.position++)
            : ji[this.currToken[w.FIELDS.TYPE]] || c || this.unexpected(),
          p)
        ) {
          if (c) {
            var h = this.convertWhitespaceNodesToSpace(c),
              d = h.space,
              m = h.rawSpace;
            (p.spaces.before = d), (p.rawSpaceBefore = m);
          }
        } else {
          var v = this.convertWhitespaceNodesToSpace(c, !0),
            g = v.space,
            b = v.rawSpace;
          b || (b = g);
          var x = {},
            F = { spaces: {} };
          g.endsWith(" ") && b.endsWith(" ")
            ? ((x.before = g.slice(0, g.length - 1)),
              (F.spaces.before = b.slice(0, b.length - 1)))
            : g.startsWith(" ") && b.startsWith(" ")
            ? ((x.after = g.slice(1)), (F.spaces.after = b.slice(1)))
            : (F.value = b),
            (p = new qi.default({
              value: " ",
              source: zi(f, this.tokens[this.position - 1]),
              sourceIndex: f[w.FIELDS.START_POS],
              spaces: x,
              raws: F,
            }));
        }
        return (
          this.currToken &&
            this.currToken[w.FIELDS.TYPE] === _.space &&
            ((p.spaces.after = this.optionalSpace(this.content())),
            this.position++),
          this.newNode(p)
        );
      }),
      (t.comma = function () {
        if (this.position === this.tokens.length - 1) {
          (this.root.trailingComma = !0), this.position++;
          return;
        }
        this.current._inferEndPosition();
        var r = new $i.default({
          source: { start: Us(this.tokens[this.position + 1]) },
        });
        this.current.parent.append(r), (this.current = r), this.position++;
      }),
      (t.comment = function () {
        var r = this.currToken;
        this.newNode(
          new $s.default({
            value: this.content(),
            source: xt(r),
            sourceIndex: r[w.FIELDS.START_POS],
          }),
        ),
          this.position++;
      }),
      (t.error = function (r, i) {
        throw this.root.error(r, i);
      }),
      (t.missingBackslash = function () {
        return this.error("Expected a backslash preceding the semicolon.", {
          index: this.currToken[w.FIELDS.START_POS],
        });
      }),
      (t.missingParenthesis = function () {
        return this.expected(
          "opening parenthesis",
          this.currToken[w.FIELDS.START_POS],
        );
      }),
      (t.missingSquareBracket = function () {
        return this.expected(
          "opening square bracket",
          this.currToken[w.FIELDS.START_POS],
        );
      }),
      (t.unexpected = function () {
        return this.error(
          "Unexpected '" +
            this.content() +
            "'. Escaping special characters with \\ may help.",
          this.currToken[w.FIELDS.START_POS],
        );
      }),
      (t.namespace = function () {
        var r = (this.prevToken && this.content(this.prevToken)) || !0;
        if (this.nextToken[w.FIELDS.TYPE] === _.word)
          return this.position++, this.word(r);
        if (this.nextToken[w.FIELDS.TYPE] === _.asterisk)
          return this.position++, this.universal(r);
      }),
      (t.nesting = function () {
        if (this.nextToken) {
          var r = this.content(this.nextToken);
          if (r === "|") {
            this.position++;
            return;
          }
        }
        var i = this.currToken;
        this.newNode(
          new Qp.default({
            value: this.content(),
            source: xt(i),
            sourceIndex: i[w.FIELDS.START_POS],
          }),
        ),
          this.position++;
      }),
      (t.parentheses = function () {
        var r = this.current.last,
          i = 1;
        if ((this.position++, r && r.type === Jp.PSEUDO)) {
          var o = new $i.default({
              source: { start: Us(this.tokens[this.position - 1]) },
            }),
            u = this.current;
          for (
            r.append(o), this.current = o;
            this.position < this.tokens.length && i;

          )
            this.currToken[w.FIELDS.TYPE] === _.openParenthesis && i++,
              this.currToken[w.FIELDS.TYPE] === _.closeParenthesis && i--,
              i
                ? this.parse()
                : ((this.current.source.end = zs(this.currToken)),
                  (this.current.parent.source.end = zs(this.currToken)),
                  this.position++);
          this.current = u;
        } else {
          for (
            var s = this.currToken, a = "(", l;
            this.position < this.tokens.length && i;

          )
            this.currToken[w.FIELDS.TYPE] === _.openParenthesis && i++,
              this.currToken[w.FIELDS.TYPE] === _.closeParenthesis && i--,
              (l = this.currToken),
              (a += this.parseParenthesisToken(this.currToken)),
              this.position++;
          r
            ? r.appendToPropertyAndEscape("value", a, a)
            : this.newNode(
                new Wi.default({
                  value: a,
                  source: ut(
                    s[w.FIELDS.START_LINE],
                    s[w.FIELDS.START_COL],
                    l[w.FIELDS.END_LINE],
                    l[w.FIELDS.END_COL],
                  ),
                  sourceIndex: s[w.FIELDS.START_POS],
                }),
              );
        }
        if (i)
          return this.expected(
            "closing parenthesis",
            this.currToken[w.FIELDS.START_POS],
          );
      }),
      (t.pseudo = function () {
        for (
          var r = this, i = "", o = this.currToken;
          this.currToken && this.currToken[w.FIELDS.TYPE] === _.colon;

        )
          (i += this.content()), this.position++;
        if (!this.currToken)
          return this.expected(
            ["pseudo-class", "pseudo-element"],
            this.position - 1,
          );
        if (this.currToken[w.FIELDS.TYPE] === _.word)
          this.splitWord(!1, function (u, s) {
            (i += u),
              r.newNode(
                new Yp.default({
                  value: i,
                  source: zi(o, r.currToken),
                  sourceIndex: o[w.FIELDS.START_POS],
                }),
              ),
              s > 1 &&
                r.nextToken &&
                r.nextToken[w.FIELDS.TYPE] === _.openParenthesis &&
                r.error("Misplaced parenthesis.", {
                  index: r.nextToken[w.FIELDS.START_POS],
                });
          });
        else
          return this.expected(
            ["pseudo-class", "pseudo-element"],
            this.currToken[w.FIELDS.START_POS],
          );
      }),
      (t.space = function () {
        var r = this.content();
        this.position === 0 ||
        this.prevToken[w.FIELDS.TYPE] === _.comma ||
        this.prevToken[w.FIELDS.TYPE] === _.openParenthesis ||
        this.current.nodes.every(function (i) {
          return i.type === "comment";
        })
          ? ((this.spaces = this.optionalSpace(r)), this.position++)
          : this.position === this.tokens.length - 1 ||
            this.nextToken[w.FIELDS.TYPE] === _.comma ||
            this.nextToken[w.FIELDS.TYPE] === _.closeParenthesis
          ? ((this.current.last.spaces.after = this.optionalSpace(r)),
            this.position++)
          : this.combinator();
      }),
      (t.string = function () {
        var r = this.currToken;
        this.newNode(
          new Wi.default({
            value: this.content(),
            source: xt(r),
            sourceIndex: r[w.FIELDS.START_POS],
          }),
        ),
          this.position++;
      }),
      (t.universal = function (r) {
        var i = this.nextToken;
        if (i && this.content(i) === "|")
          return this.position++, this.namespace();
        var o = this.currToken;
        this.newNode(
          new Xp.default({
            value: this.content(),
            source: xt(o),
            sourceIndex: o[w.FIELDS.START_POS],
          }),
          r,
        ),
          this.position++;
      }),
      (t.splitWord = function (r, i) {
        for (
          var o = this, u = this.nextToken, s = this.content();
          u && ~[_.dollar, _.caret, _.equals, _.word].indexOf(u[w.FIELDS.TYPE]);

        ) {
          this.position++;
          var a = this.content();
          if (((s += a), a.lastIndexOf("\\") === a.length - 1)) {
            var l = this.nextToken;
            l &&
              l[w.FIELDS.TYPE] === _.space &&
              ((s += this.requiredSpace(this.content(l))), this.position++);
          }
          u = this.nextToken;
        }
        var f = Gi(s, ".").filter(function (d) {
            var m = s[d - 1] === "\\",
              v = /^\d+\.\d+%$/.test(s);
            return !m && !v;
          }),
          c = Gi(s, "#").filter(function (d) {
            return s[d - 1] !== "\\";
          }),
          p = Gi(s, "#{");
        p.length &&
          (c = c.filter(function (d) {
            return !~p.indexOf(d);
          }));
        var h = (0, Kp.default)(t0([0].concat(f, c)));
        h.forEach(function (d, m) {
          var v = h[m + 1] || s.length,
            g = s.slice(d, v);
          if (m === 0 && i) return i.call(o, g, h.length);
          var b,
            x = o.currToken,
            F = x[w.FIELDS.START_POS] + h[m],
            y = ut(x[1], x[2] + d, x[3], x[2] + (v - 1));
          if (~f.indexOf(d)) {
            var k = { value: g.slice(1), source: y, sourceIndex: F };
            b = new jp.default(Ft(k, "value"));
          } else if (~c.indexOf(d)) {
            var P = { value: g.slice(1), source: y, sourceIndex: F };
            b = new Hp.default(Ft(P, "value"));
          } else {
            var B = { value: g, source: y, sourceIndex: F };
            Ft(B, "value"), (b = new Vp.default(B));
          }
          o.newNode(b, r), (r = null);
        }),
          this.position++;
      }),
      (t.word = function (r) {
        var i = this.nextToken;
        return i && this.content(i) === "|"
          ? (this.position++, this.namespace())
          : this.splitWord(r);
      }),
      (t.loop = function () {
        for (; this.position < this.tokens.length; ) this.parse(!0);
        return this.current._inferEndPosition(), this.root;
      }),
      (t.parse = function (r) {
        switch (this.currToken[w.FIELDS.TYPE]) {
          case _.space:
            this.space();
            break;
          case _.comment:
            this.comment();
            break;
          case _.openParenthesis:
            this.parentheses();
            break;
          case _.closeParenthesis:
            r && this.missingParenthesis();
            break;
          case _.openSquare:
            this.attribute();
            break;
          case _.dollar:
          case _.caret:
          case _.equals:
          case _.word:
            this.word();
            break;
          case _.colon:
            this.pseudo();
            break;
          case _.comma:
            this.comma();
            break;
          case _.asterisk:
            this.universal();
            break;
          case _.ampersand:
            this.nesting();
            break;
          case _.slash:
          case _.combinator:
            this.combinator();
            break;
          case _.str:
            this.string();
            break;
          case _.closeSquare:
            this.missingSquareBracket();
          case _.semicolon:
            this.missingBackslash();
          default:
            this.unexpected();
        }
      }),
      (t.expected = function (r, i, o) {
        if (Array.isArray(r)) {
          var u = r.pop();
          r = r.join(", ") + " or " + u;
        }
        var s = /^[aeiou]/.test(r[0]) ? "an" : "a";
        return o
          ? this.error(
              "Expected " + s + " " + r + ', found "' + o + '" instead.',
              { index: i },
            )
          : this.error("Expected " + s + " " + r + ".", { index: i });
      }),
      (t.requiredSpace = function (r) {
        return this.options.lossy ? " " : r;
      }),
      (t.optionalSpace = function (r) {
        return this.options.lossy ? "" : r;
      }),
      (t.lossySpace = function (r, i) {
        return this.options.lossy ? (i ? " " : "") : r;
      }),
      (t.parseParenthesisToken = function (r) {
        var i = this.content(r);
        return r[w.FIELDS.TYPE] === _.space ? this.requiredSpace(i) : i;
      }),
      (t.newNode = function (r, i) {
        return (
          i &&
            (/^ +$/.test(i) &&
              (this.options.lossy || (this.spaces = (this.spaces || "") + i),
              (i = !0)),
            (r.namespace = i),
            Ft(r, "namespace")),
          this.spaces && ((r.spaces.before = this.spaces), (this.spaces = "")),
          this.current.append(r)
        );
      }),
      (t.content = function (r) {
        return (
          r === void 0 && (r = this.currToken),
          this.css.slice(r[w.FIELDS.START_POS], r[w.FIELDS.END_POS])
        );
      }),
      (t.locateNextMeaningfulToken = function (r) {
        r === void 0 && (r = this.position + 1);
        for (var i = r; i < this.tokens.length; )
          if (e0[this.tokens[i][w.FIELDS.TYPE]]) {
            i++;
            continue;
          } else return i;
        return -1;
      }),
      Zp(e, [
        {
          key: "currToken",
          get: function () {
            return this.tokens[this.position];
          },
        },
        {
          key: "nextToken",
          get: function () {
            return this.tokens[this.position + 1];
          },
        },
        {
          key: "prevToken",
          get: function () {
            return this.tokens[this.position - 1];
          },
        },
      ]),
      e
    );
  })();
  cr.default = r0;
  js.exports = cr.default;
});
var Ys = T((dr, Vs) => {
  "use strict";
  dr.__esModule = !0;
  dr.default = void 0;
  var n0 = i0(Hs());
  function i0(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var o0 = (function () {
    function e(n, r) {
      (this.func = n || function () {}),
        (this.funcRes = null),
        (this.options = r);
    }
    var t = e.prototype;
    return (
      (t._shouldUpdateSelector = function (r, i) {
        i === void 0 && (i = {});
        var o = Object.assign({}, this.options, i);
        return o.updateSelector === !1 ? !1 : typeof r != "string";
      }),
      (t._isLossy = function (r) {
        r === void 0 && (r = {});
        var i = Object.assign({}, this.options, r);
        return i.lossless === !1;
      }),
      (t._root = function (r, i) {
        i === void 0 && (i = {});
        var o = new n0.default(r, this._parseOptions(i));
        return o.root;
      }),
      (t._parseOptions = function (r) {
        return { lossy: this._isLossy(r) };
      }),
      (t._run = function (r, i) {
        var o = this;
        return (
          i === void 0 && (i = {}),
          new Promise(function (u, s) {
            try {
              var a = o._root(r, i);
              Promise.resolve(o.func(a))
                .then(function (l) {
                  var f = void 0;
                  return (
                    o._shouldUpdateSelector(r, i) &&
                      ((f = a.toString()), (r.selector = f)),
                    { transform: l, root: a, string: f }
                  );
                })
                .then(u, s);
            } catch (l) {
              s(l);
              return;
            }
          })
        );
      }),
      (t._runSync = function (r, i) {
        i === void 0 && (i = {});
        var o = this._root(r, i),
          u = this.func(o);
        if (u && typeof u.then == "function")
          throw new Error(
            "Selector processor returned a promise to a synchronous call.",
          );
        var s = void 0;
        return (
          i.updateSelector &&
            typeof r != "string" &&
            ((s = o.toString()), (r.selector = s)),
          { transform: u, root: o, string: s }
        );
      }),
      (t.ast = function (r, i) {
        return this._run(r, i).then(function (o) {
          return o.root;
        });
      }),
      (t.astSync = function (r, i) {
        return this._runSync(r, i).root;
      }),
      (t.transform = function (r, i) {
        return this._run(r, i).then(function (o) {
          return o.transform;
        });
      }),
      (t.transformSync = function (r, i) {
        return this._runSync(r, i).transform;
      }),
      (t.process = function (r, i) {
        return this._run(r, i).then(function (o) {
          return o.string || o.root.toString();
        });
      }),
      (t.processSync = function (r, i) {
        var o = this._runSync(r, i);
        return o.string || o.root.toString();
      }),
      e
    );
  })();
  dr.default = o0;
  Vs.exports = dr.default;
});
var Xs = T((J) => {
  "use strict";
  J.__esModule = !0;
  J.universal =
    J.tag =
    J.string =
    J.selector =
    J.root =
    J.pseudo =
    J.nesting =
    J.id =
    J.comment =
    J.combinator =
    J.className =
    J.attribute =
      void 0;
  var u0 = Se(Ai()),
    s0 = Se(pi()),
    a0 = Se(Ii()),
    l0 = Se(mi()),
    f0 = Se(gi()),
    c0 = Se(Li()),
    d0 = Se(Ei()),
    p0 = Se(ai()),
    h0 = Se(fi()),
    m0 = Se(Fi()),
    D0 = Se(yi()),
    g0 = Se(Pi());
  function Se(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var b0 = function (t) {
    return new u0.default(t);
  };
  J.attribute = b0;
  var v0 = function (t) {
    return new s0.default(t);
  };
  J.className = v0;
  var y0 = function (t) {
    return new a0.default(t);
  };
  J.combinator = y0;
  var x0 = function (t) {
    return new l0.default(t);
  };
  J.comment = x0;
  var F0 = function (t) {
    return new f0.default(t);
  };
  J.id = F0;
  var w0 = function (t) {
    return new c0.default(t);
  };
  J.nesting = w0;
  var E0 = function (t) {
    return new d0.default(t);
  };
  J.pseudo = E0;
  var C0 = function (t) {
    return new p0.default(t);
  };
  J.root = C0;
  var _0 = function (t) {
    return new h0.default(t);
  };
  J.selector = _0;
  var S0 = function (t) {
    return new m0.default(t);
  };
  J.string = S0;
  var k0 = function (t) {
    return new D0.default(t);
  };
  J.tag = k0;
  var T0 = function (t) {
    return new g0.default(t);
  };
  J.universal = T0;
});
var Zs = T((U) => {
  "use strict";
  U.__esModule = !0;
  U.isNode = Hi;
  U.isPseudoElement = Js;
  U.isPseudoClass = W0;
  U.isContainer = q0;
  U.isNamespace = U0;
  U.isUniversal =
    U.isTag =
    U.isString =
    U.isSelector =
    U.isRoot =
    U.isPseudo =
    U.isNesting =
    U.isIdentifier =
    U.isComment =
    U.isCombinator =
    U.isClassName =
    U.isAttribute =
      void 0;
  var re = he(),
    ye,
    A0 =
      ((ye = {}),
      (ye[re.ATTRIBUTE] = !0),
      (ye[re.CLASS] = !0),
      (ye[re.COMBINATOR] = !0),
      (ye[re.COMMENT] = !0),
      (ye[re.ID] = !0),
      (ye[re.NESTING] = !0),
      (ye[re.PSEUDO] = !0),
      (ye[re.ROOT] = !0),
      (ye[re.SELECTOR] = !0),
      (ye[re.STRING] = !0),
      (ye[re.TAG] = !0),
      (ye[re.UNIVERSAL] = !0),
      ye);
  function Hi(e) {
    return typeof e == "object" && A0[e.type];
  }
  function ke(e, t) {
    return Hi(t) && t.type === e;
  }
  var Qs = ke.bind(null, re.ATTRIBUTE);
  U.isAttribute = Qs;
  var O0 = ke.bind(null, re.CLASS);
  U.isClassName = O0;
  var P0 = ke.bind(null, re.COMBINATOR);
  U.isCombinator = P0;
  var B0 = ke.bind(null, re.COMMENT);
  U.isComment = B0;
  var I0 = ke.bind(null, re.ID);
  U.isIdentifier = I0;
  var R0 = ke.bind(null, re.NESTING);
  U.isNesting = R0;
  var Vi = ke.bind(null, re.PSEUDO);
  U.isPseudo = Vi;
  var L0 = ke.bind(null, re.ROOT);
  U.isRoot = L0;
  var M0 = ke.bind(null, re.SELECTOR);
  U.isSelector = M0;
  var N0 = ke.bind(null, re.STRING);
  U.isString = N0;
  var Ks = ke.bind(null, re.TAG);
  U.isTag = Ks;
  var $0 = ke.bind(null, re.UNIVERSAL);
  U.isUniversal = $0;
  function Js(e) {
    return (
      Vi(e) &&
      e.value &&
      (e.value.startsWith("::") ||
        e.value.toLowerCase() === ":before" ||
        e.value.toLowerCase() === ":after" ||
        e.value.toLowerCase() === ":first-letter" ||
        e.value.toLowerCase() === ":first-line")
    );
  }
  function W0(e) {
    return Vi(e) && !Js(e);
  }
  function q0(e) {
    return !!(Hi(e) && e.walk);
  }
  function U0(e) {
    return Qs(e) || Ks(e);
  }
});
var ea = T((Ie) => {
  "use strict";
  Ie.__esModule = !0;
  var Yi = he();
  Object.keys(Yi).forEach(function (e) {
    e === "default" ||
      e === "__esModule" ||
      (e in Ie && Ie[e] === Yi[e]) ||
      (Ie[e] = Yi[e]);
  });
  var Xi = Xs();
  Object.keys(Xi).forEach(function (e) {
    e === "default" ||
      e === "__esModule" ||
      (e in Ie && Ie[e] === Xi[e]) ||
      (Ie[e] = Xi[e]);
  });
  var Qi = Zs();
  Object.keys(Qi).forEach(function (e) {
    e === "default" ||
      e === "__esModule" ||
      (e in Ie && Ie[e] === Qi[e]) ||
      (Ie[e] = Qi[e]);
  });
});
var na = T((pr, ra) => {
  "use strict";
  pr.__esModule = !0;
  pr.default = void 0;
  var z0 = H0(Ys()),
    G0 = j0(ea());
  function ta() {
    if (typeof WeakMap != "function") return null;
    var e = new WeakMap();
    return (
      (ta = function () {
        return e;
      }),
      e
    );
  }
  function j0(e) {
    if (e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var t = ta();
    if (t && t.has(e)) return t.get(e);
    var n = {},
      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
      }
    return (n.default = e), t && t.set(e, n), n;
  }
  function H0(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var Ki = function (t) {
    return new z0.default(t);
  };
  Object.assign(Ki, G0);
  delete Ki.__esModule;
  var V0 = Ki;
  pr.default = V0;
  ra.exports = pr.default;
});
var ia = T((Ji) => {
  "use strict";
  Object.defineProperty(Ji, "__esModule", { value: !0 });
  Object.defineProperty(Ji, "default", { enumerable: !0, get: () => Y0 });
  function Y0(e) {
    return e.replace(/\\,/g, "\\2c ");
  }
});
var ua = T((mb, oa) => {
  "use strict";
  oa.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
});
var eo = T((Zi) => {
  "use strict";
  Object.defineProperty(Zi, "__esModule", { value: !0 });
  function X0(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  X0(Zi, { parseColor: () => th, formatColor: () => rh });
  var sa = Q0(ua());
  function Q0(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var K0 = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    J0 = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    Je = /(?:\d+|\d*\.\d+)%?/,
    ln = /(?:\s*,\s*|\s+)/,
    aa = /\s*[,/]\s*/,
    Ze = /var\(--(?:[^ )]*?)\)/,
    Z0 = new RegExp(
      `^(rgb)a?\\(\\s*(${Je.source}|${Ze.source})(?:${ln.source}(${Je.source}|${Ze.source}))?(?:${ln.source}(${Je.source}|${Ze.source}))?(?:${aa.source}(${Je.source}|${Ze.source}))?\\s*\\)$`,
    ),
    eh = new RegExp(
      `^(hsl)a?\\(\\s*((?:${Je.source})(?:deg|rad|grad|turn)?|${Ze.source})(?:${ln.source}(${Je.source}|${Ze.source}))?(?:${ln.source}(${Je.source}|${Ze.source}))?(?:${aa.source}(${Je.source}|${Ze.source}))?\\s*\\)$`,
    );
  function th(e, { loose: t = !1 } = {}) {
    var n, r;
    if (typeof e != "string") return null;
    if (((e = e.trim()), e === "transparent"))
      return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
    if (e in sa.default)
      return { mode: "rgb", color: sa.default[e].map((a) => a.toString()) };
    let i = e
      .replace(J0, (a, l, f, c, p) =>
        ["#", l, l, f, f, c, c, p ? p + p : ""].join(""),
      )
      .match(K0);
    if (i !== null)
      return {
        mode: "rgb",
        color: [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)].map(
          (a) => a.toString(),
        ),
        alpha: i[4] ? (parseInt(i[4], 16) / 255).toString() : void 0,
      };
    var o;
    let u = (o = e.match(Z0)) !== null && o !== void 0 ? o : e.match(eh);
    if (u === null) return null;
    let s = [u[2], u[3], u[4]].filter(Boolean).map((a) => a.toString());
    return (!t && s.length !== 3) ||
      (s.length < 3 && !s.some((a) => /^var\(.*?\)$/.test(a)))
      ? null
      : {
          mode: u[1],
          color: s,
          alpha:
            (n = u[5]) === null ||
            n === void 0 ||
            (r = n.toString) === null ||
            r === void 0
              ? void 0
              : r.call(n),
        };
  }
  function rh({ mode: e, color: t, alpha: n }) {
    let r = n !== void 0;
    return `${e}(${t.join(" ")}${r ? ` / ${n}` : ""})`;
  }
});
var ro = T((to) => {
  "use strict";
  Object.defineProperty(to, "__esModule", { value: !0 });
  function nh(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  nh(to, { withAlphaValue: () => ih, default: () => oh });
  var fn = eo();
  function ih(e, t, n) {
    if (typeof e == "function") return e({ opacityValue: t });
    let r = (0, fn.parseColor)(e, { loose: !0 });
    return r === null ? n : (0, fn.formatColor)({ ...r, alpha: t });
  }
  function oh({ color: e, property: t, variable: n }) {
    let r = [].concat(t);
    if (typeof e == "function")
      return {
        [n]: "1",
        ...Object.fromEntries(
          r.map((o) => [
            o,
            e({ opacityVariable: n, opacityValue: `var(${n})` }),
          ]),
        ),
      };
    let i = (0, fn.parseColor)(e);
    return i === null
      ? Object.fromEntries(r.map((o) => [o, e]))
      : i.alpha !== void 0
      ? Object.fromEntries(r.map((o) => [o, e]))
      : {
          [n]: "1",
          ...Object.fromEntries(
            r.map((o) => [
              o,
              (0, fn.formatColor)({ ...i, alpha: `var(${n})` }),
            ]),
          ),
        };
  }
});
var pa = T((no) => {
  "use strict";
  Object.defineProperty(no, "__esModule", { value: !0 });
  function uh(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  uh(no, {
    pattern: () => ah,
    withoutCapturing: () => fa,
    any: () => ca,
    optional: () => lh,
    zeroOrMore: () => fh,
    nestedBrackets: () => da,
    escape: () => st,
  });
  var la = /[\\^$.*+?()[\]{}|]/g,
    sh = RegExp(la.source);
  function hr(e) {
    return (
      (e = Array.isArray(e) ? e : [e]),
      (e = e.map((t) => (t instanceof RegExp ? t.source : t))),
      e.join("")
    );
  }
  function ah(e) {
    return new RegExp(hr(e), "g");
  }
  function fa(e) {
    return new RegExp(`(?:${hr(e)})`, "g");
  }
  function ca(e) {
    return `(?:${e.map(hr).join("|")})`;
  }
  function lh(e) {
    return `(?:${hr(e)})?`;
  }
  function fh(e) {
    return `(?:${hr(e)})*`;
  }
  function da(e, t, n = 1) {
    return fa([
      st(e),
      /[^\s]*/,
      n === 1
        ? `[^${st(e)}${st(t)}s]*`
        : ca([`[^${st(e)}${st(t)}s]*`, da(e, t, n - 1)]),
      /[^\s]*/,
      st(t),
    ]);
  }
  function st(e) {
    return e && sh.test(e) ? e.replace(la, "\\$&") : e || "";
  }
});
var ma = T((io) => {
  "use strict";
  Object.defineProperty(io, "__esModule", { value: !0 });
  Object.defineProperty(io, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: () => ph,
  });
  var ch = dh(pa());
  function ha(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (ha = function (r) {
      return r ? n : t;
    })(e);
  }
  function dh(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var n = ha(t);
    if (n && n.has(e)) return n.get(e);
    var r = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        u && (u.get || u.set) ? Object.defineProperty(r, o, u) : (r[o] = e[o]);
      }
    return (r.default = e), n && n.set(e, r), r;
  }
  function* ph(e, t) {
    let n = new RegExp(`[(){}\\[\\]${ch.escape(t)}]`, "g"),
      r = 0,
      i = 0,
      o = !1,
      u = 0,
      s = 0,
      a = t.length;
    for (let l of e.matchAll(n)) {
      let f = l[0] === t[u],
        c = u === a - 1,
        p = f && c;
      l[0] === "(" && r++,
        l[0] === ")" && r--,
        l[0] === "[" && r++,
        l[0] === "]" && r--,
        l[0] === "{" && r++,
        l[0] === "}" && r--,
        f && r === 0 && (s === 0 && (s = l.index), u++),
        p && r === 0 && ((o = !0), yield e.substring(i, s), (i = s + a)),
        u === a && ((u = 0), (s = 0));
    }
    o ? yield e.substring(i) : yield e;
  }
});
var ga = T((oo) => {
  "use strict";
  Object.defineProperty(oo, "__esModule", { value: !0 });
  function hh(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  hh(oo, { parseBoxShadowValue: () => bh, formatBoxShadowValue: () => vh });
  var mh = ma(),
    Dh = new Set(["inset", "inherit", "initial", "revert", "unset"]),
    gh = /\ +(?![^(]*\))/g,
    Da = /^-?(\d+|\.\d+)(.*?)$/g;
  function bh(e) {
    return Array.from((0, mh.splitAtTopLevelOnly)(e, ",")).map((n) => {
      let r = n.trim(),
        i = { raw: r },
        o = r.split(gh),
        u = new Set();
      for (let s of o)
        (Da.lastIndex = 0),
          !u.has("KEYWORD") && Dh.has(s)
            ? ((i.keyword = s), u.add("KEYWORD"))
            : Da.test(s)
            ? u.has("X")
              ? u.has("Y")
                ? u.has("BLUR")
                  ? u.has("SPREAD") || ((i.spread = s), u.add("SPREAD"))
                  : ((i.blur = s), u.add("BLUR"))
                : ((i.y = s), u.add("Y"))
              : ((i.x = s), u.add("X"))
            : i.color
            ? (i.unknown || (i.unknown = []), i.unknown.push(s))
            : (i.color = s);
      return (i.valid = i.x !== void 0 && i.y !== void 0), i;
    });
  }
  function vh(e) {
    return e
      .map((t) =>
        t.valid
          ? [t.keyword, t.x, t.y, t.blur, t.spread, t.color]
              .filter(Boolean)
              .join(" ")
          : t.raw,
      )
      .join(", ");
  }
});
var Ea = T((so) => {
  "use strict";
  Object.defineProperty(so, "__esModule", { value: !0 });
  function yh(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  yh(so, {
    normalize: () => et,
    url: () => ya,
    number: () => wh,
    percentage: () => xa,
    length: () => Fa,
    lineWidth: () => _h,
    shadow: () => Sh,
    color: () => kh,
    image: () => Th,
    gradient: () => wa,
    position: () => Ph,
    familyName: () => Bh,
    genericName: () => Rh,
    absoluteSize: () => Mh,
    relativeSize: () => $h,
  });
  var xh = eo(),
    Fh = ga(),
    uo = ["min", "max", "clamp", "calc"],
    va = /,(?![^(]*\))/g,
    cn = /_(?![^(]*\))/g;
  function et(e, t = !0) {
    return e.includes("url(")
      ? e
          .split(/(url\(.*?\))/g)
          .filter(Boolean)
          .map((n) => (/^url\(.*?\)$/.test(n) ? n : et(n, !1)))
          .join("")
      : ((e = e
          .replace(/([^\\])_+/g, (n, r) => r + " ".repeat(n.length - 1))
          .replace(/^_/g, " ")
          .replace(/\\_/g, "_")),
        t && (e = e.trim()),
        (e = e.replace(/(calc|min|max|clamp)\(.+\)/g, (n) =>
          n.replace(
            /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
            "$1 $2 ",
          ),
        )),
        e);
  }
  function ya(e) {
    return e.startsWith("url(");
  }
  function wh(e) {
    return (
      !isNaN(Number(e)) || uo.some((t) => new RegExp(`^${t}\\(.+?`).test(e))
    );
  }
  function xa(e) {
    return e
      .split(cn)
      .every(
        (t) =>
          /%$/g.test(t) || uo.some((n) => new RegExp(`^${n}\\(.+?%`).test(t)),
      );
  }
  var Eh = [
      "cm",
      "mm",
      "Q",
      "in",
      "pc",
      "pt",
      "px",
      "em",
      "ex",
      "ch",
      "rem",
      "lh",
      "vw",
      "vh",
      "vmin",
      "vmax",
    ],
    ba = `(?:${Eh.join("|")})`;
  function Fa(e) {
    return e
      .split(cn)
      .every(
        (t) =>
          t === "0" ||
          new RegExp(`${ba}$`).test(t) ||
          uo.some((n) => new RegExp(`^${n}\\(.+?${ba}`).test(t)),
      );
  }
  var Ch = new Set(["thin", "medium", "thick"]);
  function _h(e) {
    return Ch.has(e);
  }
  function Sh(e) {
    let t = (0, Fh.parseBoxShadowValue)(et(e));
    for (let n of t) if (!n.valid) return !1;
    return !0;
  }
  function kh(e) {
    let t = 0;
    return e
      .split(cn)
      .every(
        (r) => (
          (r = et(r)),
          r.startsWith("var(")
            ? !0
            : (0, xh.parseColor)(r, { loose: !0 }) !== null
            ? (t++, !0)
            : !1
        ),
      )
      ? t > 0
      : !1;
  }
  function Th(e) {
    let t = 0;
    return e
      .split(va)
      .every(
        (r) => (
          (r = et(r)),
          r.startsWith("var(")
            ? !0
            : ya(r) ||
              wa(r) ||
              ["element(", "image(", "cross-fade(", "image-set("].some((i) =>
                r.startsWith(i),
              )
            ? (t++, !0)
            : !1
        ),
      )
      ? t > 0
      : !1;
  }
  var Ah = new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient",
  ]);
  function wa(e) {
    e = et(e);
    for (let t of Ah) if (e.startsWith(`${t}(`)) return !0;
    return !1;
  }
  var Oh = new Set(["center", "top", "right", "bottom", "left"]);
  function Ph(e) {
    let t = 0;
    return e
      .split(cn)
      .every(
        (r) => (
          (r = et(r)),
          r.startsWith("var(")
            ? !0
            : Oh.has(r) || Fa(r) || xa(r)
            ? (t++, !0)
            : !1
        ),
      )
      ? t > 0
      : !1;
  }
  function Bh(e) {
    let t = 0;
    return e
      .split(va)
      .every(
        (r) => (
          (r = et(r)),
          r.startsWith("var(")
            ? !0
            : (r.includes(" ") && !/(['"])([^"']+)\1/g.test(r)) ||
              /^\d/g.test(r)
            ? !1
            : (t++, !0)
        ),
      )
      ? t > 0
      : !1;
  }
  var Ih = new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong",
  ]);
  function Rh(e) {
    return Ih.has(e);
  }
  var Lh = new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large",
  ]);
  function Mh(e) {
    return Lh.has(e);
  }
  var Nh = new Set(["larger", "smaller"]);
  function $h(e) {
    return Nh.has(e);
  }
});
var Pa = T((fo) => {
  "use strict";
  Object.defineProperty(fo, "__esModule", { value: !0 });
  function Wh(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  Wh(fo, {
    updateAllClasses: () => zh,
    asValue: () => Dr,
    parseColorFormat: () => ao,
    asColor: () => Ta,
    asLookupValue: () => Aa,
    coerceValue: () => Vh,
  });
  var qh = lo(na()),
    Uh = lo(ia()),
    Ca = ro(),
    xe = Ea(),
    _a = lo(Yn());
  function lo(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function zh(e, t) {
    return (0, qh.default)((i) => {
      i.walkClasses((o) => {
        let u = t(o.value);
        (o.value = u),
          o.raws &&
            o.raws.value &&
            (o.raws.value = (0, Uh.default)(o.raws.value));
      });
    }).processSync(e);
  }
  function ka(e, t) {
    if (!mr(e)) return;
    let n = e.slice(1, -1);
    if (t(n)) return (0, xe.normalize)(n);
  }
  function Gh(e, t = {}, n) {
    let r = t[e];
    if (r !== void 0) return (0, _a.default)(r);
    if (mr(e)) {
      let i = ka(e, n);
      return i === void 0 ? void 0 : (0, _a.default)(i);
    }
  }
  function Dr(e, t = {}, { validate: n = () => !0 } = {}) {
    var r;
    let i = (r = t.values) === null || r === void 0 ? void 0 : r[e];
    return i !== void 0
      ? i
      : t.supportsNegativeValues && e.startsWith("-")
      ? Gh(e.slice(1), t.values, n)
      : ka(e, n);
  }
  function mr(e) {
    return e.startsWith("[") && e.endsWith("]");
  }
  function jh(e) {
    let t = e.lastIndexOf("/");
    return t === -1 || t === e.length - 1
      ? [e]
      : [e.slice(0, t), e.slice(t + 1)];
  }
  function ao(e) {
    if (typeof e == "string" && e.includes("<alpha-value>")) {
      let t = e;
      return ({ opacityValue: n = 1 }) => t.replace("<alpha-value>", n);
    }
    return e;
  }
  function Ta(e, t = {}, { tailwindConfig: n = {} } = {}) {
    var r;
    if (((r = t.values) === null || r === void 0 ? void 0 : r[e]) !== void 0) {
      var i;
      return ao((i = t.values) === null || i === void 0 ? void 0 : i[e]);
    }
    let [o, u] = jh(e);
    if (u !== void 0) {
      var s, a, l, f;
      let c =
        (f = (s = t.values) === null || s === void 0 ? void 0 : s[o]) !==
          null && f !== void 0
          ? f
          : mr(o)
          ? o.slice(1, -1)
          : void 0;
      return c === void 0
        ? void 0
        : ((c = ao(c)),
          mr(u)
            ? (0, Ca.withAlphaValue)(c, u.slice(1, -1))
            : ((a = n.theme) === null ||
              a === void 0 ||
              (l = a.opacity) === null ||
              l === void 0
                ? void 0
                : l[u]) === void 0
            ? void 0
            : (0, Ca.withAlphaValue)(c, n.theme.opacity[u]));
    }
    return Dr(e, t, { validate: xe.color });
  }
  function Aa(e, t = {}) {
    var n;
    return (n = t.values) === null || n === void 0 ? void 0 : n[e];
  }
  function Te(e) {
    return (t, n) => Dr(t, n, { validate: e });
  }
  var Oa = {
      any: Dr,
      color: Ta,
      url: Te(xe.url),
      image: Te(xe.image),
      length: Te(xe.length),
      percentage: Te(xe.percentage),
      position: Te(xe.position),
      lookup: Aa,
      "generic-name": Te(xe.genericName),
      "family-name": Te(xe.familyName),
      number: Te(xe.number),
      "line-width": Te(xe.lineWidth),
      "absolute-size": Te(xe.absoluteSize),
      "relative-size": Te(xe.relativeSize),
      shadow: Te(xe.shadow),
    },
    Sa = Object.keys(Oa);
  function Hh(e, t) {
    let n = e.indexOf(t);
    return n === -1 ? [void 0, e] : [e.slice(0, n), e.slice(n + 1)];
  }
  function Vh(e, t, n, r) {
    if (mr(t)) {
      let i = t.slice(1, -1),
        [o, u] = Hh(i, ":");
      if (!/^[\w-_]+$/g.test(o)) u = i;
      else if (o !== void 0 && !Sa.includes(o)) return [];
      if (u.length > 0 && Sa.includes(o)) return [Dr(`[${u}]`, n), o];
    }
    for (let i of [].concat(e)) {
      let o = Oa[i](t, n, { tailwindConfig: r });
      if (o !== void 0) return [o, i];
    }
    return [];
  }
});
var Ba = T((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: !0 });
  Object.defineProperty(co, "default", { enumerable: !0, get: () => Yh });
  function Yh(e) {
    return typeof e == "function" ? e({}) : e;
  }
});
var Na = T((ho) => {
  "use strict";
  Object.defineProperty(ho, "__esModule", { value: !0 });
  Object.defineProperty(ho, "default", { enumerable: !0, get: () => hm });
  var Xh = at(Yn()),
    Qh = at(qu()),
    Kh = at(Uu()),
    Jh = at(Kn()),
    Zh = at(Gu()),
    La = ju(),
    Ia = Hu(),
    em = Yu(),
    tm = at(Xu()),
    rm = Qu(),
    nm = Pa(),
    im = ro(),
    om = at(Ba());
  function at(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function wt(e) {
    return typeof e == "function";
  }
  function gr(e) {
    return typeof e == "object" && e !== null;
  }
  function br(e, ...t) {
    let n = t.pop();
    for (let r of t)
      for (let i in r) {
        let o = n(e[i], r[i]);
        o === void 0
          ? gr(e[i]) && gr(r[i])
            ? (e[i] = br(e[i], r[i], n))
            : (e[i] = r[i])
          : (e[i] = o);
      }
    return e;
  }
  var po = {
    colors: Zh.default,
    negative(e) {
      return Object.keys(e)
        .filter((t) => e[t] !== "0")
        .reduce((t, n) => {
          let r = (0, Xh.default)(e[n]);
          return r !== void 0 && (t[`-${n}`] = r), t;
        }, {});
    },
    breakpoints(e) {
      return Object.keys(e)
        .filter((t) => typeof e[t] == "string")
        .reduce((t, n) => ({ ...t, [`screen-${n}`]: e[n] }), {});
    },
  };
  function um(e, ...t) {
    return wt(e) ? e(...t) : e;
  }
  function sm(e) {
    return e.reduce(
      (t, { extend: n }) =>
        br(t, n, (r, i) =>
          r === void 0 ? [i] : Array.isArray(r) ? [i, ...r] : [i, r],
        ),
      {},
    );
  }
  function am(e) {
    return { ...e.reduce((t, n) => (0, La.defaults)(t, n), {}), extend: sm(e) };
  }
  function Ra(e, t) {
    if (Array.isArray(e) && gr(e[0])) return e.concat(t);
    if (Array.isArray(t) && gr(t[0]) && gr(e)) return [e, ...t];
    if (Array.isArray(t)) return t;
  }
  function lm({ extend: e, ...t }) {
    return br(t, e, (n, r) =>
      !wt(n) && !r.some(wt)
        ? br({}, n, ...r, Ra)
        : (i, o) => br({}, ...[n, ...r].map((u) => um(u, i, o)), Ra),
    );
  }
  function* fm(e) {
    let t = (0, Ia.toPath)(e);
    if (t.length === 0 || (yield t, Array.isArray(e))) return;
    let n = /^(.*?)\s*\/\s*([^/]+)$/,
      r = e.match(n);
    if (r !== null) {
      let [, i, o] = r,
        u = (0, Ia.toPath)(i);
      (u.alpha = o), yield u;
    }
  }
  function cm(e) {
    let t = (n, r) => {
      for (let i of fm(n)) {
        let o = 0,
          u = e;
        for (; u != null && o < i.length; )
          (u = u[i[o++]]),
            (u =
              wt(u) && (i.alpha === void 0 || o <= i.length - 1)
                ? u(t, po)
                : u);
        if (u !== void 0) {
          if (i.alpha !== void 0) {
            let s = (0, nm.parseColorFormat)(u);
            return (0, im.withAlphaValue)(s, i.alpha, (0, om.default)(s));
          }
          return (0, tm.default)(u) ? (0, rm.cloneDeep)(u) : u;
        }
      }
      return r;
    };
    return (
      Object.assign(t, { theme: t, ...po }),
      Object.keys(e).reduce(
        (n, r) => ((n[r] = wt(e[r]) ? e[r](t, po) : e[r]), n),
        {},
      )
    );
  }
  function Ma(e) {
    let t = [];
    return (
      e.forEach((n) => {
        t = [...t, n];
        var r;
        let i =
          (r = n == null ? void 0 : n.plugins) !== null && r !== void 0
            ? r
            : [];
        i.length !== 0 &&
          i.forEach((o) => {
            o.__isOptionsFunction && (o = o());
            var u;
            t = [
              ...t,
              ...Ma([
                (u = o == null ? void 0 : o.config) !== null && u !== void 0
                  ? u
                  : {},
              ]),
            ];
          });
      }),
      t
    );
  }
  function dm(e) {
    return [...e].reduceRight(
      (n, r) => (wt(r) ? r({ corePlugins: n }) : (0, Kh.default)(r, n)),
      Qh.default,
    );
  }
  function pm(e) {
    return [...e].reduceRight((n, r) => [...n, ...r], []);
  }
  function hm(e) {
    let t = [
      ...Ma(e),
      {
        prefix: "",
        important: !1,
        separator: ":",
        variantOrder: Jh.default.variantOrder,
      },
    ];
    var n, r;
    return (0, em.normalizeConfig)(
      (0, La.defaults)(
        {
          theme: cm(
            lm(
              am(
                t.map((i) =>
                  (n = i == null ? void 0 : i.theme) !== null && n !== void 0
                    ? n
                    : {},
                ),
              ),
            ),
          ),
          corePlugins: dm(t.map((i) => i.corePlugins)),
          plugins: pm(
            e.map((i) =>
              (r = i == null ? void 0 : i.plugins) !== null && r !== void 0
                ? r
                : [],
            ),
          ),
        },
        ...t,
      ),
    );
  }
});
var $a = {};
vn($a, { default: () => mm });
var mm,
  Wa = bn(() => {
    mm = { yellow: (e) => e };
  });
var Ga = T((mo) => {
  "use strict";
  Object.defineProperty(mo, "__esModule", { value: !0 });
  function Dm(e, t) {
    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }
  Dm(mo, {
    flagEnabled: () => vm,
    issueFlagNotices: () => ym,
    default: () => xm,
  });
  var gm = za((Wa(), Br($a))),
    bm = za((Xr(), Br(Yr)));
  function za(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var qa = { optimizeUniversalDefaults: !1 },
    vr = {
      future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"],
      experimental: ["optimizeUniversalDefaults", "matchVariant"],
    };
  function vm(e, t) {
    if (vr.future.includes(t)) {
      var n, r, i;
      return (
        e.future === "all" ||
        ((i =
          (r =
            e == null || (n = e.future) === null || n === void 0
              ? void 0
              : n[t]) !== null && r !== void 0
            ? r
            : qa[t]) !== null && i !== void 0
          ? i
          : !1)
      );
    }
    if (vr.experimental.includes(t)) {
      var o, u, s;
      return (
        e.experimental === "all" ||
        ((s =
          (u =
            e == null || (o = e.experimental) === null || o === void 0
              ? void 0
              : o[t]) !== null && u !== void 0
            ? u
            : qa[t]) !== null && s !== void 0
          ? s
          : !1)
      );
    }
    return !1;
  }
  function Ua(e) {
    if (e.experimental === "all") return vr.experimental;
    var t;
    return Object.keys(
      (t = e == null ? void 0 : e.experimental) !== null && t !== void 0
        ? t
        : {},
    ).filter((n) => vr.experimental.includes(n) && e.experimental[n]);
  }
  function ym(e) {
    if (process.env.JEST_WORKER_ID === void 0 && Ua(e).length > 0) {
      let t = Ua(e)
        .map((n) => gm.default.yellow(n))
        .join(", ");
      bm.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${t}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.",
      ]);
    }
  }
  var xm = vr;
});
var Ha = T((Do) => {
  "use strict";
  Object.defineProperty(Do, "__esModule", { value: !0 });
  Object.defineProperty(Do, "default", { enumerable: !0, get: () => ja });
  var Fm = Em(Kn()),
    wm = Ga();
  function Em(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function ja(e) {
    var t;
    let n = (
        (t = e == null ? void 0 : e.presets) !== null && t !== void 0
          ? t
          : [Fm.default]
      )
        .slice()
        .reverse()
        .flatMap((o) => ja(typeof o == "function" ? o() : o)),
      r = {
        respectDefaultRingColorOpacity: {
          theme: { ringColor: { DEFAULT: "#3b82f67f" } },
        },
      },
      i = Object.keys(r)
        .filter((o) => (0, wm.flagEnabled)(e, o))
        .map((o) => r[o]);
    return [e, ...i, ...n];
  }
});
var Ya = T((go) => {
  "use strict";
  Object.defineProperty(go, "__esModule", { value: !0 });
  Object.defineProperty(go, "default", { enumerable: !0, get: () => Sm });
  var Cm = Va(Na()),
    _m = Va(Ha());
  function Va(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Sm(...e) {
    let [, ...t] = (0, _m.default)(e[0]);
    return (0, Cm.default)([...e, ...t]);
  }
});
var Qa = T((kb, Xa) => {
  var bo = Ya();
  Xa.exports = (bo.__esModule ? bo : { default: bo }).default;
});
var Dt;
function Bl(e) {
  Dt = e;
}
var At = null;
async function qe() {
  return (
    Dt ||
    (At
      ? (await At, Dt)
      : ((At = Promise.resolve()
          .then(() => (Vo(), Ho))
          .then((e) => e.getYogaModule())
          .then((e) => (Dt = e))),
        await At,
        (At = null),
        Dt))
  );
}
var Ot = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Il = Ot((e, t) => {
    t.exports = [
      "em",
      "ex",
      "ch",
      "rem",
      "vh",
      "vw",
      "vmin",
      "vmax",
      "px",
      "mm",
      "cm",
      "in",
      "pt",
      "pc",
      "mozmm",
    ];
  }),
  Rl = Ot((e, t) => {
    t.exports = ["deg", "grad", "rad", "turn"];
  }),
  Ll = Ot((e, t) => {
    t.exports = ["dpi", "dpcm", "dppx"];
  }),
  Ml = Ot((e, t) => {
    t.exports = ["Hz", "kHz"];
  }),
  Nl = Ot((e, t) => {
    t.exports = ["s", "ms"];
  }),
  $l = Il(),
  Yo = Rl(),
  Xo = Ll(),
  Qo = Ml(),
  Ko = Nl();
function xn(e) {
  if (/\.\D?$/.test(e))
    throw new Error("The dot should be followed by a number");
  if (/^[+-]{2}/.test(e)) throw new Error("Only one leading +/- is allowed");
  if (Wl(e) > 1) throw new Error("Only one dot is allowed");
  if (/%$/.test(e)) {
    (this.type = "percentage"), (this.value = yn(e)), (this.unit = "%");
    return;
  }
  var t = Ul(e);
  if (!t) {
    (this.type = "number"), (this.value = yn(e));
    return;
  }
  (this.type = Gl(t)),
    (this.value = yn(e.substr(0, e.length - t.length))),
    (this.unit = t);
}
xn.prototype.valueOf = function () {
  return this.value;
};
xn.prototype.toString = function () {
  return this.value + (this.unit || "");
};
function Xe(e) {
  return new xn(e);
}
function Wl(e) {
  var t = e.match(/\./g);
  return t ? t.length : 0;
}
function yn(e) {
  var t = parseFloat(e);
  if (isNaN(t)) throw new Error("Invalid number: " + e);
  return t;
}
var ql = [].concat(Yo, Qo, $l, Xo, Ko);
function Ul(e) {
  var t = e.match(/\D+$/),
    n = t && t[0];
  if (n && ql.indexOf(n) === -1) throw new Error("Invalid unit: " + n);
  return n;
}
var zl = Object.assign(
  Ir(Yo, "angle"),
  Ir(Qo, "frequency"),
  Ir(Xo, "resolution"),
  Ir(Ko, "time"),
);
function Ir(e, t) {
  return Object.fromEntries(e.map((n) => [n, t]));
}
function Gl(e) {
  return zl[e] || "length";
}
import jl from "linebreak";
function gt(e) {
  let t = typeof e;
  return !(
    t === "number" ||
    t === "bigint" ||
    t === "string" ||
    t === "boolean"
  );
}
function Jo(e) {
  return /^class\s/.test(e.toString());
}
function Zo(e) {
  return "dangerouslySetInnerHTML" in e;
}
function eu(e) {
  let t = typeof e > "u" ? [] : [].concat(e).flat(1 / 0),
    n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof i > "u" ||
      typeof i == "boolean" ||
      i === null ||
      (typeof i == "number" && (i = String(i)),
      typeof i == "string" && n.length && typeof n[n.length - 1] == "string"
        ? (n[n.length - 1] += i)
        : n.push(i));
  }
  return n;
}
function q(e, t, n, r, i = !1) {
  if (typeof e == "number") return e;
  try {
    if (((e = e.trim()), /[ /\(,]/.test(e))) return;
    if (e === String(+e)) return +e;
    let o = new Xe(e);
    if (o.type === "length")
      switch (o.unit) {
        case "em":
          return o.value * t;
        case "rem":
          return o.value * 16;
        case "vw":
          return ~~((o.value * r._viewportWidth) / 100);
        case "vh":
          return ~~((o.value * r._viewportHeight) / 100);
        default:
          return o.value;
      }
    else if (o.type === "angle")
      switch (o.unit) {
        case "deg":
          return o.value;
        case "rad":
          return (o.value * 180) / Math.PI;
        default:
          return o.value;
      }
    else if (o.type === "percentage" && i) return (o.value / 100) * n;
  } catch {}
}
function Pt(e, t) {
  return [
    e[0] * t[0] + e[2] * t[1],
    e[1] * t[0] + e[3] * t[1],
    e[0] * t[2] + e[2] * t[3],
    e[1] * t[2] + e[3] * t[3],
    e[0] * t[4] + e[2] * t[5] + e[4],
    e[1] * t[4] + e[3] * t[5] + e[5],
  ];
}
function ve(e, t, n, r) {
  let i = t[e];
  if (typeof i > "u") {
    if (r && typeof e < "u")
      throw new Error(
        `Invalid value for CSS property "${r}". Allowed values: ${Object.keys(t)
          .map((o) => `"${o}"`)
          .join(" | ")}. Received: "${e}".`,
      );
    i = n;
  }
  return i;
}
var Fn,
  wn,
  tu = [32, 160, 4961, 65792, 65793, 4153, 4241, 10].map((e) =>
    String.fromCodePoint(e),
  );
function Ee(e, t, n) {
  if (!Fn || !wn) {
    if (!(typeof Intl < "u" && "Segmenter" in Intl))
      throw new Error(
        "Intl.Segmenter does not exist, please use import a polyfill.",
      );
    (Fn = new Intl.Segmenter(n, { granularity: "word" })),
      (wn = new Intl.Segmenter(n, { granularity: "grapheme" }));
  }
  if (t === "grapheme") return [...wn.segment(e)].map((r) => r.segment);
  {
    let r = [...Fn.segment(e)].map((u) => u.segment),
      i = [],
      o = 0;
    for (; o < r.length; ) {
      let u = r[o];
      if (u == "\xA0") {
        let s = o === 0 ? "" : i.pop(),
          a = o === r.length - 1 ? "" : r[o + 1];
        i.push(s + "\xA0" + a), (o += 2);
      } else i.push(u), o++;
    }
    return i;
  }
}
function C(e, t, n) {
  let r = "";
  for (let [i, o] of Object.entries(t)) typeof o < "u" && (r += ` ${i}="${o}"`);
  return n ? `<${e}${r}>${n}</${e}>` : `<${e}${r}/>`;
}
function ru(e = 20) {
  let t = new Map();
  function n(o, u) {
    if (t.size >= e) {
      let s = t.keys().next().value;
      t.delete(s);
    }
    t.set(o, u);
  }
  function r(o) {
    if (!t.has(o)) return;
    let s = t.get(o);
    return t.delete(o), t.set(o, s), s;
  }
  function i() {
    t.clear();
  }
  return { set: n, get: r, clear: i };
}
function bt(e) {
  return e ? e.split(/[, ]/).filter(Boolean).map(Number) : null;
}
function Hl(e) {
  return Object.prototype.toString.call(e);
}
function Rr(e) {
  return typeof e == "string";
}
function nu(e) {
  return typeof e == "number";
}
function iu(e) {
  return Hl(e) === "[object Undefined]";
}
function ou(e, t) {
  if (t === "break-all")
    return { words: Ee(e, "grapheme"), requiredBreaks: [] };
  if (t === "keep-all") return { words: Ee(e, "word"), requiredBreaks: [] };
  let n = new jl(e),
    r = 0,
    i = n.nextBreak(),
    o = [],
    u = [!1];
  for (; i; ) {
    let s = e.slice(r, i.position);
    o.push(s),
      i.required ? u.push(!0) : u.push(!1),
      (r = i.position),
      (i = n.nextBreak());
  }
  return { words: o, requiredBreaks: u };
}
var uu = (e) => e.replaceAll(/([A-Z])/g, (t, n) => `-${n.toLowerCase()}`);
var Vl = "image/avif",
  Yl = "image/webp",
  Lr = "image/apng",
  Mr = "image/png",
  Nr = "image/jpeg",
  $r = "image/gif",
  Cn = "image/svg+xml";
function lu(e) {
  let t = new DataView(e),
    n = 4,
    r = t.byteLength;
  for (; n < r; ) {
    let i = t.getUint16(n, !1);
    if (i > r) throw new TypeError("Invalid JPEG");
    let o = t.getUint8(i + 1 + n);
    if (o === 192 || o === 193 || o === 194)
      return [t.getUint16(i + 7 + n, !1), t.getUint16(i + 5 + n, !1)];
    n += i + 2;
  }
  throw new TypeError("Invalid JPEG");
}
function fu(e) {
  let t = new Uint8Array(e.slice(6, 10));
  return [t[0] | (t[1] << 8), t[2] | (t[3] << 8)];
}
function cu(e) {
  let t = new DataView(e);
  return [t.getUint16(18, !1), t.getUint16(22, !1)];
}
var Le = ru(100),
  En = new Map(),
  Xl = [Mr, Lr, Nr, $r, Cn];
function Ql(e) {
  let t = "",
    n = new Uint8Array(e);
  for (let r = 0; r < n.byteLength; r++) t += String.fromCharCode(n[r]);
  return btoa(t);
}
function Kl(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
  return r.buffer;
}
function su(e, t) {
  let n = t.match(/<svg[^>]*>/)[0],
    r = n.match(/viewBox=['"](.+)['"]/),
    i = r ? bt(r[1]) : null,
    o = n.match(/width=['"](\d*\.\d+|\d+)['"]/),
    u = n.match(/height=['"](\d*\.\d+|\d+)['"]/);
  if (!i && (!o || !u))
    throw new Error(`Failed to parse SVG from ${e}: missing "viewBox"`);
  let s = i ? [i[2], i[3]] : [+o[1], +u[1]],
    a = s[0] / s[1];
  return o && u
    ? [+o[1], +u[1]]
    : o
    ? [+o[1], +o[1] / a]
    : u
    ? [+u[1] * a, +u[1]]
    : [s[0], s[1]];
}
function au(e) {
  let t,
    n = Jl(new Uint8Array(e));
  switch (n) {
    case Mr:
    case Lr:
      t = cu(e);
      break;
    case $r:
      t = fu(e);
      break;
    case Nr:
      t = lu(e);
      break;
  }
  if (!Xl.includes(n))
    throw new Error(`Unsupported image type: ${n || "unknown"}`);
  return [`data:${n};base64,${Ql(e)}`, t];
}
async function vt(e) {
  if (!e) throw new Error("Image source is not provided.");
  if (typeof e == "object") {
    let [i, o] = au(e);
    return [i, ...o];
  }
  if (
    (((e.startsWith('"') && e.endsWith('"')) ||
      (e.startsWith("'") && e.endsWith("'"))) &&
      (e = e.slice(1, -1)),
    typeof window > "u" && !e.startsWith("http") && !e.startsWith("data:"))
  )
    throw new Error(`Image source must be an absolute URL: ${e}`);
  if (e.startsWith("data:")) {
    let i;
    try {
      i =
        /data:(?<imageType>[a-z/+]+)(;(?<encodingType>base64|utf8))?,(?<dataString>.*)/g.exec(
          e,
        ).groups;
    } catch {
      return console.warn("Image data URI resolved without size:" + e), [e];
    }
    let { imageType: o, encodingType: u, dataString: s } = i;
    if (o === Cn) {
      let a =
          u === "base64" ? atob(s) : decodeURIComponent(s.replace(/ /g, "%20")),
        l = u === "base64" ? e : `data:image/svg+xml;base64,${btoa(a)}`,
        f = su(e, a);
      return Le.set(e, [l, ...f]), [l, ...f];
    } else if (u === "base64") {
      let a,
        l = Kl(s);
      switch (o) {
        case Mr:
        case Lr:
          a = cu(l);
          break;
        case $r:
          a = fu(l);
          break;
        case Nr:
          a = lu(l);
          break;
      }
      return Le.set(e, [e, ...a]), [e, ...a];
    } else
      return (
        console.warn("Image data URI resolved without size:" + e),
        Le.set(e, [e]),
        [e]
      );
  }
  if (!globalThis.fetch)
    throw new Error("`fetch` is required to be polyfilled to load images.");
  if (En.has(e)) return En.get(e);
  let t = Le.get(e);
  if (t) return t;
  let n = e,
    r = fetch(n)
      .then((i) => {
        let o = i.headers.get("content-type");
        return o === "image/svg+xml" || o === "application/svg+xml"
          ? i.text()
          : i.arrayBuffer();
      })
      .then((i) => {
        if (typeof i == "string")
          try {
            let s = `data:image/svg+xml;base64,${btoa(i)}`,
              a = su(n, i);
            return [s, ...a];
          } catch (s) {
            throw new Error(`Failed to parse SVG image: ${s.message}`);
          }
        let [o, u] = au(i);
        return [o, ...u];
      })
      .then((i) => (Le.set(n, i), i))
      .catch(
        (i) => (
          console.error(`Can't load image ${n}: ` + i.message),
          Le.set(n, []),
          []
        ),
      );
  return En.set(n, r), r;
}
function Jl(e) {
  return [255, 216, 255].every((t, n) => e[n] === t)
    ? Nr
    : [137, 80, 78, 71, 13, 10, 26, 10].every((t, n) => e[n] === t)
    ? Zl(e)
      ? Lr
      : Mr
    : [71, 73, 70, 56].every((t, n) => e[n] === t)
    ? $r
    : [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80].every(
        (t, n) => !t || e[n] === t,
      )
    ? Yl
    : [60, 63, 120, 109, 108].every((t, n) => e[n] === t)
    ? Cn
    : [0, 0, 0, 0, 102, 116, 121, 112, 97, 118, 105, 102].every(
        (t, n) => !t || e[n] === t,
      )
    ? Vl
    : null;
}
function Zl(e) {
  let t = new DataView(e.buffer),
    n,
    r,
    i = 8,
    o = !1;
  for (; !o && n !== "IEND" && i < e.length; ) {
    r = t.getUint32(i);
    let u = e.subarray(i + 4, i + 8);
    (n = String.fromCharCode(...u)), (o = n === "acTL"), (i += 12 + r);
  }
  return o;
}
var _n = {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    href: "href",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDasharray: "stroke-dasharray",
    strokeDashoffset: "stroke-dashoffset",
    strokeLinecap: "stroke-linecap",
    strokeLinejoin: "stroke-linejoin",
    strokeMiterlimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    xlinkActuate: "xlink:actuate",
    xlinkArcrole: "xlink:arcrole",
    xlinkHref: "xlink:href",
    xlinkRole: "xlink:role",
    xlinkShow: "xlink:show",
    xlinkTitle: "xlink:title",
    xlinkType: "xlink:type",
    xmlBase: "xml:base",
    xmlLang: "xml:lang",
    xmlSpace: "xml:space",
    xmlnsXlink: "xmlns:xlink",
  },
  ef = /[\r\n%#()<>?[\\\]^`{|}"']/g;
function Sn(e, t) {
  if (!e) return "";
  if (Array.isArray(e)) return e.map((l) => Sn(l, t)).join("");
  if (typeof e != "object") return String(e);
  let n = e.type;
  if (n === "text")
    throw new Error(
      "<text> nodes are not currently supported, please convert them to <path>",
    );
  let { children: r, style: i, ...o } = e.props || {},
    u = (i == null ? void 0 : i.color) || t,
    s = `${Object.entries(o)
      .map(
        ([l, f]) => (
          typeof f == "string" && f.toLowerCase() === "currentcolor" && (f = u),
          l === "href" && n === "image"
            ? ` ${_n[l] || l}="${Le.get(f)[0]}"`
            : ` ${_n[l] || l}="${f}"`
        ),
      )
      .join("")}`,
    a = i
      ? ` style="${Object.entries(i)
          .map(([l, f]) => `${uu(l)}:${f}`)
          .join(";")}"`
      : "";
  return `<${n}${s}${a}>${Sn(r, u)}</${n}>`;
}
async function du(e) {
  let t = new Set(),
    n = (r) => {
      if (r && gt(r)) {
        if (Array.isArray(r)) {
          r.forEach((i) => n(i));
          return;
        } else
          typeof r == "object" &&
            (r.type === "image"
              ? t.has(r.props.href) || t.add(r.props.href)
              : r.type === "img" && (t.has(r.props.src) || t.add(r.props.src)));
        Array.isArray(r.props.children)
          ? r.props.children.map((i) => n(i))
          : n(r.props.children);
      }
    };
  return n(e), Promise.all(Array.from(t).map((r) => vt(r)));
}
async function pu(e, t) {
  let {
    viewBox: n,
    viewbox: r,
    width: i,
    height: o,
    className: u,
    style: s,
    children: a,
    ...l
  } = e.props || {};
  (n ||= r), (l.xmlns = "http://www.w3.org/2000/svg");
  let f = (s == null ? void 0 : s.color) || t,
    c = bt(n),
    p = c ? c[3] / c[2] : null;
  return (
    (i = i || (p && o) ? o / p : null),
    (o = o || (p && i) ? i * p : null),
    (l.width = i),
    (l.height = o),
    n && (l.viewBox = n),
    `data:image/svg+xml;utf8,${`<svg ${Object.entries(l)
      .map(
        ([h, d]) => (
          typeof d == "string" && d.toLowerCase() === "currentcolor" && (d = f),
          ` ${_n[h] || h}="${d}"`
        ),
      )
      .join("")}>${Sn(a, f)}</svg>`.replace(ef, encodeURIComponent)}`
  );
}
var Ce = "flex",
  hu = {
    p: { display: Ce, marginTop: "1em", marginBottom: "1em" },
    div: { display: Ce },
    blockquote: {
      display: Ce,
      marginTop: "1em",
      marginBottom: "1em",
      marginLeft: 40,
      marginRight: 40,
    },
    center: { display: Ce, textAlign: "center" },
    hr: {
      display: Ce,
      marginTop: "0.5em",
      marginBottom: "0.5em",
      marginLeft: "auto",
      marginRight: "auto",
      borderWidth: 1,
      borderStyle: "solid",
    },
    h1: {
      display: Ce,
      fontSize: "2em",
      marginTop: "0.67em",
      marginBottom: "0.67em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    h2: {
      display: Ce,
      fontSize: "1.5em",
      marginTop: "0.83em",
      marginBottom: "0.83em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    h3: {
      display: Ce,
      fontSize: "1.17em",
      marginTop: "1em",
      marginBottom: "1em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    h4: {
      display: Ce,
      marginTop: "1.33em",
      marginBottom: "1.33em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    h5: {
      display: Ce,
      fontSize: "0.83em",
      marginTop: "1.67em",
      marginBottom: "1.67em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    h6: {
      display: Ce,
      fontSize: "0.67em",
      marginTop: "2.33em",
      marginBottom: "2.33em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold",
    },
    u: { textDecoration: "underline" },
    strong: { fontWeight: "bold" },
    b: { fontWeight: "bold" },
    i: { fontStyle: "italic" },
    em: { fontStyle: "italic" },
    code: { fontFamily: "monospace" },
    kbd: { fontFamily: "monospace" },
    pre: {
      display: Ce,
      fontFamily: "monospace",
      whiteSpace: "pre",
      marginTop: "1em",
      marginBottom: "1em",
    },
    mark: { backgroundColor: "yellow", color: "black" },
    big: { fontSize: "larger" },
    small: { fontSize: "smaller" },
    s: { textDecoration: "line-through" },
  };
var tf = new Set([
  "color",
  "font",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "textAlign",
  "textTransform",
  "textShadowOffset",
  "textShadowColor",
  "textShadowRadius",
  "textDecorationLine",
  "textDecorationStyle",
  "textDecorationColor",
  "whiteSpace",
  "transform",
  "wordBreak",
  "tabSize",
  "opacity",
  "filter",
  "_viewportWidth",
  "_viewportHeight",
  "_inheritedClipPathId",
  "_inheritedMaskId",
  "_inheritedBackgroundClipTextPath",
]);
function kn(e) {
  let t = {};
  for (let n in e) tf.has(n) && (t[n] = e[n]);
  return t;
}
import {
  getPropertyName as sf,
  getStylesForProperty as Qe,
} from "css-to-react-native";
import { parseElementStyle as af } from "css-background-parser";
import { parse as lf } from "css-box-shadow";
import ff from "parse-css-color";
import rf from "postcss-value-parser";
function nf(e, t) {
  try {
    let n = new Xe(e);
    switch (n.unit) {
      case "px":
        return { absolute: n.value };
      case "em":
        return { absolute: n.value * t };
      case "rem":
        return { absolute: n.value * 16 };
      case "%":
        return { relative: n.value };
      default:
        return {};
    }
  } catch {
    return {};
  }
}
function Tn(e, t, n) {
  switch (e) {
    case "top":
      return { yRelative: 0 };
    case "left":
      return { xRelative: 0 };
    case "right":
      return { xRelative: 100 };
    case "bottom":
      return { yRelative: 100 };
    case "center":
      return {};
    default: {
      let r = nf(e, t);
      return r.absolute
        ? { [n ? "xAbsolute" : "yAbsolute"]: r.absolute }
        : r.relative
        ? { [n ? "xRelative" : "yRelative"]: r.relative }
        : {};
    }
  }
}
function An(e, t) {
  if (typeof e == "number") return { xAbsolute: e };
  let n;
  try {
    n = rf(e)
      .nodes.filter((r) => r.type === "word")
      .map((r) => r.value);
  } catch {
    return {};
  }
  return n.length === 1
    ? Tn(n[0], t, !0)
    : n.length === 2
    ? ((n[0] === "top" ||
        n[0] === "bottom" ||
        n[1] === "left" ||
        n[1] === "right") &&
        n.reverse(),
      { ...Tn(n[0], t, !0), ...Tn(n[1], t, !1) })
    : {};
}
import { getPropertyName as of } from "css-to-react-native";
function Bt(e, t) {
  let n = of(`mask-${t}`);
  return e[n] || e[`WebkitM${n.substring(1)}`];
}
function uf(e) {
  let t = [],
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    e[i] === "(" ? r++ : e[i] === ")" && r--,
      r === 0 && e[i] === "," && (t.push(e.slice(n, i).trim()), (n = i + 1));
  return t.push(e.slice(n).trim()), t;
}
function mu(e) {
  let t = e.maskImage || e.WebkitMaskImage,
    n = {
      position: Bt(e, "position") || "0% 0%",
      size: Bt(e, "size") || "100% 100%",
      repeat: Bt(e, "repeat") || "repeat",
      origin: Bt(e, "origin") || "border-box",
      clip: Bt(e, "origin") || "border-box",
    };
  return uf(t)
    .filter((i) => i && i !== "none")
    .reverse()
    .map((i) => ({ image: i, ...n }));
}
var cf = new Set([
    "flex",
    "flexGrow",
    "flexShrink",
    "flexBasis",
    "fontWeight",
    "lineHeight",
    "opacity",
    "scale",
    "scaleX",
    "scaleY",
  ]),
  df = new Set(["lineHeight"]);
function pf(e, t, n, r) {
  return (
    e === "textDecoration" &&
      !n.includes(t.textDecorationColor) &&
      (t.textDecorationColor = r),
    t
  );
}
function It(e, t) {
  return typeof t == "number"
    ? cf.has(e)
      ? df.has(e)
        ? t
        : String(t)
      : t + "px"
    : t;
}
function hf(e, t, n) {
  if (e === "lineHeight") return { lineHeight: It(e, t) };
  if (e === "fontFamily")
    return {
      fontFamily: t.split(",").map((r) =>
        r
          .trim()
          .replace(/(^['"])|(['"]$)/g, "")
          .toLocaleLowerCase(),
      ),
    };
  if (e === "borderRadius") {
    if (typeof t != "string" || !t.includes("/")) return;
    let [r, i] = t.split("/"),
      o = Qe(e, r, !0),
      u = Qe(e, i, !0);
    for (let s in o) u[s] = It(e, o[s]) + " " + It(e, u[s]);
    return u;
  }
  if (/^border(Top|Right|Bottom|Left)?$/.test(e)) {
    let r = Qe("border", t, !0);
    r.borderWidth === 1 && !String(t).includes("1px") && (r.borderWidth = 3),
      r.borderColor === "black" &&
        !String(t).includes("black") &&
        (r.borderColor = n);
    let i = {
        Width: It(e + "Width", r.borderWidth),
        Style: ve(
          r.borderStyle,
          { solid: "solid", dashed: "dashed" },
          "solid",
          e + "Style",
        ),
        Color: r.borderColor,
      },
      o = {};
    for (let u of e === "border"
      ? ["Top", "Right", "Bottom", "Left"]
      : [e.slice(6)])
      for (let s in i) o["border" + u + s] = i[s];
    return o;
  }
  if (e === "boxShadow") {
    if (!t) throw new Error('Invalid `boxShadow` value: "' + t + '".');
    return { [e]: typeof t == "string" ? lf(t) : t };
  }
  if (e === "transform") {
    if (typeof t != "string") throw new Error("Invalid `transform` value.");
    let r = {},
      i = t.replace(/(-?[\d.]+%)/g, (u, s) => {
        let a = ~~(Math.random() * 1e9);
        return (r[a] = s), a + "px";
      }),
      o = Qe("transform", i, !0);
    for (let u of o.transform) for (let s in u) r[u[s]] && (u[s] = r[u[s]]);
    return o;
  }
  if (e === "background")
    return (
      (t = t.toString().trim()),
      /^(linear-gradient|radial-gradient|url)\(/.test(t)
        ? Qe("backgroundImage", t, !0)
        : Qe("background", t, !0)
    );
  if (e === "textShadow" && ((t = t.toString().trim()), t.includes(","))) {
    let r = mf(t),
      i = {};
    for (let o of r) {
      let u = Qe("textShadow", o, !0);
      for (let s in u) i[s] ? i[s].push(u[s]) : (i[s] = [u[s]]);
    }
    return i;
  }
}
function mf(e) {
  let t = [],
    n = !1,
    r = 0,
    i = e.length;
  for (let o = 0; o < i; ++o) {
    let u = e[o];
    u === ")" && (n = !1),
      !n &&
        (u === "(" && (n = !0),
        u === "," && (t.push(e.substring(r, o)), (r = o + 1)));
  }
  return t.push(e.substring(r, i)), t.map((o) => o.trim());
}
function Du(e) {
  return e === "transform"
    ? " Only absolute lengths such as `10px` are supported."
    : "";
}
var gu = /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\.\d]+)\)/;
function vu(e) {
  if (typeof e == "string" && gu.test(e.trim()))
    return e
      .trim()
      .replace(gu, (t, n, r, i, o) => `rgba(${n}, ${r}, ${i}, ${o})`);
  if (typeof e == "object" && e !== null) {
    for (let t in e) e[t] = vu(e[t]);
    return e;
  }
  return e;
}
function Wr(e, t) {
  let n = {};
  if (e) {
    let i = gf(e.color, t.color);
    n.color = i;
    for (let o in e) {
      if (o.startsWith("_")) {
        n[o] = e[o];
        continue;
      }
      if (o === "color") continue;
      let u = sf(o),
        s = vf(e[o], i);
      try {
        let a = hf(u, s, i) || pf(u, Qe(u, It(u, s), !0), s, i);
        Object.assign(n, a);
      } catch (a) {
        throw new Error(
          a.message +
            (a.message.includes(s)
              ? `
  ` + Du(u)
              : `
  in CSS rule \`${u}: ${s}\`.${Du(u)}`),
        );
      }
    }
  }
  if (n.backgroundImage) {
    let { backgrounds: i } = af(n);
    n.backgroundImage = i;
  }
  if (n.maskImage || n.WebkitMaskImage) {
    let i = mu(n);
    n.maskImage = i;
  }
  let r = Df(n.fontSize, t.fontSize);
  typeof n.fontSize < "u" && (n.fontSize = r),
    n.transformOrigin && (n.transformOrigin = An(n.transformOrigin, r));
  for (let i in n) {
    let o = n[i];
    if (i === "lineHeight")
      typeof o == "string" && (o = n[i] = q(o, r, r, t, !0) / r);
    else {
      if (typeof o == "string") {
        let u = q(o, r, r, t);
        typeof u < "u" && (n[i] = u), (o = n[i]);
      }
      if (typeof o == "string" || typeof o == "object") {
        let u = vu(o);
        u && (n[i] = u), (o = n[i]);
      }
    }
    if ((i === "opacity" && (o = n[i] = o * t.opacity), i === "transform")) {
      let u = o;
      for (let s of u) {
        let a = Object.keys(s)[0],
          l = s[a],
          f = typeof l == "string" ? q(l, r, r, t) ?? l : l;
        s[a] = f;
      }
    }
  }
  return n;
}
function Df(e, t) {
  if (typeof e == "number") return e;
  try {
    let n = new Xe(e);
    switch (n.unit) {
      case "em":
        return n.value * t;
      case "rem":
        return n.value * 16;
    }
  } catch {
    return t;
  }
}
function bu(e) {
  if (e.startsWith("hsl")) {
    let t = ff(e),
      [n, r, i] = t.values;
    return `hsl(${[n, `${r}%`, `${i}%`]
      .concat(t.alpha === 1 ? [] : [t.alpha])
      .join(",")})`;
  }
  return e;
}
function gf(e, t) {
  return e && e.toLowerCase() !== "currentcolor" ? bu(e) : bu(t);
}
function bf(e, t) {
  return e.replace(/currentcolor/gi, t);
}
function vf(e, t) {
  return Rr(e) && (e = bf(e, t)), e;
}
async function On(e, t, n, r, i) {
  let o = await qe(),
    u = { ...n, ...Wr(hu[t], n), ...Wr(r, n) };
  if (t === "img") {
    let [s, a, l] = await vt(i.src);
    if (a === void 0 && l === void 0) {
      if (i.width === void 0 || i.height === void 0)
        throw new Error(
          "Image size cannot be determined. Please provide the width and height of the image.",
        );
      (a = parseInt(i.width)), (l = parseInt(i.height));
    }
    let f = l / a,
      c =
        (u.borderLeftWidth || 0) +
        (u.borderRightWidth || 0) +
        (u.paddingLeft || 0) +
        (u.paddingRight || 0),
      p =
        (u.borderTopWidth || 0) +
        (u.borderBottomWidth || 0) +
        (u.paddingTop || 0) +
        (u.paddingBottom || 0),
      h = u.width || i.width,
      d = u.height || i.height,
      m = typeof h == "number" && typeof d == "number";
    m && ((h -= c), (d -= p)),
      h === void 0 && d === void 0
        ? ((h = "100%"), e.setAspectRatio(1 / f))
        : h === void 0
        ? typeof d == "number"
          ? (h = d / f)
          : e.setAspectRatio(1 / f)
        : d === void 0 &&
          (typeof h == "number" ? (d = h * f) : e.setAspectRatio(1 / f)),
      (u.width = m ? h + c : h),
      (u.height = m ? d + p : d),
      (u.__src = s);
  }
  if (t === "svg") {
    let s = i.viewBox || i.viewbox,
      a = bt(s),
      l = a ? a[3] / a[2] : null,
      { width: f, height: c } = i;
    typeof f > "u" && c
      ? l == null
        ? (f = 0)
        : typeof c == "string" && c.endsWith("%")
        ? (f = parseInt(c) / l + "%")
        : ((c = q(c, n.fontSize, 1, n)), (f = c / l))
      : typeof c > "u" && f
      ? l == null
        ? (f = 0)
        : typeof f == "string" && f.endsWith("%")
        ? (c = parseInt(f) * l + "%")
        : ((f = q(f, n.fontSize, 1, n)), (c = f * l))
      : (typeof f < "u" && (f = q(f, n.fontSize, 1, n) || f),
        typeof c < "u" && (c = q(c, n.fontSize, 1, n) || c),
        (f ||= a == null ? void 0 : a[2]),
        (c ||= a == null ? void 0 : a[3])),
      !u.width && f && (u.width = f),
      !u.height && c && (u.height = c);
  }
  return (
    e.setDisplay(
      ve(
        u.display,
        {
          flex: o.DISPLAY_FLEX,
          block: o.DISPLAY_FLEX,
          none: o.DISPLAY_NONE,
          "-webkit-box": o.DISPLAY_FLEX,
        },
        o.DISPLAY_FLEX,
        "display",
      ),
    ),
    e.setAlignContent(
      ve(
        u.alignContent,
        {
          stretch: o.ALIGN_STRETCH,
          center: o.ALIGN_CENTER,
          "flex-start": o.ALIGN_FLEX_START,
          "flex-end": o.ALIGN_FLEX_END,
          "space-between": o.ALIGN_SPACE_BETWEEN,
          "space-around": o.ALIGN_SPACE_AROUND,
          baseline: o.ALIGN_BASELINE,
          normal: o.ALIGN_AUTO,
        },
        o.ALIGN_AUTO,
        "alignContent",
      ),
    ),
    e.setAlignItems(
      ve(
        u.alignItems,
        {
          stretch: o.ALIGN_STRETCH,
          center: o.ALIGN_CENTER,
          "flex-start": o.ALIGN_FLEX_START,
          "flex-end": o.ALIGN_FLEX_END,
          baseline: o.ALIGN_BASELINE,
          normal: o.ALIGN_AUTO,
        },
        o.ALIGN_STRETCH,
        "alignItems",
      ),
    ),
    e.setAlignSelf(
      ve(
        u.alignSelf,
        {
          stretch: o.ALIGN_STRETCH,
          center: o.ALIGN_CENTER,
          "flex-start": o.ALIGN_FLEX_START,
          "flex-end": o.ALIGN_FLEX_END,
          baseline: o.ALIGN_BASELINE,
          normal: o.ALIGN_AUTO,
        },
        o.ALIGN_AUTO,
        "alignSelf",
      ),
    ),
    e.setJustifyContent(
      ve(
        u.justifyContent,
        {
          center: o.JUSTIFY_CENTER,
          "flex-start": o.JUSTIFY_FLEX_START,
          "flex-end": o.JUSTIFY_FLEX_END,
          "space-between": o.JUSTIFY_SPACE_BETWEEN,
          "space-around": o.JUSTIFY_SPACE_AROUND,
        },
        o.JUSTIFY_FLEX_START,
        "justifyContent",
      ),
    ),
    e.setFlexDirection(
      ve(
        u.flexDirection,
        {
          row: o.FLEX_DIRECTION_ROW,
          column: o.FLEX_DIRECTION_COLUMN,
          "row-reverse": o.FLEX_DIRECTION_ROW_REVERSE,
          "column-reverse": o.FLEX_DIRECTION_COLUMN_REVERSE,
        },
        o.FLEX_DIRECTION_ROW,
        "flexDirection",
      ),
    ),
    e.setFlexWrap(
      ve(
        u.flexWrap,
        {
          wrap: o.WRAP_WRAP,
          nowrap: o.WRAP_NO_WRAP,
          "wrap-reverse": o.WRAP_WRAP_REVERSE,
        },
        o.WRAP_NO_WRAP,
        "flexWrap",
      ),
    ),
    typeof u.gap < "u" && e.setGap(o.GUTTER_ALL, u.gap),
    typeof u.rowGap < "u" && e.setGap(o.GUTTER_ROW, u.rowGap),
    typeof u.columnGap < "u" && e.setGap(o.GUTTER_COLUMN, u.columnGap),
    typeof u.flexBasis < "u" && e.setFlexBasis(u.flexBasis),
    e.setFlexGrow(typeof u.flexGrow > "u" ? 0 : u.flexGrow),
    e.setFlexShrink(typeof u.flexShrink > "u" ? 0 : u.flexShrink),
    typeof u.maxHeight < "u" && e.setMaxHeight(u.maxHeight),
    typeof u.maxWidth < "u" && e.setMaxWidth(u.maxWidth),
    typeof u.minHeight < "u" && e.setMinHeight(u.minHeight),
    typeof u.minWidth < "u" && e.setMinWidth(u.minWidth),
    e.setOverflow(
      ve(
        u.overflow,
        { visible: o.OVERFLOW_VISIBLE, hidden: o.OVERFLOW_HIDDEN },
        o.OVERFLOW_VISIBLE,
        "overflow",
      ),
    ),
    e.setMargin(o.EDGE_TOP, u.marginTop || 0),
    e.setMargin(o.EDGE_BOTTOM, u.marginBottom || 0),
    e.setMargin(o.EDGE_LEFT, u.marginLeft || 0),
    e.setMargin(o.EDGE_RIGHT, u.marginRight || 0),
    e.setBorder(o.EDGE_TOP, u.borderTopWidth || 0),
    e.setBorder(o.EDGE_BOTTOM, u.borderBottomWidth || 0),
    e.setBorder(o.EDGE_LEFT, u.borderLeftWidth || 0),
    e.setBorder(o.EDGE_RIGHT, u.borderRightWidth || 0),
    e.setPadding(o.EDGE_TOP, u.paddingTop || 0),
    e.setPadding(o.EDGE_BOTTOM, u.paddingBottom || 0),
    e.setPadding(o.EDGE_LEFT, u.paddingLeft || 0),
    e.setPadding(o.EDGE_RIGHT, u.paddingRight || 0),
    e.setPositionType(
      ve(
        u.position,
        {
          absolute: o.POSITION_TYPE_ABSOLUTE,
          relative: o.POSITION_TYPE_RELATIVE,
        },
        o.POSITION_TYPE_RELATIVE,
        "position",
      ),
    ),
    typeof u.top < "u" && e.setPosition(o.EDGE_TOP, u.top),
    typeof u.bottom < "u" && e.setPosition(o.EDGE_BOTTOM, u.bottom),
    typeof u.left < "u" && e.setPosition(o.EDGE_LEFT, u.left),
    typeof u.right < "u" && e.setPosition(o.EDGE_RIGHT, u.right),
    typeof u.height < "u" ? e.setHeight(u.height) : e.setHeightAuto(),
    typeof u.width < "u" ? e.setWidth(u.width) : e.setWidthAuto(),
    [u, kn(u)]
  );
}
import xu from "escape-html";
var yu = [1, 0, 0, 1, 0, 0];
function yf(e, t, n) {
  let r = [...yu];
  for (let i of e) {
    let o = Object.keys(i)[0],
      u = i[o];
    if (typeof u == "string")
      if (o === "translateX") (u = (parseFloat(u) / 100) * t), (i[o] = u);
      else if (o === "translateY") (u = (parseFloat(u) / 100) * n), (i[o] = u);
      else throw new Error(`Invalid transform: "${o}: ${u}".`);
    let s = u,
      a = [...yu];
    switch (o) {
      case "translateX":
        a[4] = s;
        break;
      case "translateY":
        a[5] = s;
        break;
      case "scale":
        (a[0] = s), (a[3] = s);
        break;
      case "scaleX":
        a[0] = s;
        break;
      case "scaleY":
        a[3] = s;
        break;
      case "rotate": {
        let l = (s * Math.PI) / 180,
          f = Math.cos(l),
          c = Math.sin(l);
        (a[0] = f), (a[1] = c), (a[2] = -c), (a[3] = f);
        break;
      }
      case "skewX":
        a[2] = Math.tan((s * Math.PI) / 180);
        break;
      case "skewY":
        a[1] = Math.tan((s * Math.PI) / 180);
        break;
    }
    r = Pt(a, r);
  }
  e.splice(0, e.length), e.push(...r), (e.__resolved = !0);
}
function Rt({ left: e, top: t, width: n, height: r }, i, o, u) {
  let s;
  i.__resolved || yf(i, n, r);
  let a = i;
  if (o) s = a;
  else {
    let l =
        (u == null ? void 0 : u.xAbsolute) ??
        (((u == null ? void 0 : u.xRelative) ?? 50) * n) / 100,
      f =
        (u == null ? void 0 : u.yAbsolute) ??
        (((u == null ? void 0 : u.yRelative) ?? 50) * r) / 100,
      c = e + l,
      p = t + f;
    (s = Pt([1, 0, 0, 1, c, p], Pt(a, [1, 0, 0, 1, -c, -p]))),
      a.__parent && (s = Pt(a.__parent, s)),
      a.splice(0, 6, ...s);
  }
  return `matrix(${s.map((l) => l.toFixed(2)).join(",")})`;
}
function Fu(
  { left: e, top: t, width: n, height: r, isInheritingTransform: i },
  o,
) {
  let u = "",
    s = 1;
  return (
    o.transform &&
      (u = Rt(
        { left: e, top: t, width: n, height: r },
        o.transform,
        i,
        o.transformOrigin,
      )),
    o.opacity !== void 0 && (s = +o.opacity),
    { matrix: u, opacity: s }
  );
}
function Pn(
  {
    id: e,
    content: t,
    filter: n,
    left: r,
    top: i,
    width: o,
    height: u,
    matrix: s,
    opacity: a,
    image: l,
    clipPathId: f,
    debug: c,
    shape: p,
    decorationShape: h,
  },
  d,
) {
  let m = "";
  if (
    (c &&
      (m = C("rect", {
        x: r,
        y: i - u,
        width: o,
        height: u,
        fill: "transparent",
        stroke: "#575eff",
        "stroke-width": 1,
        transform: s || void 0,
        "clip-path": f ? `url(#${f})` : void 0,
      })),
    l)
  ) {
    let g = {
      href: l,
      x: r,
      y: i,
      width: o,
      height: u,
      transform: s || void 0,
      "clip-path": f ? `url(#${f})` : void 0,
      style: d.filter ? `filter:${d.filter}` : void 0,
    };
    return [
      (n ? `${n}<g filter="url(#satori_s-${e})">` : "") +
        C("image", { ...g, opacity: a !== 1 ? a : void 0 }) +
        (h || "") +
        (n ? "</g>" : "") +
        m,
      "",
    ];
  }
  let v = {
    x: r,
    y: i,
    width: o,
    height: u,
    "font-weight": d.fontWeight,
    "font-style": d.fontStyle,
    "font-size": d.fontSize,
    "font-family": d.fontFamily,
    "letter-spacing": d.letterSpacing || void 0,
    transform: s || void 0,
    "clip-path": f ? `url(#${f})` : void 0,
    style: d.filter ? `filter:${d.filter}` : void 0,
  };
  return [
    (n ? `${n}<g filter="url(#satori_s-${e})">` : "") +
      C("text", { ...v, fill: d.color, opacity: a !== 1 ? a : void 0 }, xu(t)) +
      (h || "") +
      (n ? "</g>" : "") +
      m,
    p ? C("text", v, xu(t)) : "",
  ];
}
function xf(e, t, n) {
  return e.replace(/([MA])([0-9.-]+),([0-9.-]+)/g, function (r, i, o, u) {
    return i + (parseFloat(o) + t) + "," + (parseFloat(u) + n);
  });
}
var qr = 1.1;
function wu({ id: e, width: t, height: n }, r) {
  if (!r.shadowColor || !r.shadowOffset || typeof r.shadowRadius > "u")
    return "";
  let i = r.shadowColor.length,
    o = "",
    u = "",
    s = 0,
    a = t,
    l = 0,
    f = n;
  for (let c = 0; c < i; c++) {
    let p = (r.shadowRadius[c] * r.shadowRadius[c]) / 4;
    (s = Math.min(r.shadowOffset[c].width - p, s)),
      (a = Math.max(r.shadowOffset[c].width + p + t, a)),
      (l = Math.min(r.shadowOffset[c].height - p, l)),
      (f = Math.max(r.shadowOffset[c].height + p + n, f)),
      (o += C("feDropShadow", {
        dx: r.shadowOffset[c].width,
        dy: r.shadowOffset[c].height,
        stdDeviation: r.shadowRadius[c] / 2,
        "flood-color": r.shadowColor[c],
        "flood-opacity": 1,
        ...(i > 1
          ? { in: "SourceGraphic", result: `satori_s-${e}-result-${c}` }
          : {}),
      })),
      i > 1 && (u = C("feMergeNode", { in: `satori_s-${e}-result-${c}` }) + u);
  }
  return C(
    "filter",
    {
      id: `satori_s-${e}`,
      x: ((s / t) * 100 * qr).toFixed(2) + "%",
      y: ((l / n) * 100 * qr).toFixed(2) + "%",
      width: (((a - s) / t) * 100 * qr).toFixed(2) + "%",
      height: (((f - l) / n) * 100 * qr).toFixed(2) + "%",
    },
    o + (u ? C("feMerge", {}, u) : ""),
  );
}
function Eu({ width: e, height: t, shape: n, opacity: r, id: i }, o) {
  if (!o.boxShadow) return null;
  let u = "",
    s = "";
  for (let a = o.boxShadow.length - 1; a >= 0; a--) {
    let l = "",
      f = o.boxShadow[a];
    f.spreadRadius && f.inset && (f.spreadRadius = -f.spreadRadius);
    let c = (f.blurRadius * f.blurRadius) / 4 + (f.spreadRadius || 0),
      p = Math.min(-c - (f.inset ? f.offsetX : 0), 0),
      h = Math.max(c + e - (f.inset ? f.offsetX : 0), e),
      d = Math.min(-c - (f.inset ? f.offsetY : 0), 0),
      m = Math.max(c + t - (f.inset ? f.offsetY : 0), t),
      v = `satori_s-${i}-${a}`,
      g = `satori_ms-${i}-${a}`,
      b = f.spreadRadius
        ? n.replace('stroke-width="0"', `stroke-width="${f.spreadRadius * 2}"`)
        : n;
    l += C(
      "mask",
      { id: g, maskUnits: "userSpaceOnUse" },
      C("rect", {
        x: 0,
        y: 0,
        width: o._viewportWidth || "100%",
        height: o._viewportHeight || "100%",
        fill: f.inset ? "#000" : "#fff",
      }) +
        b
          .replace('fill="#fff"', f.inset ? 'fill="#fff"' : 'fill="#000"')
          .replace('stroke="#fff"', ""),
    );
    let x = b
      .replace(
        /d="([^"]+)"/,
        (F, y) => 'd="' + xf(y, f.offsetX, f.offsetY) + '"',
      )
      .replace(
        /x="([^"]+)"/,
        (F, y) => 'x="' + (parseFloat(y) + f.offsetX) + '"',
      )
      .replace(
        /y="([^"]+)"/,
        (F, y) => 'y="' + (parseFloat(y) + f.offsetY) + '"',
      );
    f.spreadRadius &&
      f.spreadRadius < 0 &&
      (l += C(
        "mask",
        { id: g + "-neg", maskUnits: "userSpaceOnUse" },
        x
          .replace('stroke="#fff"', 'stroke="#000"')
          .replace(
            /stroke-width="[^"]+"/,
            `stroke-width="${-f.spreadRadius * 2}"`,
          ),
      )),
      f.spreadRadius &&
        f.spreadRadius < 0 &&
        (x = C("g", { mask: `url(#${g}-neg)` }, x)),
      (l +=
        C(
          "defs",
          {},
          C(
            "filter",
            {
              id: v,
              x: `${(p / e) * 100}%`,
              y: `${(d / t) * 100}%`,
              width: `${((h - p) / e) * 100}%`,
              height: `${((m - d) / t) * 100}%`,
            },
            C("feGaussianBlur", {
              stdDeviation: f.blurRadius / 2,
              result: "b",
            }) +
              C("feFlood", {
                "flood-color": f.color,
                in: "SourceGraphic",
                result: "f",
              }) +
              C("feComposite", {
                in: "f",
                in2: "b",
                operator: f.inset ? "out" : "in",
              }),
          ),
        ) +
        C("g", { mask: `url(#${g})`, filter: `url(#${v})`, opacity: r }, x)),
      f.inset ? (s += l) : (u += l);
  }
  return [u, s];
}
function Bn({ width: e, left: t, top: n, ascender: r, clipPathId: i }, o) {
  let {
    textDecorationColor: u,
    textDecorationStyle: s,
    textDecorationLine: a,
    fontSize: l,
  } = o;
  if (!a || a === "none") return "";
  let f = Math.max(1, l * 0.1),
    c =
      a === "line-through" ? n + r * 0.5 : a === "underline" ? n + r * 1.1 : n,
    p =
      s === "dashed"
        ? `${f * 1.2} ${f * 2}`
        : s === "dotted"
        ? `0 ${f * 2}`
        : void 0;
  return C("line", {
    x1: t,
    y1: c,
    x2: t + e,
    y2: c,
    stroke: u,
    "stroke-width": f,
    "stroke-dasharray": p,
    "stroke-linecap": s === "dotted" ? "round" : "square",
    "clip-path": i ? `url(#${i})` : void 0,
  });
}
function In(e) {
  return (e = e.replace("U+", "0x")), String.fromCodePoint(Number(e));
}
var Lt = In("U+0020"),
  Rn = In("U+0009"),
  Mt = In("U+2026");
var Ff = new Set([Rn]);
function wf(e) {
  return Ff.has(e);
}
async function* Ln(e, t) {
  let n = await qe(),
    {
      parentStyle: r,
      inheritedStyle: i,
      parent: o,
      font: u,
      id: s,
      isInheritingTransform: a,
      debug: l,
      embedFont: f,
      graphemeImages: c,
      locale: p,
      canLoadAdditionalAssets: h,
    } = t,
    {
      textAlign: d,
      whiteSpace: m,
      wordBreak: v,
      lineHeight: g,
      textTransform: b,
      textWrap: x,
      fontSize: F,
      filter: y,
      tabSize: k = 8,
      _inheritedBackgroundClipTextPath: P,
    } = r;
  e = Ef(e, b, p);
  let {
      content: B,
      shouldCollapseTabsAndSpaces: j,
      allowSoftWrap: ie,
    } = Sf(e, m),
    { words: oe, requiredBreaks: ue, allowBreakWord: N } = _f(B, v),
    [L, X] = Cf(r, ie),
    ce = kf(n, d);
  o.insertChild(ce, o.getChildCount()), iu(r.flexShrink) && o.setFlexShrink(1);
  let H = u.getEngine(F, g, r, p),
    Z = h ? Ee(B, "grapheme").filter((I) => !wf(I) && !H.has(I)) : [];
  yield Z.map((I) => ({ word: I, locale: p })),
    Z.length && (H = u.getEngine(F, g, r, p));
  function ae(I) {
    return !!(c && c[I]);
  }
  let me = Tf(H, r);
  function A(I) {
    let $ = 0;
    for (let G of I) ae(G) ? ($ += F) : ($ += me(G));
    return $;
  }
  function O(I) {
    return A(Ee(I, "grapheme"));
  }
  let M = Rr(k) ? q(k, F, 1, r) : me(Lt) * k,
    R = (I, $) => {
      if (I.length === 0)
        return { originWidth: 0, endingSpacesWidth: 0, text: I };
      let { index: G, tabCount: W } = Af(I),
        ne = 0,
        V = "";
      if (W > 0) {
        V = I.slice(0, G);
        let de = I.slice(G + W),
          ee = O(V),
          pe = ee + $;
        ne = (M === 0 ? ee : (Math.floor(pe / M) + W) * M) + O(de);
      } else ne = O(I);
      let De = I.trimEnd() === I ? ne : O(I.trimEnd());
      return { originWidth: ne, endingSpacesWidth: ne - De, text: I };
    },
    se = [],
    be = [],
    Re = [],
    ct = [],
    _t = [];
  function mn(I) {
    let $ = 0,
      G = 0,
      W = -1,
      ne = 0,
      V = 0,
      De = 0,
      de = 0;
    (se = []), (Re = [0]), (ct = []), (_t = []);
    let ee = 0;
    for (; ee < oe.length && $ < L; ) {
      let pe = oe[ee],
        Y = ue[ee],
        we = 0,
        Ar = 0,
        { originWidth: rt, endingSpacesWidth: Tt, text: nt } = R(pe, V);
      (pe = nt), (we = rt), (Ar = Tt), Y && De === 0 && (De = H.height(pe));
      let le = ",.!?:-@)>]}%#".indexOf(pe[0]) < 0,
        ge = !V,
        Ve = ee && le && V + we > I + Ar && ie;
      if (N && we > I && (!V || Ve || Y)) {
        let Oe = Ee(pe, "grapheme");
        oe.splice(ee, 1, ...Oe),
          V > 0 &&
            (se.push(V),
            be.push(de),
            $++,
            (ne += De),
            (V = 0),
            (De = 0),
            (de = 0),
            Re.push(1),
            (W = -1));
        continue;
      }
      if (Y || Ve)
        j && pe === " " && (we = 0),
          se.push(V),
          be.push(de),
          $++,
          (ne += De),
          (V = we),
          (De = we ? H.height(pe) : 0),
          (de = we ? H.baseline(pe) : 0),
          Re.push(1),
          (W = -1),
          Y || (G = Math.max(G, I));
      else {
        V += we;
        let Oe = H.height(pe);
        Oe > De && ((De = Oe), (de = H.baseline(pe))),
          ge && Re[Re.length - 1]++;
      }
      ge && W++, (G = Math.max(G, V));
      let Or = V - we;
      if (we === 0)
        _t.push({ y: ne, x: Or, width: 0, line: $, lineIndex: W, isImage: !1 });
      else {
        let Oe = Ee(pe, "word");
        for (let Pe = 0; Pe < Oe.length; Pe++) {
          let Be = Oe[Pe],
            Ye = 0,
            it = !1;
          ae(Be) ? ((Ye = F), (it = !0)) : (Ye = me(Be)),
            ct.push(Be),
            _t.push({
              y: ne,
              x: Or,
              width: Ye,
              line: $,
              lineIndex: W,
              isImage: it,
            }),
            (Or += Ye);
        }
      }
      ee++;
    }
    return (
      V && ($ < L && (ne += De), $++, se.push(V), be.push(de)),
      { width: G, height: ne }
    );
  }
  let Cr = { width: 0, height: 0 };
  ce.setMeasureFunc((I) => {
    let { width: $, height: G } = mn(I);
    if (x === "balance") {
      let W = $ / 2,
        ne = $,
        V = $;
      for (; W + 1 < ne; ) {
        V = (W + ne) / 2;
        let { height: De } = mn(V);
        De > G ? (W = V) : (ne = V);
      }
      return mn(ne), (Cr = { width: ne, height: G }), { width: ne, height: G };
    }
    return (Cr = { width: $, height: G }), { width: $, height: G };
  });
  let [wl, El] = yield,
    Dn = "",
    _r = "",
    je = i._inheritedClipPathId,
    Lo = i._inheritedMaskId,
    { left: Mo, top: No, width: gn, height: Cl } = ce.getComputedLayout(),
    Sr =
      o.getComputedWidth() -
      o.getComputedPadding(n.EDGE_LEFT) -
      o.getComputedPadding(n.EDGE_RIGHT) -
      o.getComputedBorder(n.EDGE_LEFT) -
      o.getComputedBorder(n.EDGE_RIGHT),
    dt = wl + Mo,
    pt = El + No,
    { matrix: We, opacity: kr } = Fu(
      { left: Mo, top: No, width: gn, height: Cl, isInheritingTransform: a },
      r,
    ),
    ht = "";
  if (r.textShadowOffset) {
    let { textShadowColor: I, textShadowOffset: $, textShadowRadius: G } = r;
    Array.isArray(r.textShadowOffset) || ((I = [I]), ($ = [$]), (G = [G])),
      (ht = wu(
        { width: Cr.width, height: Cr.height, id: s },
        { shadowColor: I, shadowOffset: $, shadowRadius: G },
      )),
      (ht = C("defs", {}, ht));
  }
  let St = "",
    Tr = "",
    $o = "",
    kt = -1,
    mt = {},
    He = null,
    Wo = 0;
  for (let I = 0; I < ct.length; I++) {
    let $ = _t[I],
      G = _t[I + 1];
    if (!$) continue;
    let W = ct[I],
      ne = null,
      V = !1,
      De = c ? c[W] : null,
      de = $.y,
      ee = $.x,
      pe = $.width,
      Y = $.line;
    if (Y === kt) continue;
    let we = !1;
    if (se.length > 1) {
      let le = gn - se[Y];
      if (d === "right" || d === "end") ee += le;
      else if (d === "center") ee += le / 2;
      else if (d === "justify" && Y < se.length - 1) {
        let ge = Re[Y],
          Ve = ge > 1 ? le / (ge - 1) : 0;
        (ee += Ve * $.lineIndex), (we = !0);
      }
    }
    if ((mt[Y] || (mt[Y] = [ee, we ? gn : se[Y]]), L !== 1 / 0)) {
      let Oe = function (Pe, Be) {
          let Ye = Ee(Be, "grapheme", p),
            it = "",
            Uo = 0;
          for (let zo of Ye) {
            let Go = Pe + A([it + zo]);
            if (it && Go + ge > Sr) break;
            (it += zo), (Uo = Go);
          }
          return { subset: it, resolvedWidth: Uo };
        },
        le = X,
        ge = me(X);
      ge > Sr && ((le = Mt), (ge = me(le)));
      let Ve = me(Lt),
        qo = Y < se.length - 1;
      if (Y + 1 === L && (qo || se[Y] > Sr)) {
        if (ee + pe + ge + Ve > Sr) {
          let { subset: Pe, resolvedWidth: Be } = Oe(ee, W);
          (W = Pe + le), (kt = Y), (mt[Y][1] = Be), (V = !0);
        } else if (G && G.line !== Y)
          if (d === "center") {
            let { subset: Pe, resolvedWidth: Be } = Oe(ee, W);
            (W = Pe + le), (kt = Y), (mt[Y][1] = Be), (V = !0);
          } else {
            let Pe = ct[I + 1],
              { subset: Be, resolvedWidth: Ye } = Oe(pe + ee, Pe);
            (W = W + Be + le), (kt = Y), (mt[Y][1] = Ye), (V = !0);
          }
      }
    }
    let Ar = be[Y],
      rt = H.baseline(W),
      Tt = H.height(W),
      nt = Ar - rt;
    if (De) de += 0;
    else if (f) {
      if (
        !W.includes(Rn) &&
        !tu.includes(W) &&
        ct[I + 1] &&
        G &&
        !G.isImage &&
        de === G.y &&
        !V
      ) {
        He === null && (Wo = ee), (He = He === null ? W : He + W);
        continue;
      }
      let le = He === null ? W : He + W,
        ge = He === null ? ee : Wo,
        Ve = $.width + ee - ge;
      (ne = H.getSVG(le.replace(/(\t)+/g, ""), {
        ...r,
        left: dt + ge,
        top: pt + de + rt + nt,
        letterSpacing: r.letterSpacing,
      })),
        (He = null),
        l &&
          ($o +=
            C("rect", {
              x: dt + ge,
              y: pt + de + nt,
              width: Ve,
              height: Tt,
              fill: "transparent",
              stroke: "#575eff",
              "stroke-width": 1,
              transform: We || void 0,
              "clip-path": je ? `url(#${je})` : void 0,
            }) +
            C("line", {
              x1: dt + ee,
              x2: dt + ee + $.width,
              y1: pt + de + nt + rt,
              y2: pt + de + nt + rt,
              stroke: "#14c000",
              "stroke-width": 1,
              transform: We || void 0,
              "clip-path": je ? `url(#${je})` : void 0,
            }));
    } else de += rt + nt;
    if (
      r.textDecorationLine &&
      (Y !== (G == null ? void 0 : G.line) || kt === Y)
    ) {
      let le = mt[Y];
      le &&
        !le[2] &&
        ((St += Bn(
          {
            left: dt + le[0],
            top: pt + Tt * +Y,
            width: le[1],
            ascender: H.baseline(W),
            clipPathId: je,
          },
          r,
        )),
        (le[2] = 1));
    }
    if (ne !== null) Tr += ne + " ";
    else {
      let [le, ge] = Pn(
        {
          content: W,
          filter: ht,
          id: s,
          left: dt + ee,
          top: pt + de,
          width: pe,
          height: Tt,
          matrix: We,
          opacity: kr,
          image: De,
          clipPathId: je,
          debug: l,
          shape: !!P,
          decorationShape: St,
        },
        r,
      );
      (Dn += le), (_r += ge), (St = "");
    }
    if (V) break;
  }
  if (Tr) {
    let I =
      r.color !== "transparent" && kr !== 0
        ? C("path", {
            fill: r.color,
            d: Tr,
            transform: We || void 0,
            opacity: kr !== 1 ? kr : void 0,
            "clip-path": je ? `url(#${je})` : void 0,
            mask: Lo ? `url(#${Lo})` : void 0,
            style: y ? `filter:${y}` : void 0,
          })
        : "";
    P && (_r = C("path", { d: Tr, transform: We || void 0 })),
      (Dn +=
        (ht ? ht + C("g", { filter: `url(#satori_s-${s})` }, I + St) : I + St) +
        $o);
  }
  return _r && (r._inheritedBackgroundClipTextPath.value += _r), Dn;
}
function Ef(e, t, n) {
  return (
    t === "uppercase"
      ? (e = e.toLocaleUpperCase(n))
      : t === "lowercase"
      ? (e = e.toLocaleLowerCase(n))
      : t === "capitalize" &&
        (e = Ee(e, "word", n)
          .map((r) =>
            Ee(r, "grapheme", n)
              .map((i, o) => (o === 0 ? i.toLocaleUpperCase(n) : i))
              .join(""),
          )
          .join("")),
    e
  );
}
function Cf(e, t) {
  let {
    textOverflow: n,
    lineClamp: r,
    WebkitLineClamp: i,
    WebkitBoxOrient: o,
    overflow: u,
    display: s,
  } = e;
  if (s === "block" && r) {
    let [a, l = Mt] = Of(r);
    if (a) return [a, l];
  }
  return n === "ellipsis" &&
    s === "-webkit-box" &&
    o === "vertical" &&
    nu(i) &&
    i > 0
    ? [i, Mt]
    : n === "ellipsis" && u === "hidden" && !t
    ? [1, Mt]
    : [1 / 0];
}
function _f(e, t) {
  let n = ["break-all", "break-word"].includes(t),
    { words: r, requiredBreaks: i } = ou(e, t);
  return { words: r, requiredBreaks: i, allowBreakWord: n };
}
function Sf(e, t) {
  let n = ["pre", "pre-wrap", "pre-line"].includes(t),
    r = ["normal", "nowrap", "pre-line"].includes(t),
    i = !["pre", "nowrap"].includes(t);
  return (
    n || (e = e.replace(/\n/g, Lt)),
    r && (e = e.replace(/([ ]|\t)+/g, Lt).trim()),
    { content: e, shouldCollapseTabsAndSpaces: r, allowSoftWrap: i }
  );
}
function kf(e, t) {
  let n = e.Node.create();
  return (
    n.setAlignItems(e.ALIGN_BASELINE),
    n.setJustifyContent(
      ve(
        t,
        {
          left: e.JUSTIFY_FLEX_START,
          right: e.JUSTIFY_FLEX_END,
          center: e.JUSTIFY_CENTER,
          justify: e.JUSTIFY_SPACE_BETWEEN,
          start: e.JUSTIFY_FLEX_START,
          end: e.JUSTIFY_FLEX_END,
        },
        e.JUSTIFY_FLEX_START,
        "textAlign",
      ),
    ),
    n
  );
}
function Tf(e, t) {
  let n = new Map();
  return function (i) {
    if (n.has(i)) return n.get(i);
    let o = e.measure(i, t);
    return n.set(i, o), o;
  };
}
function Af(e) {
  let t = /(\t)+/.exec(e);
  return t
    ? { index: t.index, tabCount: t[0].length }
    : { index: null, tabCount: 0 };
}
function Of(e) {
  if (typeof e == "number") return [e];
  let t = /^(\d+)\s*"(.*)"$/,
    n = /^(\d+)\s*'(.*)'$/,
    r = t.exec(e),
    i = n.exec(e);
  if (r) {
    let o = +r[1],
      u = r[2];
    return [o, u];
  } else if (i) {
    let o = +i[1],
      u = i[2];
    return [o, u];
  }
  return [];
}
import Pf from "parse-css-color";
var Mn = Mn || {},
  Cu = { type: "directional", value: "bottom" };
Mn.parse = (function () {
  var e = {
      linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
      repeatingLinearGradient:
        /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
      radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
      repeatingRadialGradient:
        /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
      sideOrCorner:
        /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
      extentKeywords:
        /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
      positionKeywords: /^(left|center|right|top|bottom)/i,
      pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
      percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
      emLikeValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))(r?em|vw|vh)/,
      angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
      zeroValue: /[0]/,
      startCall: /^\(/,
      endCall: /^\)/,
      comma: /^,/,
      hexColor: /^\#([0-9a-fA-F]+)/,
      literalColor: /^([a-zA-Z]+)/,
      rgbColor: /^rgb/i,
      rgbaColor: /^rgba/i,
      number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
    },
    t = "";
  function n(A) {
    var O = new Error(t + ": " + A);
    throw ((O.source = t), O);
  }
  function r() {
    var A = i();
    return t.length > 0 && n("Invalid input not EOF"), A;
  }
  function i() {
    return k(o);
  }
  function o() {
    return (
      s("linear-gradient", e.linearGradient, l, Cu) ||
      s("repeating-linear-gradient", e.repeatingLinearGradient, l, Cu) ||
      s("radial-gradient", e.radialGradient, h) ||
      s("repeating-radial-gradient", e.repeatingRadialGradient, h)
    );
  }
  function u(A = {}) {
    var M, R, se, be;
    let O = { ...A };
    return (
      Object.assign(O, {
        style:
          (O.style || []).length > 0
            ? O.style
            : [{ type: "extent-keyword", value: "farthest-corner" }],
        at: {
          type: "position",
          value: {
            x: {
              type: "position-keyword",
              value: "center",
              ...(((R = (M = O.at) == null ? void 0 : M.value) == null
                ? void 0
                : R.x) || {}),
            },
            y: {
              type: "position-keyword",
              value: "center",
              ...(((be = (se = O.at) == null ? void 0 : se.value) == null
                ? void 0
                : be.y) || {}),
            },
          },
        },
      }),
      A.value ||
        Object.assign(O, {
          type: "shape",
          value: O.style.some((Re) => ["%", "extent-keyword"].includes(Re.type))
            ? "ellipse"
            : "circle",
        }),
      O
    );
  }
  function s(A, O, M, R) {
    return a(O, function (se) {
      var be = M();
      return (
        be ? ae(e.comma) || n("Missing comma before color stops") : (be = R),
        {
          type: A,
          orientation: A.endsWith("radial-gradient")
            ? (be == null ? void 0 : be.map((Re) => u(Re))) ?? [u()]
            : be,
          colorStops: k(P),
        }
      );
    });
  }
  function a(A, O) {
    var M = ae(A);
    if (M) {
      ae(e.startCall) || n("Missing (");
      var R = O(M);
      return ae(e.endCall) || n("Missing )"), R;
    }
  }
  function l() {
    return f() || c() || p();
  }
  function f() {
    return Z("directional", e.sideOrCorner, 1);
  }
  function c() {
    return Z("angular", e.angleValue, 1);
  }
  function p() {
    return Z("directional", e.zeroValue, 0);
  }
  function h() {
    var A,
      O = d(),
      M;
    return (
      O &&
        ((A = []),
        A.push(O),
        (M = t),
        ae(e.comma) && ((O = d()), O ? A.push(O) : (t = M))),
      A
    );
  }
  function d() {
    let A = m(),
      O = x();
    if (!(!A && !O)) return { ...A, at: O };
  }
  function m() {
    let A = v() || g(),
      O = b() || ce() || L(),
      M = Z("%", e.percentageValue, 1);
    if (A) return { ...A, style: [O, M].filter((R) => R) };
    if (O) return { style: [O, M].filter((R) => R), ...(v() || g()) };
  }
  function v() {
    return Z("shape", /^(circle)/i, 0);
  }
  function g() {
    return Z("shape", /^(ellipse)/i, 0);
  }
  function b() {
    return Z("extent-keyword", e.extentKeywords, 1);
  }
  function x() {
    if (Z("position", /^at/, 0)) {
      var A = F();
      return A || n("Missing positioning value"), A;
    }
  }
  function F() {
    var A = y();
    if (A.x || A.y) return { type: "position", value: A };
  }
  function y() {
    return { x: L(), y: L() };
  }
  function k(A) {
    var O = A(),
      M = [];
    if (O)
      for (M.push(O); ae(e.comma); )
        (O = A()), O ? M.push(O) : n("One extra comma");
    return M;
  }
  function P() {
    var A = B();
    return A || n("Expected color definition"), (A.length = L()), A;
  }
  function B() {
    return ie() || ue() || oe() || j();
  }
  function j() {
    return Z("literal", e.literalColor, 0);
  }
  function ie() {
    return Z("hex", e.hexColor, 1);
  }
  function oe() {
    return a(e.rgbColor, function () {
      return { type: "rgb", value: k(N) };
    });
  }
  function ue() {
    return a(e.rgbaColor, function () {
      return { type: "rgba", value: k(N) };
    });
  }
  function N() {
    return ae(e.number)[1];
  }
  function L() {
    return Z("%", e.percentageValue, 1) || X() || ce();
  }
  function X() {
    return Z("position-keyword", e.positionKeywords, 1);
  }
  function ce() {
    return Z("px", e.pixelValue, 1) || H(e.emLikeValue, 1);
  }
  function H(A, O) {
    var M = ae(A);
    if (M) return { type: M[5], value: M[O] };
  }
  function Z(A, O, M) {
    var R = ae(O);
    if (R) return { type: A, value: R[M] };
  }
  function ae(A) {
    var O, M;
    return (
      (M = /^[\n\r\t\s]+/.exec(t)),
      M && me(M[0].length),
      (O = A.exec(t)),
      O && me(O[0].length),
      O
    );
  }
  function me(A) {
    t = t.substr(A);
  }
  return function (A) {
    return (t = A.toString()), r();
  };
})();
var Nn = Mn;
function Bf(e) {
  return e.type === "literal"
    ? e.value
    : e.type === "hex"
    ? `#${e.value}`
    : e.type === "rgb"
    ? `rgb(${e.value.join(",")})`
    : e.type === "rgba"
    ? `rgba(${e.value.join(",")})`
    : "transparent";
}
function If(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0;
  return (
    e.includes("top") ? (n = 1) : e.includes("bottom") && (i = 1),
    e.includes("left") ? (t = 1) : e.includes("right") && (r = 1),
    !t && !r && !n && !i && (n = 1),
    [t, n, r, i]
  );
}
function Rf(e, t) {
  return typeof e == "string" && e.endsWith("%")
    ? (t * parseFloat(e)) / 100
    : +e;
}
function $n(e, { x: t, y: n, defaultX: r, defaultY: i }) {
  return (
    e
      ? e
          .split(" ")
          .map((o) => {
            try {
              let u = new Xe(o);
              return u.type === "length" || u.type === "number"
                ? u.value
                : u.value + u.unit;
            } catch {
              return null;
            }
          })
          .filter((o) => o !== null)
      : [r, i]
  ).map((o, u) => Rf(o, [t, n][u]));
}
function _u(e, t, n) {
  let r = [];
  for (let s of t) {
    let a = Bf(s);
    if (
      !r.length &&
      (r.push({ offset: 0, color: a }),
      typeof s.length > "u" || s.length.value === "0")
    )
      continue;
    let l =
      typeof s.length > "u"
        ? void 0
        : s.length.type === "%"
        ? s.length.value / 100
        : s.length.value / e;
    r.push({ offset: l, color: a });
  }
  r.length || r.push({ offset: 0, color: "transparent" });
  let i = r[r.length - 1];
  i.offset !== 1 &&
    (typeof i.offset > "u"
      ? (i.offset = 1)
      : r.push({ offset: 1, color: i.color }));
  let o = 0,
    u = 1;
  for (let s = 0; s < r.length; s++)
    if (typeof r[s].offset > "u") {
      for (u < s && (u = s); typeof r[u].offset > "u"; ) u++;
      r[s].offset =
        ((r[u].offset - r[o].offset) / (u - o)) * (s - o) + r[o].offset;
    } else o = s;
  return n === "mask"
    ? r.map((s) => {
        let a = Pf(s.color);
        return a.alpha === 0
          ? { ...s, color: "rgba(0, 0, 0, 1)" }
          : { ...s, color: `rgba(255, 255, 255, ${a.alpha})` };
      })
    : r;
}
async function Nt(
  { id: e, width: t, height: n, left: r, top: i },
  { image: o, size: u, position: s, repeat: a },
  l,
  f,
) {
  (a = a || "repeat"), (f = f || "background");
  let c = a === "repeat-x" || a === "repeat",
    p = a === "repeat-y" || a === "repeat",
    h = $n(u, { x: t, y: n, defaultX: t, defaultY: n }),
    d = $n(s, { x: t, y: n, defaultX: 0, defaultY: 0 });
  if (o.startsWith("linear-gradient(")) {
    let m = Nn.parse(o)[0],
      [v, g] = h,
      b,
      x,
      F,
      y,
      k;
    if (m.orientation.type === "directional")
      ([b, x, F, y] = If(m.orientation.value)),
        (k = Math.sqrt(Math.pow((F - b) * v, 2) + Math.pow((y - x) * g, 2)));
    else if (m.orientation.type === "angular") {
      let N = function (L) {
          if (
            ((L = ((L % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)),
            Math.abs(L - Math.PI / 2) < 1e-6)
          ) {
            (b = 0), (x = 0), (F = 1), (y = 0), (k = v);
            return;
          } else if (Math.abs(L) < 1e-6) {
            (b = 0), (x = 1), (F = 0), (y = 0), (k = g);
            return;
          }
          if (L >= Math.PI / 2 && L < Math.PI) {
            N(Math.PI - L), (x = 1 - x), (y = 1 - y);
            return;
          } else if (L >= Math.PI) {
            N(L - Math.PI);
            let M = b;
            (b = F), (F = M), (M = x), (x = y), (y = M);
            return;
          }
          let X = Math.tan(L),
            ce = X * ue,
            H = Math.atan(ce),
            Z = Math.sqrt(2) * Math.cos(Math.PI / 4 - H);
          (b = 0), (x = 1), (F = Math.sin(H) * Z), (y = 1 - Math.cos(H) * Z);
          let ae = 1,
            me = 1 / X,
            A = Math.abs(
              (ae * ue + me) /
                Math.sqrt(ae * ae + me * me) /
                Math.sqrt(ue * ue + 1),
            );
          k = Math.sqrt(v * v + g * g) * A;
        },
        ue = v / g;
      N((+m.orientation.value / 180) * Math.PI);
    }
    let P = _u(k, m.colorStops, f),
      B = `satori_bi${e}`,
      j = `satori_pattern_${e}`,
      ie = C(
        "pattern",
        {
          id: j,
          x: d[0] / t,
          y: d[1] / n,
          width: c ? v / t : "1",
          height: p ? g / n : "1",
          patternUnits: "objectBoundingBox",
        },
        C(
          "linearGradient",
          { id: B, x1: b, y1: x, x2: F, y2: y },
          P.map((oe) =>
            C("stop", {
              offset: oe.offset * 100 + "%",
              "stop-color": oe.color,
            }),
          ).join(""),
        ) + C("rect", { x: 0, y: 0, width: v, height: g, fill: `url(#${B})` }),
      );
    return [j, ie];
  }
  if (o.startsWith("radial-gradient(")) {
    let m = Nn.parse(o)[0],
      v = m.orientation[0],
      [g, b] = h,
      x = "circle",
      F = g / 2,
      y = b / 2;
    if (v.type === "shape") {
      if (((x = v.value), v.at))
        if (v.at.type === "position") {
          let N = Lf(v.at.value.x, v.at.value.y, g, b, l.fontSize, l);
          (F = N.x), (y = N.y);
        } else
          throw new Error("orientation.at.type not implemented: " + v.at.type);
    } else throw new Error("orientation.type not implemented: " + v.type);
    let k = _u(t, m.colorStops, f),
      P = `satori_radial_${e}`,
      B = `satori_pattern_${e}`,
      j = `satori_mask_${e}`,
      ie = Mf(x, v.style, l.fontSize, { x: F, y }, [g, b], l),
      oe = C(
        "pattern",
        {
          id: B,
          x: d[0] / t,
          y: d[1] / n,
          width: c ? g / t : "1",
          height: p ? b / n : "1",
          patternUnits: "objectBoundingBox",
        },
        C(
          "radialGradient",
          { id: P },
          k
            .map((N) => C("stop", { offset: N.offset, "stop-color": N.color }))
            .join(""),
        ) +
          C(
            "mask",
            { id: j },
            C("rect", { x: 0, y: 0, width: g, height: b, fill: "#fff" }),
          ) +
          C("rect", { x: 0, y: 0, width: g, height: b, fill: k.at(-1).color }) +
          C(x, {
            cx: F,
            cy: y,
            width: g,
            height: b,
            ...ie,
            fill: `url(#${P})`,
            mask: `url(#${j})`,
          }),
      );
    return [B, oe];
  }
  if (o.startsWith("url(")) {
    let m = $n(u, { x: t, y: n, defaultX: 0, defaultY: 0 }),
      [v, g, b] = await vt(o.slice(4, -1)),
      x = f === "mask" ? g || m[0] : m[0] || g,
      F = f === "mask" ? b || m[1] : m[1] || b;
    return [
      `satori_bi${e}`,
      C(
        "pattern",
        {
          id: `satori_bi${e}`,
          patternContentUnits: "userSpaceOnUse",
          patternUnits: "userSpaceOnUse",
          x: d[0] + r,
          y: d[1] + i,
          width: c ? x : "100%",
          height: p ? F : "100%",
        },
        C("image", {
          x: 0,
          y: 0,
          width: x,
          height: F,
          preserveAspectRatio: "none",
          href: v,
        }),
      ),
    ];
  }
  throw new Error(`Invalid background image: "${o}"`);
}
function Lf(e, t, n, r, i, o) {
  let u = { x: n / 2, y: r / 2 };
  return (
    e.type === "position-keyword"
      ? Object.assign(u, Su(e.value, n, r, "x"))
      : (u.x = q(`${e.value}${e.type}`, i, n, o, !0)),
    t.type === "position-keyword"
      ? Object.assign(u, Su(t.value, n, r, "y"))
      : (u.y = q(`${t.value}${t.type}`, i, r, o, !0)),
    u
  );
}
function Su(e, t, n, r) {
  switch (e) {
    case "center":
      return { [r]: r === "x" ? t / 2 : n / 2 };
    case "left":
      return { x: 0 };
    case "top":
      return { y: 0 };
    case "right":
      return { x: t };
    case "bottom":
      return { y: n };
  }
}
function Mf(e, t, n, r, i, o) {
  let [u, s] = i,
    { x: a, y: l } = r,
    f = {},
    c = 0,
    p = 0;
  if (!t.some((d) => d.type === "extent-keyword")) {
    if (t.some((d) => d.value.startsWith("-")))
      throw new Error(
        "disallow setting negative values to the size of the shape. Check https://w3c.github.io/csswg-drafts/css-images/#valdef-rg-size-length-0",
      );
    return e === "circle"
      ? { r: q(`${t[0].value}${t[0].type}`, n, u, o, !0) }
      : {
          rx: q(`${t[0].value}${t[0].type}`, n, u, o, !0),
          ry: q(`${t[1].value}${t[1].type}`, n, s, o, !0),
        };
  }
  switch (t[0].value) {
    case "farthest-corner":
      (c = Math.max(Math.abs(u - a), Math.abs(a))),
        (p = Math.max(Math.abs(s - l), Math.abs(l)));
      break;
    case "closest-corner":
      (c = Math.min(Math.abs(u - a), Math.abs(a))),
        (p = Math.min(Math.abs(s - l), Math.abs(l)));
      break;
    case "farthest-side":
      return (
        e === "circle"
          ? (f.r = Math.max(
              Math.abs(u - a),
              Math.abs(a),
              Math.abs(s - l),
              Math.abs(l),
            ))
          : ((f.rx = Math.max(Math.abs(u - a), Math.abs(a))),
            (f.ry = Math.max(Math.abs(s - l), Math.abs(l)))),
        f
      );
    case "closest-side":
      return (
        e === "circle"
          ? (f.r = Math.min(
              Math.abs(u - a),
              Math.abs(a),
              Math.abs(s - l),
              Math.abs(l),
            ))
          : ((f.rx = Math.min(Math.abs(u - a), Math.abs(a))),
            (f.ry = Math.min(Math.abs(s - l), Math.abs(l)))),
        f
      );
  }
  if (e === "circle") f.r = Math.sqrt(c * c + p * p);
  else {
    let d = p !== 0 ? c / p : 1;
    c === 0
      ? ((f.rx = 0), (f.ry = 0))
      : ((f.ry = Math.sqrt(c * c + p * p * d * d) / d), (f.rx = f.ry * d));
  }
  return f;
}
function Nf([e, t]) {
  return Math.round(e * 1e3) === 0 && Math.round(t * 1e3) === 0
    ? 0
    : Math.round(((e * t) / Math.sqrt(e * e + t * t)) * 1e3) / 1e3;
}
function Ur(e, t, n) {
  return (
    n < e + t &&
      (n / 2 < e && n / 2 < t
        ? (e = t = n / 2)
        : n / 2 < e
        ? (e = n - t)
        : n / 2 < t && (t = n - e)),
    [e, t]
  );
}
function zr(e) {
  e[0] = e[1] = Math.min(e[0], e[1]);
}
function Gr(e, t, n, r, i) {
  if (typeof e == "string") {
    let o = e.split(" ").map((s) => s.trim()),
      u = !o[1] && !o[0].endsWith("%");
    return (
      (o[1] = o[1] || o[0]),
      [
        u,
        [Math.min(q(o[0], r, t, i, !0), t), Math.min(q(o[1], r, n, i, !0), n)],
      ]
    );
  }
  return typeof e == "number"
    ? [!0, [Math.min(e, t), Math.min(e, n)]]
    : [!0, void 0];
}
var jr = (e) => e && e[0] !== 0 && e[1] !== 0;
function Ke({ left: e, top: t, width: n, height: r }, i, o) {
  let {
      borderTopLeftRadius: u,
      borderTopRightRadius: s,
      borderBottomLeftRadius: a,
      borderBottomRightRadius: l,
      fontSize: f,
    } = i,
    c,
    p,
    h,
    d;
  if (
    (([c, u] = Gr(u, n, r, f, i)),
    ([p, s] = Gr(s, n, r, f, i)),
    ([h, a] = Gr(a, n, r, f, i)),
    ([d, l] = Gr(l, n, r, f, i)),
    !o && !jr(u) && !jr(s) && !jr(a) && !jr(l))
  )
    return "";
  (u ||= [0, 0]),
    (s ||= [0, 0]),
    (a ||= [0, 0]),
    (l ||= [0, 0]),
    ([u[0], s[0]] = Ur(u[0], s[0], n)),
    ([a[0], l[0]] = Ur(a[0], l[0], n)),
    ([u[1], a[1]] = Ur(u[1], a[1], r)),
    ([s[1], l[1]] = Ur(s[1], l[1], r)),
    c && zr(u),
    p && zr(s),
    h && zr(a),
    d && zr(l);
  let m = [];
  (m[0] = [s, s]),
    (m[1] = [l, [-l[0], l[1]]]),
    (m[2] = [a, [-a[0], -a[1]]]),
    (m[3] = [u, [u[0], -u[1]]]);
  let v = `h${n - u[0] - s[0]} a${m[0][0]} 0 0 1 ${m[0][1]}`,
    g = `v${r - s[1] - l[1]} a${m[1][0]} 0 0 1 ${m[1][1]}`,
    b = `h${l[0] + a[0] - n} a${m[2][0]} 0 0 1 ${m[2][1]}`,
    x = `v${a[1] + u[1] - r} a${m[3][0]} 0 0 1 ${m[3][1]}`;
  if (o) {
    let y = function (ue) {
        let N = Nf([u, s, l, a][ue]);
        return ue === 0
          ? [
              [e + u[0] - N, t + u[1] - N],
              [e + u[0], t],
            ]
          : ue === 1
          ? [
              [e + n - s[0] + N, t + s[1] - N],
              [e + n, t + s[1]],
            ]
          : ue === 2
          ? [
              [e + n - l[0] + N, t + r - l[1] + N],
              [e + n - l[0], t + r],
            ]
          : [
              [e + a[0] - N, t + r - a[1] + N],
              [e, t + r - a[1]],
            ];
      },
      F = o.indexOf(!1);
    if (!o.includes(!0)) throw new Error("Invalid `partialSides`.");
    if (F === -1) F = 0;
    else for (; !o[F]; ) F = (F + 1) % 4;
    let k = "",
      P = y(F),
      B = `M${P[0]} A${m[(F + 3) % 4][0]} 0 0 1 ${P[1]}`,
      j = 0;
    for (; j < 4 && o[(F + j) % 4]; j++)
      (k += B + " "), (B = [v, g, b, x][(F + j) % 4]);
    let ie = (F + j) % 4;
    k += B.split(" ")[0];
    let oe = y(ie);
    return (k += ` A${m[(ie + 3) % 4][0]} 0 0 1 ${oe[0]}`), k;
  }
  return `M${e + u[0]},${t} ${v} ${g} ${b} ${x}`;
}
function ku(e, t, n) {
  return (
    n[e + "Width"] === n[t + "Width"] &&
    n[e + "Style"] === n[t + "Style"] &&
    n[e + "Color"] === n[t + "Color"]
  );
}
function Tu(
  {
    id: e,
    currentClipPathId: t,
    borderPath: n,
    borderType: r,
    left: i,
    top: o,
    width: u,
    height: s,
  },
  a,
) {
  if (
    !(
      a.borderTopWidth ||
      a.borderRightWidth ||
      a.borderBottomWidth ||
      a.borderLeftWidth
    )
  )
    return null;
  let f = `satori_bc-${e}`;
  return [
    C(
      "clipPath",
      { id: f, "clip-path": t ? `url(#${t})` : void 0 },
      C(r, { x: i, y: o, width: u, height: s, d: n || void 0 }),
    ),
    f,
  ];
}
function $t(
  {
    left: e,
    top: t,
    width: n,
    height: r,
    props: i,
    asContentMask: o,
    maskBorderOnly: u,
  },
  s,
) {
  let a = ["borderTop", "borderRight", "borderBottom", "borderLeft"];
  if (!o && !a.some((h) => s[h + "Width"])) return "";
  let l = "",
    f = 0;
  for (; f > 0 && ku(a[f], a[(f + 3) % 4], s); ) f = (f + 3) % 4;
  let c = [!1, !1, !1, !1],
    p = [];
  for (let h = 0; h < 4; h++) {
    let d = (f + h) % 4,
      m = (f + h + 1) % 4,
      v = a[d],
      g = a[m];
    if (
      ((c[d] = !0),
      (p = [s[v + "Width"], s[v + "Style"], s[v + "Color"], v]),
      !ku(v, g, s))
    ) {
      let b =
        (p[0] || 0) + ((o && !u && s[v.replace("border", "padding")]) || 0);
      b &&
        (l += C("path", {
          width: n,
          height: r,
          ...i,
          fill: "none",
          stroke: o ? "#000" : p[2],
          "stroke-width": b * 2,
          "stroke-dasharray":
            !o && p[1] === "dashed" ? b * 2 + " " + b : void 0,
          d: Ke({ left: e, top: t, width: n, height: r }, s, c),
        })),
        (c = [!1, !1, !1, !1]);
    }
  }
  if (c.some(Boolean)) {
    let h =
      (p[0] || 0) + ((o && !u && s[p[3].replace("border", "padding")]) || 0);
    h &&
      (l += C("path", {
        width: n,
        height: r,
        ...i,
        fill: "none",
        stroke: o ? "#000" : p[2],
        "stroke-width": h * 2,
        "stroke-dasharray": !o && p[1] === "dashed" ? h * 2 + " " + h : void 0,
        d: Ke({ left: e, top: t, width: n, height: r }, s, c),
      }));
  }
  return l;
}
function Wn(
  { id: e, left: t, top: n, width: r, height: i, matrix: o, borderOnly: u },
  s,
) {
  let a = (s.borderLeftWidth || 0) + (u ? 0 : s.paddingLeft || 0),
    l = (s.borderTopWidth || 0) + (u ? 0 : s.paddingTop || 0),
    f = (s.borderRightWidth || 0) + (u ? 0 : s.paddingRight || 0),
    c = (s.borderBottomWidth || 0) + (u ? 0 : s.paddingBottom || 0),
    p = { x: t + a, y: n + l, width: r - a - f, height: i - l - c };
  return C(
    "mask",
    { id: e },
    C("rect", {
      ...p,
      fill: "#fff",
      mask: s._inheritedMaskId ? `url(#${s._inheritedMaskId})` : void 0,
    }) +
      $t(
        {
          left: t,
          top: n,
          width: r,
          height: i,
          props: { transform: o || void 0 },
          asContentMask: !0,
          maskBorderOnly: u,
        },
        s,
      ),
  );
}
import { getStylesForProperty as Au } from "css-to-react-native";
var Wt = {
  circle: /circle\((.+)\)/,
  ellipse: /ellipse\((.+)\)/,
  path: /path\((.+)\)/,
  polygon: /polygon\((.+)\)/,
  inset: /inset\((.+)\)/,
};
function Bu({ width: e, height: t }, n, r) {
  function i(l) {
    let f = l.match(Wt.circle);
    if (!f) return null;
    let [, c] = f,
      [p, h = ""] = c.split("at").map((v) => v.trim()),
      { x: d, y: m } = Pu(h, e, t);
    return {
      type: "circle",
      r: q(
        p,
        r.fontSize,
        Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) / Math.sqrt(2),
        r,
        !0,
      ),
      cx: q(d, r.fontSize, e, r, !0),
      cy: q(m, r.fontSize, t, r, !0),
    };
  }
  function o(l) {
    let f = l.match(Wt.ellipse);
    if (!f) return null;
    let [, c] = f,
      [p, h = ""] = c.split("at").map((b) => b.trim()),
      [d, m] = p.split(" "),
      { x: v, y: g } = Pu(h, e, t);
    return {
      type: "ellipse",
      rx: q(d || "50%", r.fontSize, e, r, !0),
      ry: q(m || "50%", r.fontSize, t, r, !0),
      cx: q(v, r.fontSize, e, r, !0),
      cy: q(g, r.fontSize, t, r, !0),
    };
  }
  function u(l) {
    let f = l.match(Wt.path);
    if (!f) return null;
    let [c, p] = Ou(f[1]);
    return { type: "path", d: p, "fill-rule": c };
  }
  function s(l) {
    let f = l.match(Wt.polygon);
    if (!f) return null;
    let [c, p] = Ou(f[1]);
    return {
      type: "polygon",
      "fill-rule": c,
      points: p
        .split(",")
        .map((h) =>
          h
            .split(" ")
            .map((d, m) => q(d, r.fontSize, m === 0 ? e : t, r, !0))
            .join(" "),
        )
        .join(","),
    };
  }
  function a(l) {
    let f = l.match(Wt.inset);
    if (!f) return null;
    let [c, p] = (
        f[1].includes("round") ? f[1] : `${f[1].trim()} round 0`
      ).split("round"),
      h = Au("borderRadius", p, !0),
      d = Object.values(h)
        .map((F) => String(F))
        .map(
          (F, y) => q(F, r.fontSize, y === 0 || y === 2 ? t : e, r, !0) || 0,
        ),
      m = Object.values(Au("margin", c, !0))
        .map((F) => String(F))
        .map(
          (F, y) => q(F, r.fontSize, y === 0 || y === 2 ? t : e, r, !0) || 0,
        ),
      v = m[3],
      g = m[0],
      b = e - (m[1] + m[3]),
      x = t - (m[0] + m[2]);
    return d.some((F) => F > 0)
      ? {
          type: "path",
          d: Ke({ left: v, top: g, width: b, height: x }, { ...n, ...h }),
        }
      : { type: "rect", x: v, y: g, width: b, height: x };
  }
  return {
    parseCircle: i,
    parseEllipse: o,
    parsePath: u,
    parsePolygon: s,
    parseInset: a,
  };
}
function Ou(e) {
  let [, t = "nonzero", n] =
    e.replace(/('|")/g, "").match(/^(nonzero|evenodd)?,?(.+)/) || [];
  return [t, n];
}
function Pu(e, t, n) {
  let r = e.split(" "),
    i = { x: r[0] || "50%", y: r[1] || "50%" };
  return (
    r.forEach((o) => {
      o === "top"
        ? (i.y = 0)
        : o === "bottom"
        ? (i.y = n)
        : o === "left"
        ? (i.x = 0)
        : o === "right"
        ? (i.x = t)
        : o === "center" && ((i.x = t / 2), (i.y = n / 2));
    }),
    i
  );
}
function Hr(e) {
  return `satori_cp-${e}`;
}
function Iu(e) {
  return `url(#${Hr(e)})`;
}
function Ru(e, t, n) {
  if (t.clipPath === "none") return "";
  let r = Bu(e, t, n),
    i = t.clipPath,
    o = { type: "" };
  for (let u of Object.keys(r)) if (((o = r[u](i)), o)) break;
  if (o) {
    let { type: u, ...s } = o;
    return C(
      "clipPath",
      {
        id: Hr(e.id),
        "clip-path": e.currentClipPath,
        transform: `translate(${e.left}, ${e.top})`,
      },
      C(u, s),
    );
  }
  return "";
}
function qn(
  {
    left: e,
    top: t,
    width: n,
    height: r,
    path: i,
    matrix: o,
    id: u,
    currentClipPath: s,
    src: a,
  },
  l,
  f,
) {
  let c = "",
    p =
      l.clipPath && l.clipPath !== "none"
        ? Ru(
            {
              left: e,
              top: t,
              width: n,
              height: r,
              path: i,
              id: u,
              matrix: o,
              currentClipPath: s,
              src: a,
            },
            l,
            f,
          )
        : "";
  if (l.overflow !== "hidden" && !a) c = "";
  else {
    let d = p ? `satori_ocp-${u}` : Hr(u);
    c = C(
      "clipPath",
      { id: d, "clip-path": s },
      C(i ? "path" : "rect", {
        x: e,
        y: t,
        width: n,
        height: r,
        d: i || void 0,
      }),
    );
  }
  let h = Wn(
    {
      id: `satori_om-${u}`,
      left: e,
      top: t,
      width: n,
      height: r,
      matrix: o,
      borderOnly: !a,
    },
    l,
  );
  return p + c + h;
}
var $f = (e) => `satori_mi-${e}`;
async function Un(e, t, n) {
  if (!t.maskImage) return ["", ""];
  let { left: r, top: i, width: o, height: u, id: s } = e,
    a = t.maskImage,
    l = a.length;
  if (!l) return ["", ""];
  let f = $f(s),
    c = "";
  for (let p = 0; p < l; p++) {
    let h = a[p],
      [d, m] = await Nt(
        { id: `${f}-${p}`, left: r, top: i, width: o, height: u },
        h,
        n,
        "mask",
      );
    c += m + C("rect", { x: 0, y: 0, width: o, height: u, fill: `url(#${d})` });
  }
  return (c = C("mask", { id: f }, c)), [f, c];
}
async function qt(
  {
    id: e,
    left: t,
    top: n,
    width: r,
    height: i,
    isInheritingTransform: o,
    src: u,
    debug: s,
  },
  a,
  l,
) {
  if (a.display === "none") return "";
  let f = !!u,
    c = "rect",
    p = "",
    h = "",
    d = [],
    m = 1,
    v = "";
  a.backgroundColor && d.push(a.backgroundColor),
    a.opacity !== void 0 && (m = +a.opacity),
    a.transform &&
      (p = Rt(
        { left: t, top: n, width: r, height: i },
        a.transform,
        o,
        a.transformOrigin,
      ));
  let g = "";
  if (a.backgroundImage) {
    let L = [];
    for (let X = 0; X < a.backgroundImage.length; X++) {
      let ce = a.backgroundImage[X],
        H = await Nt(
          { id: e + "_" + X, width: r, height: i, left: t, top: n },
          ce,
          l,
        );
      H && L.unshift(H);
    }
    for (let X of L) d.push(`url(#${X[0]})`), (h += X[1]), X[2] && (g += X[2]);
  }
  let [b, x] = await Un({ id: e, left: t, top: n, width: r, height: i }, a, l);
  h += x;
  let F = b
      ? `url(#${b})`
      : a._inheritedMaskId
      ? `url(#${a._inheritedMaskId})`
      : void 0,
    y = Ke({ left: t, top: n, width: r, height: i }, a);
  y && (c = "path");
  let k = a._inheritedClipPathId;
  s &&
    (v = C("rect", {
      x: t,
      y: n,
      width: r,
      height: i,
      fill: "transparent",
      stroke: "#ff5757",
      "stroke-width": 1,
      transform: p || void 0,
      "clip-path": k ? `url(#${k})` : void 0,
    }));
  let { backgroundClip: P, filter: B } = a,
    j =
      P === "text"
        ? `url(#satori_bct-${e})`
        : k
        ? `url(#${k})`
        : a.clipPath
        ? Iu(e)
        : void 0,
    ie = qn(
      {
        left: t,
        top: n,
        width: r,
        height: i,
        path: y,
        id: e,
        matrix: p,
        currentClipPath: j,
        src: u,
      },
      a,
      l,
    ),
    oe = d
      .map((L) =>
        C(c, {
          x: t,
          y: n,
          width: r,
          height: i,
          fill: L,
          d: y || void 0,
          transform: p || void 0,
          "clip-path": j,
          style: B ? `filter:${B}` : void 0,
          mask: F,
        }),
      )
      .join(""),
    ue = Tu(
      {
        id: e,
        left: t,
        top: n,
        width: r,
        height: i,
        currentClipPathId: k,
        borderPath: y,
        borderType: c,
      },
      a,
    );
  if (f) {
    let L = (a.borderLeftWidth || 0) + (a.paddingLeft || 0),
      X = (a.borderTopWidth || 0) + (a.paddingTop || 0),
      ce = (a.borderRightWidth || 0) + (a.paddingRight || 0),
      H = (a.borderBottomWidth || 0) + (a.paddingBottom || 0),
      Z =
        a.objectFit === "contain"
          ? "xMidYMid"
          : a.objectFit === "cover"
          ? "xMidYMid slice"
          : "none";
    oe += C("image", {
      x: t + L,
      y: n + X,
      width: r - L - ce,
      height: i - X - H,
      href: u,
      preserveAspectRatio: Z,
      transform: p || void 0,
      style: B ? `filter:${B}` : void 0,
      "clip-path": `url(#satori_cp-${e})`,
      mask: b ? `url(#${b})` : `url(#satori_om-${e})`,
    });
  }
  if (ue) {
    h += ue[0];
    let L = ue[1];
    oe += $t(
      {
        left: t,
        top: n,
        width: r,
        height: i,
        props: { transform: p || void 0, "clip-path": `url(#${L})` },
      },
      a,
    );
  }
  let N = Eu(
    {
      width: r,
      height: i,
      id: e,
      opacity: m,
      shape: C(c, {
        x: t,
        y: n,
        width: r,
        height: i,
        fill: "#fff",
        stroke: "#fff",
        "stroke-width": 0,
        d: y || void 0,
        transform: p || void 0,
        "clip-path": j,
        mask: F,
      }),
    },
    a,
  );
  return (
    (h ? C("defs", {}, h) : "") +
    (N ? N[0] : "") +
    ie +
    (m !== 1 ? `<g opacity="${m}">` : "") +
    (g || oe) +
    (m !== 1 ? "</g>" : "") +
    (N ? N[1] : "") +
    v
  );
}
var Lu = () =>
  /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var Wf = new RegExp(Lu(), ""),
  zn = { emoji: Wf, symbol: /\p{Symbol}/u, math: /\p{Math}/u },
  Gn = {
    "ja-JP": /\p{scx=Hira}|\p{scx=Kana}|\p{scx=Han}|[\u3000]|[\uFF00-\uFFEF]/u,
    "ko-KR": /\p{scx=Hangul}/u,
    "zh-CN": /\p{scx=Han}/u,
    "zh-TW": /\p{scx=Han}/u,
    "zh-HK": /\p{scx=Han}/u,
    "th-TH": /\p{scx=Thai}/u,
    "bn-IN": /\p{scx=Bengali}/u,
    "ar-AR": /\p{scx=Arabic}/u,
    "ta-IN": /\p{scx=Tamil}/u,
    "ml-IN": /\p{scx=Malayalam}/u,
    "he-IL": /\p{scx=Hebrew}/u,
    "te-IN": /\p{scx=Telugu}/u,
    devanagari: /\p{scx=Devanagari}/u,
    kannada: /\p{scx=Kannada}/u,
  },
  Vr = Object.keys({ ...Gn, ...zn });
function Mu(e) {
  return Vr.includes(e);
}
function Nu(e, t) {
  for (let r of Object.keys(zn)) if (zn[r].test(e)) return [r];
  let n = Object.keys(Gn).filter((r) => Gn[r].test(e));
  if (n.length === 0) return ["unknown"];
  if (t) {
    let r = n.findIndex((i) => i === t);
    r !== -1 && (n.splice(r, 1), n.unshift(t));
  }
  return n;
}
function $u(e) {
  if (e) return Vr.find((t) => t.toLowerCase().startsWith(e.toLowerCase()));
}
async function* Ut(e, t) {
  var M;
  let n = await qe(),
    {
      id: r,
      inheritedStyle: i,
      parent: o,
      font: u,
      debug: s,
      locale: a,
      embedFont: l = !0,
      graphemeImages: f,
      canLoadAdditionalAssets: c,
      getTwStyles: p,
    } = t;
  if (e === null || typeof e > "u") return yield, yield, "";
  if (!gt(e) || typeof e.type == "function") {
    let R;
    if (!gt(e)) (R = Ln(String(e), t)), yield (await R.next()).value;
    else {
      if (Jo(e.type)) throw new Error("Class component is not supported.");
      (R = Ut(e.type(e.props), t)), yield (await R.next()).value;
    }
    await R.next();
    let se = yield;
    return (await R.next(se)).value;
  }
  let { type: h, props: d } = e;
  if (d && Zo(d))
    throw new Error(
      "dangerouslySetInnerHTML property is not supported. See documentation for more information https://github.com/vercel/satori#jsx.",
    );
  let { style: m, children: v, tw: g, lang: b = a } = d || {},
    x = $u(b);
  if (g) {
    let R = p(g, m);
    m = Object.assign(R, m);
  }
  let F = n.Node.create();
  o.insertChild(F, o.getChildCount());
  let [y, k] = await On(F, h, i, m, d),
    P = y.transform === i.transform;
  if (
    (P || (y.transform.__parent = i.transform),
    (y.overflow === "hidden" || (y.clipPath && y.clipPath !== "none")) &&
      ((k._inheritedClipPathId = `satori_cp-${r}`),
      (k._inheritedMaskId = `satori_om-${r}`)),
    y.maskImage && (k._inheritedMaskId = `satori_mi-${r}`),
    y.backgroundClip === "text")
  ) {
    let R = { value: "" };
    (k._inheritedBackgroundClipTextPath = R),
      (y._inheritedBackgroundClipTextPath = R);
  }
  let B = eu(v),
    j = [],
    ie = 0,
    oe = [];
  for (let R of B) {
    let se = Ut(R, {
      id: r + "-" + ie++,
      parentStyle: y,
      inheritedStyle: k,
      isInheritingTransform: !0,
      parent: F,
      font: u,
      embedFont: l,
      debug: s,
      graphemeImages: f,
      canLoadAdditionalAssets: c,
      locale: x,
      getTwStyles: p,
      onNodeDetected: t.onNodeDetected,
    });
    c ? oe.push(...((await se.next()).value || [])) : await se.next(),
      j.push(se);
  }
  yield oe;
  for (let R of j) await R.next();
  let [ue, N] = yield,
    { left: L, top: X, width: ce, height: H } = F.getComputedLayout();
  (L += ue), (X += N);
  let Z = "",
    ae = "",
    me = "",
    { children: A, ...O } = d;
  if (
    ((M = t.onNodeDetected) == null ||
      M.call(t, {
        left: L,
        top: X,
        width: ce,
        height: H,
        type: h,
        props: O,
        key: e.key,
        textContent: gt(A) ? void 0 : A,
      }),
    h === "img")
  ) {
    let R = y.__src;
    ae = await qt(
      {
        id: r,
        left: L,
        top: X,
        width: ce,
        height: H,
        src: R,
        isInheritingTransform: P,
        debug: s,
      },
      y,
      k,
    );
  } else if (h === "svg") {
    let R = y.color,
      se = await pu(e, R);
    ae = await qt(
      {
        id: r,
        left: L,
        top: X,
        width: ce,
        height: H,
        src: se,
        isInheritingTransform: P,
        debug: s,
      },
      y,
      k,
    );
  } else {
    let R = m == null ? void 0 : m.display;
    if (
      h === "div" &&
      v &&
      typeof v != "string" &&
      R !== "flex" &&
      R !== "none"
    )
      throw new Error(
        'Expected <div> to have explicit "display: flex" or "display: none" if it has more than one child node.',
      );
    ae = await qt(
      {
        id: r,
        left: L,
        top: X,
        width: ce,
        height: H,
        isInheritingTransform: P,
        debug: s,
      },
      y,
      k,
    );
  }
  for (let R of j) Z += (await R.next([L, X])).value;
  return (
    y._inheritedBackgroundClipTextPath &&
      (me += C(
        "clipPath",
        {
          id: `satori_bct-${r}`,
          "clip-path": y._inheritedClipPathId
            ? `url(#${y._inheritedClipPathId})`
            : void 0,
        },
        y._inheritedBackgroundClipTextPath.value,
      )),
    me + ae + Z
  );
}
import jn from "@shuding/opentype.js";
var Wu = "unknown";
function qf(e, t, [n, r], [i, o]) {
  if (n !== i)
    return n
      ? !i || n === e
        ? -1
        : i === e
        ? 1
        : (e === 400 && n === 500) || (e === 500 && n === 400)
        ? -1
        : (e === 400 && i === 500) || (e === 500 && i === 400)
        ? 1
        : e < 400
        ? n < e && i < e
          ? i - n
          : n < e
          ? -1
          : i < e
          ? 1
          : n - i
        : e < n && e < i
        ? n - i
        : e < n
        ? -1
        : e < i
        ? 1
        : i - n
      : 1;
  if (r !== o) {
    if (r === t) return -1;
    if (o === t) return 1;
  }
  return -1;
}
var zt = class {
  constructor(t) {
    this.fonts = new Map();
    this.addFonts(t);
  }
  get({ name: t, weight: n, style: r }) {
    if (!this.fonts.has(t)) return null;
    n === "normal" && (n = 400),
      n === "bold" && (n = 700),
      typeof n == "string" && (n = Number.parseInt(n, 10));
    let i = [...this.fonts.get(t)],
      o = i[0];
    for (let u = 1; u < i.length; u++) {
      let [, s, a] = o,
        [, l, f] = i[u];
      qf(n, r, [s, a], [l, f]) > 0 && (o = i[u]);
    }
    return o[0];
  }
  addFonts(t) {
    for (let n of t) {
      let { name: r, data: i, lang: o } = n;
      if (o && !Mu(o))
        throw new Error(
          `Invalid value for props \`lang\`: "${o}". The value must be one of the following: ${Vr.join(
            ", ",
          )}.`,
        );
      let u = o ?? Wu,
        s = jn.parse(
          "buffer" in i
            ? i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)
            : i,
          { lowMemory: !0 },
        ),
        a = s.charToGlyphIndex;
      (s.charToGlyphIndex = (f) => {
        let c = a.call(s, f);
        return c === 0 && s._trackBrokenChars && s._trackBrokenChars.push(f), c;
      }),
        this.defaultFont || (this.defaultFont = s);
      let l = `${r.toLowerCase()}_${u}`;
      this.fonts.has(l) || this.fonts.set(l, []),
        this.fonts.get(l).push([s, n.weight, n.style]);
    }
  }
  getEngine(
    t = 16,
    n = 1.2,
    {
      fontFamily: r = "sans-serif",
      fontWeight: i = 400,
      fontStyle: o = "normal",
    },
    u,
  ) {
    if (!this.fonts.size)
      throw new Error(
        "No fonts are loaded. At least one font is required to calculate the layout.",
      );
    r = (Array.isArray(r) ? r : [r]).map((b) => b.toLowerCase());
    let s = [];
    r.forEach((b) => {
      let x = this.get({ name: b, weight: i, style: o });
      if (x) {
        s.push(x);
        return;
      }
      let F = this.get({ name: b + "_unknown", weight: i, style: o });
      if (F) {
        s.push(F);
        return;
      }
    });
    let a = Array.from(this.fonts.keys()),
      l = [],
      f = [],
      c = [];
    for (let b of a)
      if (!r.includes(b))
        if (u) {
          let x = Uf(b);
          x
            ? x === u
              ? l.push(this.get({ name: b, weight: i, style: o }))
              : f.push(this.get({ name: b, weight: i, style: o }))
            : c.push(this.get({ name: b, weight: i, style: o }));
        } else c.push(this.get({ name: b, weight: i, style: o }));
    let p = new Map(),
      h = (b, x = !0) => {
        let F = [...s, ...c, ...l, ...(x ? f : [])];
        if (typeof b > "u") return x ? F[F.length - 1] : void 0;
        let y = b.charCodeAt(0);
        if (p.has(y)) return p.get(y);
        let k = F.find(
          (P, B) => !!P.charToGlyphIndex(b) || (x && B === F.length - 1),
        );
        return k && p.set(y, k), k;
      },
      d = (b, x = !1) => {
        var y, k;
        return (
          (((x
            ? (k = (y = b.tables) == null ? void 0 : y.os2) == null
              ? void 0
              : k.sTypoAscender
            : 0) || b.ascender) /
            b.unitsPerEm) *
          t
        );
      },
      m = (b, x = !1) => {
        var y, k;
        return (
          (((x
            ? (k = (y = b.tables) == null ? void 0 : y.os2) == null
              ? void 0
              : k.sTypoDescender
            : 0) || b.descender) /
            b.unitsPerEm) *
          t
        );
      },
      v = (b) => h(b, !1),
      g = {
        has: (b) => {
          if (
            b ===
            `
`
          )
            return !0;
          let x = v(b);
          return x
            ? ((x._trackBrokenChars = []),
              x.stringToGlyphs(b),
              x._trackBrokenChars.length
                ? ((x._trackBrokenChars = void 0), !1)
                : !0)
            : !1;
        },
        baseline: (b, x = typeof b > "u" ? s[0] : h(b)) => {
          let F = d(x, !0),
            y = m(x, !0),
            k = g.height(b, x),
            { yMax: P, yMin: B } = x.tables.head,
            j = F - y,
            ie = (P / (P - B) - 1) * j;
          return k * ((1.2 / n + 1) / 2) + ie;
        },
        height: (b, x = typeof b > "u" ? s[0] : h(b)) =>
          (d(x) - m(x)) * (n / 1.2),
        measure: (b, x) => this.measure(h, b, x),
        getSVG: (b, x) => this.getSVG(h, b, x),
      };
    return g;
  }
  patchFontFallbackResolver(t, n) {
    let r = [];
    t._trackBrokenChars = r;
    let i = t.stringToGlyphs;
    return (
      (t.stringToGlyphs = (o, ...u) => {
        let s = i.call(t, o, ...u);
        for (let a = 0; a < s.length; a++)
          if (s[a].unicode === void 0) {
            let l = r.shift(),
              f = n(l);
            if (f !== t) {
              let c = f.charToGlyph(l),
                p = t.unitsPerEm / f.unitsPerEm,
                h = new jn.Path();
              (h.unitsPerEm = t.unitsPerEm),
                (h.commands = c.path.commands.map((m) => {
                  let v = { ...m };
                  for (let g in v) typeof v[g] == "number" && (v[g] *= p);
                  return v;
                }));
              let d = new jn.Glyph({
                ...c,
                advanceWidth: c.advanceWidth * p,
                xMin: c.xMin * p,
                xMax: c.xMax * p,
                yMin: c.yMin * p,
                yMax: c.yMax * p,
                path: h,
              });
              s[a] = d;
            }
          }
        return s;
      }),
      () => {
        (t.stringToGlyphs = i), (t._trackBrokenChars = void 0);
      }
    );
  }
  measure(t, n, { fontSize: r, letterSpacing: i = 0 }) {
    let o = t(n),
      u = this.patchFontFallbackResolver(o, t);
    try {
      return o.getAdvanceWidth(n, r, { letterSpacing: i / r });
    } finally {
      u();
    }
  }
  getSVG(t, n, { fontSize: r, top: i, left: o, letterSpacing: u = 0 }) {
    let s = t(n),
      a = this.patchFontFallbackResolver(s, t);
    try {
      return r === 0
        ? ""
        : s
            .getPath(n.replace(/\n/g, ""), o, i, r, { letterSpacing: u / r })
            .toPathData(1);
    } finally {
      a();
    }
  }
};
function Uf(e) {
  let t = e.split("_"),
    n = t[t.length - 1];
  return n === Wu ? void 0 : n;
}
function Hn({ width: e, height: t, content: n }) {
  return C(
    "svg",
    {
      width: e,
      height: t,
      viewBox: `0 0 ${e} ${t}`,
      xmlns: "http://www.w3.org/2000/svg",
    },
    n,
  );
}
var vl = Ol(Qa());
var km = ["ios", "android", "windows", "macos", "web"];
function Ja(e) {
  return km.includes(e);
}
var Tm = ["portrait", "landscape"];
function Za(e) {
  return Tm.includes(e);
}
var Ka;
(function (e) {
  (e.fontSize = "fontSize"), (e.lineHeight = "lineHeight");
})(Ka || (Ka = {}));
var z;
(function (e) {
  (e.rem = "rem"),
    (e.em = "em"),
    (e.px = "px"),
    (e.percent = "%"),
    (e.vw = "vw"),
    (e.vh = "vh"),
    (e.none = "<no-css-unit>");
})(z || (z = {}));
function vo(e) {
  return typeof e == "string";
}
function yo(e) {
  return typeof e == "object";
}
var xo;
function D(e) {
  return { kind: "complete", style: e };
}
function fe(e, t = {}) {
  let { fractions: n } = t;
  if (n && e.includes("/")) {
    let [o = "", u = ""] = e.split("/", 2),
      s = fe(o),
      a = fe(u);
    return !s || !a ? null : [s[0] / a[0], a[1]];
  }
  let r = parseFloat(e);
  if (Number.isNaN(r)) return null;
  let i = e.match(/(([a-z]{2,}|%))$/);
  if (!i) return [r, z.none];
  switch (i == null ? void 0 : i[1]) {
    case "rem":
      return [r, z.rem];
    case "px":
      return [r, z.px];
    case "em":
      return [r, z.em];
    case "%":
      return [r, z.percent];
    case "vw":
      return [r, z.vw];
    case "vh":
      return [r, z.vh];
    default:
      return null;
  }
}
function Ge(e, t, n = {}) {
  let r = Ne(t, n);
  return r === null ? null : D({ [e]: r });
}
function dn(e, t, n) {
  let r = Ne(t);
  return r !== null && (n[e] = r), n;
}
function tl(e, t) {
  let n = Ne(t);
  return n === null ? null : { [e]: n };
}
function Ne(e, t = {}) {
  if (e === void 0) return null;
  let n = fe(String(e), t);
  return n ? tt(...n, t) : null;
}
function tt(e, t, n = {}) {
  let { isNegative: r, device: i } = n;
  switch (t) {
    case z.rem:
      return e * 16 * (r ? -1 : 1);
    case z.px:
      return e * (r ? -1 : 1);
    case z.percent:
      return `${r ? "-" : ""}${e}%`;
    case z.none:
      return e * (r ? -1 : 1);
    case z.vw:
      return i != null && i.windowDimensions
        ? i.windowDimensions.width * (e / 100)
        : (Fe("`vw` CSS unit requires configuration with `useDeviceContext()`"),
          null);
    case z.vh:
      return i != null && i.windowDimensions
        ? i.windowDimensions.height * (e / 100)
        : (Fe("`vh` CSS unit requires configuration with `useDeviceContext()`"),
          null);
    default:
      return null;
  }
}
function Fo(e) {
  let t = fe(e);
  if (!t) return null;
  let [n, r] = t;
  switch (r) {
    case z.rem:
      return n * 16;
    case z.px:
      return n;
    default:
      return null;
  }
}
var Am = {
  t: "Top",
  tr: "TopRight",
  tl: "TopLeft",
  b: "Bottom",
  br: "BottomRight",
  bl: "BottomLeft",
  l: "Left",
  r: "Right",
  x: "Horizontal",
  y: "Vertical",
};
function wo(e) {
  return Am[e ?? ""] || "All";
}
function Eo(e) {
  let t = "All";
  return [
    e.replace(/^-(t|b|r|l|tr|tl|br|bl)(-|$)/, (r, i) => ((t = wo(i)), "")),
    t,
  ];
}
function lt(e, t = {}) {
  if (e.includes("/")) {
    let n = el(e, { ...t, fractions: !0 });
    if (n) return n;
  }
  return e[0] === "[" && (e = e.slice(1, -1)), el(e, t);
}
function Ae(e, t, n = {}) {
  let r = lt(t, n);
  return r === null ? null : D({ [e]: r });
}
function el(e, t = {}) {
  if (e === "px") return 1;
  let n = fe(e, t);
  if (!n) return null;
  let [r, i] = n;
  return (
    t.fractions && ((i = z.percent), (r *= 100)),
    i === z.none && ((r = r / 4), (i = z.rem)),
    tt(r, i, t)
  );
}
function Om(...e) {
  console.warn(...e);
}
function Pm(...e) {}
var Fe =
  typeof process > "u" ||
  ((xo = process == null ? void 0 : process.env) === null || xo === void 0
    ? void 0
    : xo.JEST_WORKER_ID) === void 0
    ? Om
    : Pm;
var Bm = [
    ["aspect-square", D({ aspectRatio: 1 })],
    ["aspect-video", D({ aspectRatio: 16 / 9 })],
    ["items-center", D({ alignItems: "center" })],
    ["items-start", D({ alignItems: "flex-start" })],
    ["items-end", D({ alignItems: "flex-end" })],
    ["items-baseline", D({ alignItems: "baseline" })],
    ["items-stretch", D({ alignItems: "stretch" })],
    ["justify-start", D({ justifyContent: "flex-start" })],
    ["justify-end", D({ justifyContent: "flex-end" })],
    ["justify-center", D({ justifyContent: "center" })],
    ["justify-between", D({ justifyContent: "space-between" })],
    ["justify-around", D({ justifyContent: "space-around" })],
    ["justify-evenly", D({ justifyContent: "space-evenly" })],
    ["content-start", D({ alignContent: "flex-start" })],
    ["content-end", D({ alignContent: "flex-end" })],
    ["content-between", D({ alignContent: "space-between" })],
    ["content-around", D({ alignContent: "space-around" })],
    ["content-stretch", D({ alignContent: "stretch" })],
    ["content-center", D({ alignContent: "center" })],
    ["self-auto", D({ alignSelf: "auto" })],
    ["self-start", D({ alignSelf: "flex-start" })],
    ["self-end", D({ alignSelf: "flex-end" })],
    ["self-center", D({ alignSelf: "center" })],
    ["self-stretch", D({ alignSelf: "stretch" })],
    ["self-baseline", D({ alignSelf: "baseline" })],
    ["direction-inherit", D({ direction: "inherit" })],
    ["direction-ltr", D({ direction: "ltr" })],
    ["direction-rtl", D({ direction: "rtl" })],
    ["hidden", D({ display: "none" })],
    ["flex", D({ display: "flex" })],
    ["flex-row", D({ flexDirection: "row" })],
    ["flex-row-reverse", D({ flexDirection: "row-reverse" })],
    ["flex-col", D({ flexDirection: "column" })],
    ["flex-col-reverse", D({ flexDirection: "column-reverse" })],
    ["flex-wrap", D({ flexWrap: "wrap" })],
    ["flex-wrap-reverse", D({ flexWrap: "wrap-reverse" })],
    ["flex-nowrap", D({ flexWrap: "nowrap" })],
    ["flex-auto", D({ flexGrow: 1, flexShrink: 1, flexBasis: "auto" })],
    ["flex-initial", D({ flexGrow: 0, flexShrink: 1, flexBasis: "auto" })],
    ["flex-none", D({ flexGrow: 0, flexShrink: 0, flexBasis: "auto" })],
    ["overflow-hidden", D({ overflow: "hidden" })],
    ["overflow-visible", D({ overflow: "visible" })],
    ["overflow-scroll", D({ overflow: "scroll" })],
    ["absolute", D({ position: "absolute" })],
    ["relative", D({ position: "relative" })],
    ["italic", D({ fontStyle: "italic" })],
    ["not-italic", D({ fontStyle: "normal" })],
    ["oldstyle-nums", yr("oldstyle-nums")],
    ["small-caps", yr("small-caps")],
    ["lining-nums", yr("lining-nums")],
    ["tabular-nums", yr("tabular-nums")],
    ["proportional-nums", yr("proportional-nums")],
    ["font-thin", D({ fontWeight: "100" })],
    ["font-100", D({ fontWeight: "100" })],
    ["font-extralight", D({ fontWeight: "200" })],
    ["font-200", D({ fontWeight: "200" })],
    ["font-light", D({ fontWeight: "300" })],
    ["font-300", D({ fontWeight: "300" })],
    ["font-normal", D({ fontWeight: "normal" })],
    ["font-400", D({ fontWeight: "400" })],
    ["font-medium", D({ fontWeight: "500" })],
    ["font-500", D({ fontWeight: "500" })],
    ["font-semibold", D({ fontWeight: "600" })],
    ["font-600", D({ fontWeight: "600" })],
    ["font-bold", D({ fontWeight: "bold" })],
    ["font-700", D({ fontWeight: "700" })],
    ["font-extrabold", D({ fontWeight: "800" })],
    ["font-800", D({ fontWeight: "800" })],
    ["font-black", D({ fontWeight: "900" })],
    ["font-900", D({ fontWeight: "900" })],
    ["include-font-padding", D({ includeFontPadding: !0 })],
    ["remove-font-padding", D({ includeFontPadding: !1 })],
    ["max-w-none", D({ maxWidth: "99999%" })],
    ["text-left", D({ textAlign: "left" })],
    ["text-center", D({ textAlign: "center" })],
    ["text-right", D({ textAlign: "right" })],
    ["text-justify", D({ textAlign: "justify" })],
    ["text-auto", D({ textAlign: "auto" })],
    ["underline", D({ textDecorationLine: "underline" })],
    ["line-through", D({ textDecorationLine: "line-through" })],
    ["no-underline", D({ textDecorationLine: "none" })],
    ["uppercase", D({ textTransform: "uppercase" })],
    ["lowercase", D({ textTransform: "lowercase" })],
    ["capitalize", D({ textTransform: "capitalize" })],
    ["normal-case", D({ textTransform: "none" })],
    ["w-auto", D({ width: "auto" })],
    ["h-auto", D({ height: "auto" })],
    [
      "shadow-sm",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowRadius: 1,
        shadowOpacity: 0.025,
        elevation: 1,
      }),
    ],
    [
      "shadow",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowRadius: 1,
        shadowOpacity: 0.075,
        elevation: 2,
      }),
    ],
    [
      "shadow-md",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowRadius: 3,
        shadowOpacity: 0.125,
        elevation: 3,
      }),
    ],
    [
      "shadow-lg",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
      }),
    ],
    [
      "shadow-xl",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowOpacity: 0.19,
        shadowRadius: 20,
        elevation: 12,
      }),
    ],
    [
      "shadow-2xl",
      D({
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 30,
        elevation: 16,
      }),
    ],
    [
      "shadow-none",
      D({
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "#000",
        shadowRadius: 0,
        shadowOpacity: 0,
        elevation: 0,
      }),
    ],
  ],
  Co = Bm;
function yr(e) {
  return {
    kind: "dependent",
    complete(t) {
      (!t.fontVariant || !Array.isArray(t.fontVariant)) && (t.fontVariant = []),
        t.fontVariant.push(e);
    },
  };
}
var xr = class {
  constructor(t) {
    (this.ir = new Map(Co)),
      (this.styles = new Map()),
      (this.prefixes = new Map()),
      (this.ir = new Map([...Co, ...(t ?? [])]));
  }
  getStyle(t) {
    return this.styles.get(t);
  }
  setStyle(t, n) {
    this.styles.set(t, n);
  }
  getIr(t) {
    return this.ir.get(t);
  }
  setIr(t, n) {
    this.ir.set(t, n);
  }
  getPrefixMatch(t) {
    return this.prefixes.get(t);
  }
  setPrefixMatch(t, n) {
    this.prefixes.set(t, n);
  }
};
function _o(e, t, n = {}) {
  let r = t == null ? void 0 : t[e];
  if (!r) return Ae("fontSize", e, n);
  if (typeof r == "string") return Ge("fontSize", r);
  let i = {},
    [o, u] = r,
    s = tl("fontSize", o);
  if ((s && (i = s), typeof u == "string"))
    return D(dn("lineHeight", rl(u, i), i));
  let { lineHeight: a, letterSpacing: l } = u;
  return (
    a && dn("lineHeight", rl(a, i), i), l && dn("letterSpacing", l, i), D(i)
  );
}
function rl(e, t) {
  let n = fe(e);
  if (n) {
    let [r, i] = n;
    if ((i === z.none || i === z.em) && typeof t.fontSize == "number")
      return t.fontSize * r;
  }
  return e;
}
function So(e, t) {
  var n;
  let r =
      (n = t == null ? void 0 : t[e]) !== null && n !== void 0
        ? n
        : e.startsWith("[")
        ? e.slice(1, -1)
        : e,
    i = fe(r);
  if (!i) return null;
  let [o, u] = i;
  if (u === z.none)
    return {
      kind: "dependent",
      complete(a) {
        if (typeof a.fontSize != "number")
          return "relative line-height utilities require that font-size be set";
        a.lineHeight = a.fontSize * o;
      },
    };
  let s = tt(o, u);
  return s !== null ? D({ lineHeight: s }) : null;
}
function ko(e, t, n, r, i) {
  let o = "";
  if (r[0] === "[") o = r.slice(1, -1);
  else {
    let l = i == null ? void 0 : i[r];
    if (l) o = l;
    else {
      let f = lt(r);
      return f && typeof f == "number" ? nl(f, z.px, t, e) : null;
    }
  }
  if (o === "auto") return il(t, e, "auto");
  let u = fe(o);
  if (!u) return null;
  let [s, a] = u;
  return n && (s = -s), nl(s, a, t, e);
}
function nl(e, t, n, r) {
  let i = tt(e, t);
  return i === null ? null : il(n, r, i);
}
function il(e, t, n) {
  switch (e) {
    case "All":
      return {
        kind: "complete",
        style: {
          [`${t}Top`]: n,
          [`${t}Right`]: n,
          [`${t}Bottom`]: n,
          [`${t}Left`]: n,
        },
      };
    case "Bottom":
    case "Top":
    case "Left":
    case "Right":
      return { kind: "complete", style: { [`${t}${e}`]: n } };
    case "Vertical":
      return { kind: "complete", style: { [`${t}Top`]: n, [`${t}Bottom`]: n } };
    case "Horizontal":
      return { kind: "complete", style: { [`${t}Left`]: n, [`${t}Right`]: n } };
    default:
      return null;
  }
}
function To(e) {
  if (!e) return {};
  let t = Object.entries(e).reduce((i, [o, u]) => {
      let s = [0, 1 / 0, 0],
        a = typeof u == "string" ? { min: u } : u,
        l = a.min ? Fo(a.min) : 0;
      l === null
        ? Fe(`invalid screen config value: ${o}->min: ${a.min}`)
        : (s[0] = l);
      let f = a.max ? Fo(a.max) : 1 / 0;
      return (
        f === null
          ? Fe(`invalid screen config value: ${o}->max: ${a.max}`)
          : (s[1] = f),
        (i[o] = s),
        i
      );
    }, {}),
    n = Object.values(t);
  n.sort((i, o) => {
    let [u, s] = i,
      [a, l] = o;
    return s === 1 / 0 || l === 1 / 0 ? u - a : s - l;
  });
  let r = 0;
  return n.forEach((i) => (i[2] = r++)), t;
}
function Ao(e, t) {
  let n = t == null ? void 0 : t[e];
  if (!n) return null;
  if (typeof n == "string") return D({ fontFamily: n });
  let r = n[0];
  return r ? D({ fontFamily: r }) : null;
}
function ft(e, t, n) {
  if (!n) return null;
  let r;
  t.includes("/") && ([t = "", r] = t.split("/", 2));
  let i = "";
  if (
    (t.startsWith("[#") || t.startsWith("[rgb")
      ? (i = t.slice(1, -1))
      : (i = sl(t, n)),
    !i)
  )
    return null;
  if (r) {
    let o = Number(r);
    if (!Number.isNaN(o)) return (i = ol(i, o / 100)), D({ [pn[e].color]: i });
  }
  return {
    kind: "dependent",
    complete(o) {
      let u = pn[e].opacity,
        s = o[u];
      typeof s == "number" && (i = ol(i, s)), (o[pn[e].color] = i);
    },
  };
}
function Fr(e, t) {
  let n = parseInt(t, 10);
  if (Number.isNaN(n)) return null;
  let r = n / 100;
  return { kind: "complete", style: { [pn[e].opacity]: r } };
}
function ol(e, t) {
  return (
    e.startsWith("#")
      ? (e = Im(e))
      : e.startsWith("rgb(") &&
        (e = e.replace(/^rgb\(/, "rgba(").replace(/\)$/, ", 1)")),
    e.replace(/, ?\d*\.?(\d+)\)$/, `, ${t})`)
  );
}
function ul(e) {
  for (let t in e) t.startsWith("__opacity_") && delete e[t];
}
var pn = {
  bg: { opacity: "__opacity_bg", color: "backgroundColor" },
  text: { opacity: "__opacity_text", color: "color" },
  border: { opacity: "__opacity_border", color: "borderColor" },
  borderTop: { opacity: "__opacity_border", color: "borderTopColor" },
  borderBottom: { opacity: "__opacity_border", color: "borderBottomColor" },
  borderLeft: { opacity: "__opacity_border", color: "borderLeftColor" },
  borderRight: { opacity: "__opacity_border", color: "borderRightColor" },
  shadow: { opacity: "__opacity_shadow", color: "shadowColor" },
  tint: { opacity: "__opacity_tint", color: "tintColor" },
};
function Im(e) {
  let t = e;
  e = e.replace(Rm, (u, s, a, l) => s + s + a + a + l + l);
  let n = Lm.exec(e);
  if (!n) return Fe(`invalid config hex color value: ${t}`), "rgba(0, 0, 0, 1)";
  let r = parseInt(n[1], 16),
    i = parseInt(n[2], 16),
    o = parseInt(n[3], 16);
  return `rgba(${r}, ${i}, ${o}, 1)`;
}
function sl(e, t) {
  let n = t[e];
  if (vo(n)) return n;
  if (yo(n) && vo(n.DEFAULT)) return n.DEFAULT;
  let [r = "", ...i] = e.split("-");
  for (; r !== e; ) {
    let o = t[r];
    if (yo(o)) return sl(i.join("-"), o);
    if (i.length === 0) return "";
    r = `${r}-${i.shift()}`;
  }
  return "";
}
var Rm = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
  Lm = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function ll(e, t) {
  let [n, r] = Eo(e);
  if (n.match(/^(-?(\d)+)?$/))
    return Mm(n, r, t == null ? void 0 : t.borderWidth);
  if (((n = n.replace(/^-/, "")), ["dashed", "solid", "dotted"].includes(n)))
    return D({ borderStyle: n });
  let o = "border";
  switch (r) {
    case "Bottom":
      o = "borderBottom";
      break;
    case "Top":
      o = "borderTop";
      break;
    case "Left":
      o = "borderLeft";
      break;
    case "Right":
      o = "borderRight";
      break;
  }
  let u = ft(o, n, t == null ? void 0 : t.borderColor);
  if (u) return u;
  let s = `border${r === "All" ? "" : r}Width`;
  n = n.replace(/^-/, "");
  let a = n.slice(1, -1),
    l = Ae(s, a);
  return typeof (l == null ? void 0 : l.style[s]) != "number" ? null : l;
}
function Mm(e, t, n) {
  if (!n) return null;
  e = e.replace(/^-/, "");
  let i = n[e === "" ? "DEFAULT" : e];
  if (i === void 0) return null;
  let o = `border${t === "All" ? "" : t}Width`;
  return Ge(o, i);
}
function fl(e, t) {
  if (!t) return null;
  let [n, r] = Eo(e);
  (n = n.replace(/^-/, "")), n === "" && (n = "DEFAULT");
  let i = `border${r === "All" ? "" : r}Radius`,
    o = t[n];
  if (o) return al(Ge(i, o));
  let u = Ae(i, n);
  return typeof (u == null ? void 0 : u.style[i]) != "number" ? null : al(u);
}
function al(e) {
  if ((e == null ? void 0 : e.kind) !== "complete") return e;
  let t = e.style.borderTopRadius;
  t !== void 0 &&
    ((e.style.borderTopLeftRadius = t),
    (e.style.borderTopRightRadius = t),
    delete e.style.borderTopRadius);
  let n = e.style.borderBottomRadius;
  n !== void 0 &&
    ((e.style.borderBottomLeftRadius = n),
    (e.style.borderBottomRightRadius = n),
    delete e.style.borderBottomRadius);
  let r = e.style.borderLeftRadius;
  r !== void 0 &&
    ((e.style.borderBottomLeftRadius = r),
    (e.style.borderTopLeftRadius = r),
    delete e.style.borderLeftRadius);
  let i = e.style.borderRightRadius;
  return (
    i !== void 0 &&
      ((e.style.borderBottomRightRadius = i),
      (e.style.borderTopRightRadius = i),
      delete e.style.borderRightRadius),
    e
  );
}
function Et(e, t, n, r) {
  let i = null;
  e === "inset" &&
    (t = t.replace(/^(x|y)-/, (s, a) => ((i = a === "x" ? "x" : "y"), "")));
  let o = r == null ? void 0 : r[t];
  if (o) {
    let s = Ne(o, { isNegative: n });
    if (s !== null) return cl(e, i, s);
  }
  let u = lt(t, { isNegative: n });
  return u !== null ? cl(e, i, u) : null;
}
function cl(e, t, n) {
  if (e !== "inset") return D({ [e]: n });
  switch (t) {
    case null:
      return D({ top: n, left: n, right: n, bottom: n });
    case "y":
      return D({ top: n, bottom: n });
    case "x":
      return D({ left: n, right: n });
  }
}
function wr(e, t, n) {
  var r;
  t = t.replace(/^-/, "");
  let i = t === "" ? "DEFAULT" : t,
    o = Number(
      (r = n == null ? void 0 : n[i]) !== null && r !== void 0 ? r : t,
    );
  return Number.isNaN(o) ? null : D({ [`flex${e}`]: o });
}
function dl(e, t) {
  var n, r;
  if (
    ((e = (t == null ? void 0 : t[e]) || e),
    ["min-content", "revert", "unset"].includes(e))
  )
    return null;
  if (e.match(/^\d+(\.\d+)?$/))
    return D({ flexGrow: Number(e), flexBasis: "0%" });
  let i = e.match(/^(\d+)\s+(\d+)$/);
  if (i) return D({ flexGrow: Number(i[1]), flexShrink: Number(i[2]) });
  if (((i = e.match(/^(\d+)\s+([^ ]+)$/)), i)) {
    let o = Ne((n = i[2]) !== null && n !== void 0 ? n : "");
    return o ? D({ flexGrow: Number(i[1]), flexBasis: o }) : null;
  }
  if (((i = e.match(/^(\d+)\s+(\d+)\s+(.+)$/)), i)) {
    let o = Ne((r = i[3]) !== null && r !== void 0 ? r : "");
    return o
      ? D({ flexGrow: Number(i[1]), flexShrink: Number(i[2]), flexBasis: o })
      : null;
  }
  return null;
}
function Oo(e, t, n = {}, r) {
  let i = r == null ? void 0 : r[t];
  return i !== void 0 ? Ge(e, i, n) : Ae(e, t, n);
}
function Er(e, t, n = {}, r) {
  let i = Ne(r == null ? void 0 : r[t], n);
  return i
    ? D({ [e]: i })
    : (t === "screen" && (t = e.includes("Width") ? "100vw" : "100vh"),
      Ae(e, t, n));
}
function pl(e, t, n) {
  let r = n == null ? void 0 : n[e];
  if (r) {
    let i = fe(r, { isNegative: t });
    if (!i) return null;
    let [o, u] = i;
    if (u === z.em) return Nm(o);
    if (u === z.percent)
      return (
        Fe(
          "percentage-based letter-spacing configuration currently unsupported, switch to `em`s, or open an issue if you'd like to see support added.",
        ),
        null
      );
    let s = tt(o, u, { isNegative: t });
    return s !== null ? D({ letterSpacing: s }) : null;
  }
  return Ae("letterSpacing", e, { isNegative: t });
}
function Nm(e) {
  return {
    kind: "dependent",
    complete(t) {
      let n = t.fontSize;
      if (typeof n != "number" || Number.isNaN(n))
        return "tracking-X relative letter spacing classes require font-size to be set";
      t.letterSpacing = Math.round((e * n + Number.EPSILON) * 100) / 100;
    },
  };
}
function hl(e, t) {
  let n = t == null ? void 0 : t[e];
  if (n) {
    let i = fe(String(n));
    if (i) return D({ opacity: i[0] });
  }
  let r = fe(e);
  return r ? D({ opacity: r[0] / 100 }) : null;
}
function ml(e) {
  let t = parseInt(e, 10);
  return Number.isNaN(t)
    ? null
    : { kind: "complete", style: { shadowOpacity: t / 100 } };
}
function Dl(e) {
  if (e.includes("/")) {
    let [n = "", r = ""] = e.split("/", 2),
      i = Po(n),
      o = Po(r);
    return i === null || o === null
      ? null
      : { kind: "complete", style: { shadowOffset: { width: i, height: o } } };
  }
  let t = Po(e);
  return t === null
    ? null
    : { kind: "complete", style: { shadowOffset: { width: t, height: t } } };
}
function Po(e) {
  let t = lt(e);
  return typeof t == "number" ? t : null;
}
var Ct = class {
  constructor(t, n = {}, r, i, o) {
    var u, s, a, l, f, c;
    (this.config = n),
      (this.cache = r),
      (this.position = 0),
      (this.isNull = !1),
      (this.isNegative = !1),
      (this.context = {}),
      (this.context.device = i);
    let p = t.trim().split(":"),
      h = [];
    p.length === 1
      ? (this.string = t)
      : ((this.string = (u = p.pop()) !== null && u !== void 0 ? u : ""),
        (h = p)),
      (this.char = this.string[0]);
    let d = To(
      (s = this.config.theme) === null || s === void 0 ? void 0 : s.screens,
    );
    for (let m of h)
      if (d[m]) {
        let v = (a = d[m]) === null || a === void 0 ? void 0 : a[2];
        v !== void 0 &&
          (this.order =
            ((l = this.order) !== null && l !== void 0 ? l : 0) + v);
        let g =
          (f = i.windowDimensions) === null || f === void 0 ? void 0 : f.width;
        if (g) {
          let [b, x] = (c = d[m]) !== null && c !== void 0 ? c : [0, 0];
          (g <= b || g > x) && (this.isNull = !0);
        } else this.isNull = !0;
      } else
        Ja(m)
          ? (this.isNull = m !== o)
          : Za(m)
          ? i.windowDimensions
            ? (i.windowDimensions.width > i.windowDimensions.height
                ? "landscape"
                : "portrait") !== m
              ? (this.isNull = !0)
              : this.incrementOrder()
            : (this.isNull = !0)
          : m === "retina"
          ? i.pixelDensity === 2
            ? this.incrementOrder()
            : (this.isNull = !0)
          : m === "dark"
          ? i.colorScheme !== "dark"
            ? (this.isNull = !0)
            : this.incrementOrder()
          : this.handlePossibleArbitraryBreakpointPrefix(m) ||
            (this.isNull = !0);
  }
  parse() {
    if (this.isNull) return { kind: "null" };
    let t = this.cache.getIr(this.rest);
    if (t) return t;
    this.parseIsNegative();
    let n = this.parseUtility();
    return n
      ? this.order !== void 0
        ? { kind: "ordered", order: this.order, styleIr: n }
        : n
      : { kind: "null" };
  }
  parseUtility() {
    var t, n, r, i, o;
    let u = this.config.theme,
      s = null;
    switch (this.char) {
      case "m":
      case "p": {
        let a = this.peekSlice(1, 3).match(/^(t|b|r|l|x|y)?-/);
        if (a) {
          let l = this.char === "m" ? "margin" : "padding";
          this.advance(
            ((n = (t = a[0]) === null || t === void 0 ? void 0 : t.length) !==
              null && n !== void 0
              ? n
              : 0) + 1,
          );
          let f = wo(a[1]),
            c = ko(
              l,
              f,
              this.isNegative,
              this.rest,
              (r = this.config.theme) === null || r === void 0 ? void 0 : r[l],
            );
          if (c) return c;
        }
      }
    }
    if (
      (this.consumePeeked("h-") &&
        ((s = Oo(
          "height",
          this.rest,
          this.context,
          u == null ? void 0 : u.height,
        )),
        s)) ||
      (this.consumePeeked("w-") &&
        ((s = Oo(
          "width",
          this.rest,
          this.context,
          u == null ? void 0 : u.width,
        )),
        s)) ||
      (this.consumePeeked("min-w-") &&
        ((s = Er(
          "minWidth",
          this.rest,
          this.context,
          u == null ? void 0 : u.minWidth,
        )),
        s)) ||
      (this.consumePeeked("min-h-") &&
        ((s = Er(
          "minHeight",
          this.rest,
          this.context,
          u == null ? void 0 : u.minHeight,
        )),
        s)) ||
      (this.consumePeeked("max-w-") &&
        ((s = Er(
          "maxWidth",
          this.rest,
          this.context,
          u == null ? void 0 : u.maxWidth,
        )),
        s)) ||
      (this.consumePeeked("max-h-") &&
        ((s = Er(
          "maxHeight",
          this.rest,
          this.context,
          u == null ? void 0 : u.maxHeight,
        )),
        s)) ||
      (this.consumePeeked("leading-") &&
        ((s = So(this.rest, u == null ? void 0 : u.lineHeight)), s)) ||
      (this.consumePeeked("text-") &&
        ((s = _o(this.rest, u == null ? void 0 : u.fontSize, this.context)),
        s ||
          ((s = ft("text", this.rest, u == null ? void 0 : u.textColor)), s) ||
          (this.consumePeeked("opacity-") &&
            ((s = Fr("text", this.rest)), s)))) ||
      (this.consumePeeked("font-") &&
        ((s = Ao(this.rest, u == null ? void 0 : u.fontFamily)), s)) ||
      (this.consumePeeked("aspect-") &&
        (this.consumePeeked("ratio-") &&
          Fe(
            "`aspect-ratio-{ratio}` is deprecated, use `aspect-{ratio}` instead",
          ),
        (s = Ge("aspectRatio", this.rest, { fractions: !0 })),
        s)) ||
      (this.consumePeeked("tint-") &&
        ((s = ft("tint", this.rest, u == null ? void 0 : u.colors)), s)) ||
      (this.consumePeeked("bg-") &&
        ((s = ft("bg", this.rest, u == null ? void 0 : u.backgroundColor)),
        s ||
          (this.consumePeeked("opacity-") &&
            ((s = Fr("bg", this.rest)), s)))) ||
      (this.consumePeeked("border") &&
        ((s = ll(this.rest, u)),
        s ||
          (this.consumePeeked("-opacity-") &&
            ((s = Fr("border", this.rest)), s)))) ||
      (this.consumePeeked("rounded") &&
        ((s = fl(this.rest, u == null ? void 0 : u.borderRadius)), s)) ||
      (this.consumePeeked("bottom-") &&
        ((s = Et(
          "bottom",
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.inset,
        )),
        s)) ||
      (this.consumePeeked("top-") &&
        ((s = Et(
          "top",
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.inset,
        )),
        s)) ||
      (this.consumePeeked("left-") &&
        ((s = Et(
          "left",
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.inset,
        )),
        s)) ||
      (this.consumePeeked("right-") &&
        ((s = Et(
          "right",
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.inset,
        )),
        s)) ||
      (this.consumePeeked("inset-") &&
        ((s = Et(
          "inset",
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.inset,
        )),
        s)) ||
      (this.consumePeeked("flex-") &&
        (this.consumePeeked("grow")
          ? (s = wr("Grow", this.rest, u == null ? void 0 : u.flexGrow))
          : this.consumePeeked("shrink")
          ? (s = wr("Shrink", this.rest, u == null ? void 0 : u.flexShrink))
          : (s = dl(this.rest, u == null ? void 0 : u.flex)),
        s)) ||
      (this.consumePeeked("grow") &&
        ((s = wr("Grow", this.rest, u == null ? void 0 : u.flexGrow)), s)) ||
      (this.consumePeeked("shrink") &&
        ((s = wr("Shrink", this.rest, u == null ? void 0 : u.flexShrink)),
        s)) ||
      (this.consumePeeked("shadow-color-opacity-") &&
        ((s = Fr("shadow", this.rest)), s)) ||
      (this.consumePeeked("shadow-opacity-") && ((s = ml(this.rest)), s)) ||
      (this.consumePeeked("shadow-offset-") && ((s = Dl(this.rest)), s)) ||
      (this.consumePeeked("shadow-radius-") &&
        ((s = Ae("shadowRadius", this.rest)), s)) ||
      (this.consumePeeked("shadow-") &&
        ((s = ft("shadow", this.rest, u == null ? void 0 : u.colors)), s))
    )
      return s;
    if (this.consumePeeked("elevation-")) {
      let a = parseInt(this.rest, 10);
      if (!Number.isNaN(a)) return D({ elevation: a });
    }
    if (
      (this.consumePeeked("opacity-") &&
        ((s = hl(this.rest, u == null ? void 0 : u.opacity)), s)) ||
      (this.consumePeeked("tracking-") &&
        ((s = pl(
          this.rest,
          this.isNegative,
          u == null ? void 0 : u.letterSpacing,
        )),
        s))
    )
      return s;
    if (this.consumePeeked("z-")) {
      let a = Number(
        (o =
          (i = u == null ? void 0 : u.zIndex) === null || i === void 0
            ? void 0
            : i[this.rest]) !== null && o !== void 0
          ? o
          : this.rest,
      );
      if (!Number.isNaN(a)) return D({ zIndex: a });
    }
    return Fe(`\`${this.rest}\` unknown or invalid utility`), null;
  }
  handlePossibleArbitraryBreakpointPrefix(t) {
    var n;
    if (t[0] !== "m") return !1;
    let r = t.match(/^(min|max)-(w|h)-\[([^\]]+)\]$/);
    if (!r) return !1;
    if (
      !(
        !((n = this.context.device) === null || n === void 0) &&
        n.windowDimensions
      )
    )
      return (this.isNull = !0), !0;
    let i = this.context.device.windowDimensions,
      [, o = "", u = "", s = ""] = r,
      a = u === "w" ? i.width : i.height,
      l = fe(s, this.context);
    if (l === null) return (this.isNull = !0), !0;
    let [f, c] = l;
    return (
      c !== "px" && (this.isNull = !0),
      (o === "min" ? a >= f : a <= f)
        ? this.incrementOrder()
        : (this.isNull = !0),
      !0
    );
  }
  advance(t = 1) {
    (this.position += t), (this.char = this.string[this.position]);
  }
  get rest() {
    return this.peekSlice(0, this.string.length);
  }
  peekSlice(t, n) {
    return this.string.slice(this.position + t, this.position + n);
  }
  consumePeeked(t) {
    return this.peekSlice(0, t.length) === t
      ? (this.advance(t.length), !0)
      : !1;
  }
  parseIsNegative() {
    this.char === "-" &&
      (this.advance(), (this.isNegative = !0), (this.context.isNegative = !0));
  }
  incrementOrder() {
    var t;
    this.order = ((t = this.order) !== null && t !== void 0 ? t : 0) + 1;
  }
};
function gl(e) {
  let t = [],
    n = null;
  return (
    e.forEach((r) => {
      if (typeof r == "string") t = [...t, ...Bo(r)];
      else if (Array.isArray(r)) t = [...t, ...r.flatMap(Bo)];
      else if (typeof r == "object" && r !== null)
        for (let [i, o] of Object.entries(r))
          typeof o == "boolean"
            ? (t = [...t, ...(o ? Bo(i) : [])])
            : n
            ? (n[i] = o)
            : (n = { [i]: o });
    }),
    [t.filter(Boolean).filter($m), n]
  );
}
function Bo(e) {
  return e.trim().split(/\s+/);
}
function $m(e, t, n) {
  return n.indexOf(e) === t;
}
function bl(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.reduce((n, r) => ({ ...n, ...Wm(r.handler) }), {})) !== null &&
    t !== void 0
    ? t
    : {};
}
function Wm(e) {
  let t = {};
  return (
    e({
      addUtilities: (n) => {
        t = n;
      },
      ...qm,
    }),
    t
  );
}
function $e(e) {
  throw new Error(
    `tailwindcss plugin function argument object prop "${e}" not implemented`,
  );
}
var qm = {
  addComponents: $e,
  addBase: $e,
  addVariant: $e,
  e: $e,
  prefix: $e,
  theme: $e,
  variants: $e,
  config: $e,
  corePlugins: $e,
  matchUtilities: $e,
  postcss: null,
};
function yl(e, t) {
  let n = (0, vl.default)(Um(e)),
    r = {},
    i = bl(n.plugins),
    o = {},
    u = Object.entries(i)
      .map(([d, m]) =>
        typeof m == "string" ? ((o[d] = m), [d, { kind: "null" }]) : [d, D(m)],
      )
      .filter(([, d]) => d.kind !== "null");
  function s() {
    return (
      [
        r.windowDimensions ? `w${r.windowDimensions.width}` : !1,
        r.windowDimensions ? `h${r.windowDimensions.height}` : !1,
        r.fontScale ? `fs${r.fontScale}` : !1,
        r.colorScheme === "dark" ? "dark" : !1,
        r.pixelDensity === 2 ? "retina" : !1,
      ]
        .filter(Boolean)
        .join("--") || "default"
    );
  }
  let a = s(),
    l = {};
  function f() {
    let d = l[a];
    if (d) return d;
    let m = new xr(u);
    return (l[a] = m), m;
  }
  function c(...d) {
    let m = f(),
      v = {},
      g = [],
      b = [],
      [x, F] = gl(d),
      y = x.join(" "),
      k = m.getStyle(y);
    if (k) return { ...k, ...(F || {}) };
    for (let P of x) {
      let B = m.getIr(P);
      if (!B && P in o) {
        let ie = c(o[P]);
        m.setIr(P, D(ie)), (v = { ...v, ...ie });
        continue;
      }
      switch (((B = new Ct(P, n, m, r, t).parse()), B.kind)) {
        case "complete":
          (v = { ...v, ...B.style }), m.setIr(P, B);
          break;
        case "dependent":
          g.push(B);
          break;
        case "ordered":
          b.push(B);
          break;
        case "null":
          m.setIr(P, B);
          break;
      }
    }
    if (b.length > 0) {
      b.sort((P, B) => P.order - B.order);
      for (let P of b)
        switch (P.styleIr.kind) {
          case "complete":
            v = { ...v, ...P.styleIr.style };
            break;
          case "dependent":
            g.push(P.styleIr);
            break;
        }
    }
    if (g.length > 0) {
      for (let P of g) {
        let B = P.complete(v);
        B && Fe(B);
      }
      ul(v);
    }
    return y !== "" && m.setStyle(y, v), F && (v = { ...v, ...F }), v;
  }
  function p(d) {
    let m = c(
      d
        .split(/\s+/g)
        .map((v) => v.replace(/^(bg|text|border)-/, ""))
        .map((v) => `bg-${v}`)
        .join(" "),
    );
    return typeof m.backgroundColor == "string" ? m.backgroundColor : void 0;
  }
  let h = (d, ...m) => {
    let v = "";
    return (
      d.forEach((g, b) => {
        var x;
        v += g + ((x = m[b]) !== null && x !== void 0 ? x : "");
      }),
      c(v)
    );
  };
  return (
    (h.style = c),
    (h.color = p),
    (h.prefixMatch = (...d) => {
      let m = d.sort().join(":"),
        v = f(),
        g = v.getPrefixMatch(m);
      if (g !== void 0) return g;
      let F = new Ct(`${m}:flex`, n, v, r, t).parse().kind !== "null";
      return v.setPrefixMatch(m, F), F;
    }),
    (h.setWindowDimensions = (d) => {
      (r.windowDimensions = d), (a = s());
    }),
    (h.setFontScale = (d) => {
      (r.fontScale = d), (a = s());
    }),
    (h.setPixelDensity = (d) => {
      (r.pixelDensity = d), (a = s());
    }),
    (h.setColorScheme = (d) => {
      (r.colorScheme = d), (a = s());
    }),
    h
  );
}
function Um(e) {
  return { ...e, content: ["_no_warnings_please"] };
}
var Gm = {
  handler: ({ addUtilities: e }) => {
    e({
      "shadow-sm": { boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
      shadow: {
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      },
      "shadow-md": {
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      "shadow-lg": {
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      "shadow-xl": {
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      "shadow-2xl": { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
      "shadow-inner": { boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
      "shadow-none": { boxShadow: "0 0 #0000" },
    });
  },
};
function jm(e) {
  return yl(
    { ...e, plugins: [...((e == null ? void 0 : e.plugins) ?? []), Gm] },
    "web",
  );
}
var hn;
function Io({ width: e, height: t, config: n }) {
  return (
    hn || (hn = jm(n)), hn.setWindowDimensions({ width: +e, height: +t }), hn
  );
}
var Ro = new WeakMap();
async function Fl(e, t) {
  let n = await qe();
  if (!n || !n.Node)
    throw new Error(
      "Satori is not initialized: expect `yoga` to be loaded, got " + n,
    );
  t.fonts = t.fonts || [];
  let r;
  Ro.has(t.fonts)
    ? (r = Ro.get(t.fonts))
    : Ro.set(t.fonts, (r = new zt(t.fonts)));
  let i = "width" in t ? t.width : void 0,
    o = "height" in t ? t.height : void 0,
    u = n.Node.create();
  i && u.setWidth(i),
    o && u.setHeight(o),
    u.setFlexDirection(n.FLEX_DIRECTION_ROW),
    u.setFlexWrap(n.WRAP_WRAP),
    u.setAlignContent(n.ALIGN_AUTO),
    u.setAlignItems(n.ALIGN_FLEX_START),
    u.setJustifyContent(n.JUSTIFY_FLEX_START),
    u.setOverflow(n.OVERFLOW_HIDDEN);
  let s = { ...t.graphemeImages },
    a = new Set();
  Le.clear(), await du(e);
  let l = Ut(e, {
      id: "id",
      parentStyle: {},
      inheritedStyle: {
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: "serif",
        fontStyle: "normal",
        lineHeight: 1.2,
        color: "black",
        opacity: 1,
        whiteSpace: "normal",
        _viewportWidth: i,
        _viewportHeight: o,
      },
      parent: u,
      font: r,
      embedFont: t.embedFont,
      debug: t.debug,
      graphemeImages: s,
      canLoadAdditionalAssets: !!t.loadAdditionalAsset,
      onNodeDetected: t.onNodeDetected,
      getTwStyles: (d, m) => {
        let g = {
          ...Io({ width: i, height: o, config: t.tailwindConfig })([d]),
        };
        return (
          typeof g.lineHeight == "number" &&
            (g.lineHeight = g.lineHeight / (+g.fontSize || m.fontSize || 16)),
          g.shadowColor &&
            g.boxShadow &&
            (g.boxShadow = g.boxShadow.replace(
              /rgba?\([^)]+\)/,
              g.shadowColor,
            )),
          g
        );
      },
    }),
    f = (await l.next()).value;
  if (t.loadAdditionalAsset && f.length) {
    let d = Hm(f),
      m = [],
      v = {};
    await Promise.all(
      Object.entries(d).flatMap(([g, b]) =>
        b.map((x) => {
          let F = `${g}_${x}`;
          return a.has(F)
            ? null
            : (a.add(F),
              t.loadAdditionalAsset(g, x).then((y) => {
                typeof y == "string"
                  ? (v[x] = y)
                  : y && (Array.isArray(y) ? m.push(...y) : m.push(y));
              }));
        }),
      ),
    ),
      r.addFonts(m),
      Object.assign(s, v);
  }
  await l.next(), u.calculateLayout(i, o, n.DIRECTION_LTR);
  let c = (await l.next([0, 0])).value,
    p = u.getComputedWidth(),
    h = u.getComputedHeight();
  return u.freeRecursive(), Hn({ width: p, height: h, content: c });
}
function Hm(e) {
  let t = {},
    n = {};
  for (let { word: r, locale: i } of e) {
    let o = Nu(r, i).join("|");
    (n[o] = n[o] || ""), (n[o] += r);
  }
  return (
    Object.keys(n).forEach((r) => {
      (t[r] = t[r] || []),
        r === "emoji"
          ? t[r].push(...xl(Ee(n[r], "grapheme")))
          : ((t[r][0] = t[r][0] || ""),
            (t[r][0] += xl(
              Ee(n[r], "grapheme", r === "unknown" ? void 0 : r),
            ).join("")));
    }),
    t
  );
}
function xl(e) {
  return Array.from(new Set(e));
}
export { Fl as default, Bl as init };
//# sourceMappingURL=index.js.map
