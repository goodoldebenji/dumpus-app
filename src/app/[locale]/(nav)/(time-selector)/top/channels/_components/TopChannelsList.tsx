"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import NoDataAvailable from "~/components/NoDataAvailable";
import DetailCard from "~/components/data/DetailCard";
import useTopChannelsData from "~/hooks/data/use-top-channels-data";
import { timeRangeAtom } from "~/stores/db";
import { firstCharFromUnicode } from "~/utils";
import { iconColor } from "~/utils/discord";
import { formatNumber } from "~/utils/format";

export default function TopChannelsList() {
  const { getData, count } = useTopChannelsData();
  const timeRange = useAtomValue(timeRangeAtom);

  const { data: queryData, fetchNextPage } = useInfiniteQuery({
    queryKey: ["top-channels", timeRange],
    queryFn: ({ pageParam = 0 }) => getData({ offset: pageParam })!,
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  if (!count) return <NoDataAvailable />;

  const data = queryData?.pages.flat() || getData({})!;

  return (
    <div className="px-2 py-4 desktop-container sm:py-8">
      <div className="grid gap-2 sm:grid-cols-2">
        {data.map((channel) => (
          <DetailCard.WithRank
            key={channel.rank}
            href={`/top/channels/details?guild_id=${channel.guild_id}&channel_id=${channel.channel_id}`}
            rank={channel.rank}
            title={"#" + channel.channel_name}
            description={`${channel.guild_name} · ${formatNumber(
              channel.message_count
            )} messages sent`}
            leftSlot={
              <div
                className="relative flex aspect-square w-10 items-center justify-center rounded-lg text-2xl font-bold uppercase text-gray-950"
                style={{
                  backgroundColor: iconColor(
                    channel.guild_id + channel.channel_id
                  ),
                }}
              >
                <div>{firstCharFromUnicode(channel.channel_name)}</div>
              </div>
            }
            rightIcon={ChevronRightIcon}
          />
        ))}
      </div>
      {data.length < count && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => fetchNextPage()}
            className="text-brand-300 hover:underline"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
