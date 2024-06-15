import { Info } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { getRelativeTimeString } from "~/lib/utils";

export type PageCardProps = {
  day: string;
  amount: string;
  measure: string;
  info: React.ReactNode;
  metric: string;
};

export function PageCard({
  day,
  amount,
  measure,
  info,
  metric,
}: PageCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardDescription>{day}</CardDescription>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[400px]">{info}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <CardTitle className="text-4xl">
          {amount}
          <span className="text-xs text-muted-foreground">{measure}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-xs text-muted-foreground">{metric}</div>
      </CardContent>
    </Card>
  );
}

export type ConnectionCardProps = {
  device: string;
  connected: boolean;
  lastSip: Date;
};

export function ConnectionCard({
  device,
  connected = false,
  lastSip,
}: ConnectionCardProps) {
  return (
    <Card className="space-y-1.5 p-6 bg-muted/50 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <CardTitle className="text-base">Connected to {device}</CardTitle>

        {connected ? (
          <span className="flex h-2 w-2 rounded-full bg-green-600"></span>
        ) : (
          <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
        )}
      </div>

      <CardDescription>
        Last sip: {getRelativeTimeString(lastSip, "en")}
      </CardDescription>
    </Card>
  );
}

export function CaffeineDisclaimer() {
  return (
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
  );
}

export function SipsDisclaimer() {
  return (
    <p>Loosely based on how many times you raised your coffee cup today.</p>
  );
}
