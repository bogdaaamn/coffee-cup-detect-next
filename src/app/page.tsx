import {
  CaffeineDisclaimer,
  ConnectionCard,
  PageCard,
  SipsDisclaimer,
} from "~/components/layout/card";

import { PageTable } from "~/components/layout/table";
import { PageHeader } from "~/components/layout/header";

import {
  getConnectionData,
  getTableData,
  getThisWeekCardData,
  getTodayCardData,
} from "~/lib/mappings";

export default async function Home() {
  const todayCardProps = await getTodayCardData();
  const weekCardProps = await getThisWeekCardData();
  const tableDataProps = await getTableData();
  const connectionCardProps = await getConnectionData();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 p-14 font-normal text-foreground">
      <PageHeader />

      <div className="grid gap-4 grid-cols-3">
        <PageCard {...todayCardProps} info={<CaffeineDisclaimer />} />
        <PageCard {...weekCardProps} info={<SipsDisclaimer />} />

        <ConnectionCard {...connectionCardProps} />

        <div className="col-span-2">
          <PageTable data={tableDataProps} />
        </div>
      </div>
    </div>
  );
}
