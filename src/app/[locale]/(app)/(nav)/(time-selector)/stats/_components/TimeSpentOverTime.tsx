"use client";

import Section from "~/components/Section";
import SimpleBarChart from "~/components/data/SimpleBarChart";
import SimpleLineChart from "~/components/data/SimpleLineChart";
import useTimeSpentOverTimeData from "~/hooks/data/use-time-spent-data";
import { useTranslation } from "~/i18n/client";
import { formatDate } from "~/utils/format";

export default function TimeSpentOverTime() {
  const { t } = useTranslation();
  const rawData = useTimeSpentOverTimeData();
  console.log(rawData);
  const data = (rawData || []).map(({ value, label }) => ({
    value,
    label: formatDate(label, {
      year: "2-digit",
      day: false,
      hour: false,
      minute: false,
    }),
  }));

  return (
    <Section title={'Minutes spent on Discord over time'}>
      <SimpleLineChart
        data={data}
        className="px-2"
        legend={'Minute count'}
      />
    </Section>
  );
}
