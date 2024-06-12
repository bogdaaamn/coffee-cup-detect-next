import { ConnectionCard, PageCard } from "~/components/layout/card";
import { PageTable } from "~/components/layout/table";
import { PageHeader } from "~/components/layout/header";
import { supabaseClient } from "~/lib/supabase";

const todayCardProps = {
  day: "Today",
  amount: "400",
  measure: " mg of caffeine",
  metric: "+13% from this time yesterday",
  info: (
    <>
      <p>
        Very loosely based on the assumption that an average sip of coffee is
        approximately 16ml. And that there are 40mg of caffeine per 100ml in a
        normal coffee.
      </p>
      <p className="mt-2">
        Of course, the amount of water consumed per sip can vary greatly
        depending on a person individual habits and preferences. Don&apos;t
        trust everything you read on the internet.
      </p>
    </>
  ),
};

const weekCardProps = {
  day: "This week",
  amount: "1,329",
  measure: " coffee sips",
  metric: "+25% from last week",
  info: (
    <p>Loosely based on how many times you raised your coffee cup today.</p>
  ),
};

const connectionCardProps = {
  device: "b8:27:eb:93:9f:b8",
  connected: true,
  lastSip: new Date("2024-06-12 19:28:26+00"),
};

const tableDataProps = [
  {
    message: "Coffee cup detected",
    day: "Today",
    time: "14:35",
    amount: "16ml",
  },
  {
    message: "Coffee cup detected",
    day: "Today",
    time: "14:35",
    amount: "16ml",
  },
  {
    message: "Coffee cup detected",
    day: "Today",
    time: "14:35",
    amount: "16ml",
  },
  {
    message: "Coffee cup detected",
    day: "Today",
    time: "14:35",
    amount: "16ml",
  },
];

export default async function Home() {
  const { data } = await supabaseClient.from("detections").select();
  console.log(data);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 p-14 font-normal text-foreground">
      <PageHeader />

      <div className="grid gap-4 grid-cols-3">
        <PageCard {...todayCardProps} />
        <PageCard {...weekCardProps} />

        <ConnectionCard {...connectionCardProps} />

        <div className="col-span-2">
          <PageTable data={tableDataProps} />
        </div>
      </div>
    </div>
  );
}
