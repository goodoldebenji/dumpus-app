"use client";

import { useDataSources } from "./_shared";

export default function useDailySentMessagesData() {
  const { sql, start, end } = useDataSources();

  const totalDays = new Date(end).getTime() - new Date(start).getTime();
  const days = Math.floor(totalDays / (1000 * 60 * 60 * 24));

  const periodLength = days > 360 ? 30 : days > 90 ? 7 : 1;

  const { data, hasError } = sql<{
    period_start: string;
    total_minutes_online: number;
  }>`
    WITH RECURSIVE dates(day, day_group) AS (
      VALUES('${start}', 1)
      UNION ALL
      SELECT date(day, '+1 day'), 
      CASE WHEN (julianday(date(day, '+1 day')) - julianday('${start}')) % ${periodLength} = 0 THEN day_group + 1 ELSE day_group END
      FROM dates
      WHERE day < date('${start}', '+${days} days')
    ),
    pre_agg AS (
      SELECT 
          date(datetime(started_date, 'unixepoch')) AS day,
          SUM(duration_mins) as total_minutes_online
      FROM 
          sessions
      GROUP BY
          day
    )
    SELECT 
      MIN(dates.day) as period_start,
      MAX(dates.day) as period_end,
      IFNULL(SUM(pre_agg.total_minutes_online), 0) as total_minutes_online
    FROM 
      dates
    LEFT JOIN 
      pre_agg
    ON 
      pre_agg.day = dates.day
    GROUP BY 
      dates.day_group
    ORDER BY 
      period_start ASC;
  `;

  if (hasError) {
    return null;
  }

  return data.map(({ period_start, total_minutes_online }) => ({
    label: period_start,
    value: total_minutes_online,
  }));
}
