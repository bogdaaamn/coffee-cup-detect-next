import { supabaseClient } from "~/lib/supabase";
import { getRelativeTimeString } from "./utils";

export async function getTodayCardData() {
  const todayDateString = new Date().toISOString().split("T")[0];
  const yesterdayDateString = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const { data: todayData } = await supabaseClient
    .from("detections")
    .select()
    .gt("created_at", todayDateString);

  const { data: yesterdayData } = await supabaseClient
    .from("detections")
    .select()
    .lt("created_at", todayDateString)
    .gt("created_at", yesterdayDateString);

  // Calculate the amount of caffeine consumed today based on
  // a 16ml sip of coffee and 40mg of caffeine per 100ml
  const todayAmount = todayData ? todayData.length * 16 * 0.4 : 0;

  // Calculate the percentage increase from yesterday
  const yesterdayAmount = yesterdayData ? yesterdayData.length * 16 * 0.4 : 0;
  const metric = ((todayAmount - yesterdayAmount) / yesterdayAmount) * 100;

  // Add plus sign if positive
  const plusSign = metric > 0 ? "+" : "";

  return {
    day: "Today",
    amount: todayAmount.toFixed(2),
    measure: " mg of caffeine",
    metric: `${plusSign}${Math.round(metric)}% from this time yesterday`,
  };
}

export async function getThisWeekCardData() {
  const oneWeekDateString = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const twoWeeksDateString = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const { data: thisWeekData } = await supabaseClient
    .from("detections")
    .select()
    .gt("created_at", oneWeekDateString);

  const { data: lastWeekData } = await supabaseClient
    .from("detections")
    .select()
    .lt("created_at", oneWeekDateString)
    .gt("created_at", twoWeeksDateString);

  // Calculate the number of sips this week
  const thisWeekAmount = thisWeekData ? thisWeekData.length : 0;

  // Calculate the percentage increase from last week
  const lastWeekAmount = lastWeekData ? lastWeekData.length : 0;
  const metric = ((thisWeekAmount - lastWeekAmount) / lastWeekAmount) * 100;

  // Add plus sign if positive
  const plusSign = metric > 0 ? "+" : "";

  return {
    day: "This week",
    amount: thisWeekAmount.toFixed(0),
    measure: " coffee sips",
    metric: `${plusSign}${Math.round(metric)}% from last week`,
  };
}

export async function getTableData() {
  const { data } = await supabaseClient
    .from("detections")
    .select()
    .order("created_at", { ascending: false })
    .limit(10);

  if (!data) {
    return [
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
  }

  return data?.map((detection) => ({
    message: detection.message ?? "Coffee cup detected",
    day: getRelativeTimeString(new Date(detection.created_at)),
    time: new Date(detection.created_at)
      .toISOString()
      .split("T")[1]
      .slice(0, 5),
    amount: "16ml",
  }));
}

export async function getConnectionData() {
  const { data } = await supabaseClient.from("detections").select().limit(1);

  const lastSipTime = data
    ? new Date(data[0].created_at)
    : new Date(Date.now());

  return {
    device: "b8:27:eb:93:9f:b8",
    connected: true,
    lastSip: lastSipTime,
  };
}
