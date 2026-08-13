"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NICHE_SHORTS_RPM_CENTS: Record<string, number> = {
  finance: 0.9,
  tech: 0.8,
  education: 0.8,
  beauty: 0.6,
  fitness: 0.6,
  lifestyle: 0.5,
  food: 0.5,
  travel: 0.5,
  entertainment: 0.4,
  gaming: 0.4,
  comedy: 0.4,
};

const REGION_MULT: Record<string, number> = {
  us: 1.3,
  uk: 1.1,
  germany: 1.0,
  other: 0.6,
};

const BONUS_RATE = 0.02;

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function YouTubeShortsCalculator() {
  const [shortsViews, setShortsViews] = React.useState(500000);
  const [shortsPerMonth, setShortsPerMonth] = React.useState(20);
  const [niche, setNiche] =
    React.useState<keyof typeof NICHE_SHORTS_RPM_CENTS>("entertainment");
  const [region, setRegion] = React.useState<keyof typeof REGION_MULT>("us");

  const regionMult = REGION_MULT[region];
  const nicheRpm = NICHE_SHORTS_RPM_CENTS[niche];
  const rpm = nicheRpm * regionMult;
  const rpmLow = rpm * 0.6;
  const rpmHigh = rpm * 1.4;

  const monthlyViews = shortsViews * shortsPerMonth;
  const adRevenueLow = (monthlyViews / 1000) * rpmLow;
  const adRevenueHigh = (monthlyViews / 1000) * rpmHigh;

  // Shorts bonus (extra incentive on top of ad share)
  const bonusLow = monthlyViews * BONUS_RATE * 0.5;
  const bonusHigh = monthlyViews * BONUS_RATE * 1.5;

  const totalLow = adRevenueLow + bonusLow;
  const totalHigh = adRevenueHigh + bonusHigh;

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          YouTube Shorts Money Calculator
        </CardTitle>
        <CardDescription>
          Estimate your YouTube Shorts earnings from Shorts ad revenue (per
          1,000 views) and bonus incentives, based on views, niche, and region.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="shortsViews">Avg. views per Short</Label>
            <Input
              id="shortsViews"
              type="number"
              min={0}
              value={shortsViews}
              onChange={(e) =>
                setShortsViews(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shortsPerMonth">Shorts / month</Label>
            <Input
              id="shortsPerMonth"
              type="number"
              min={0}
              value={shortsPerMonth}
              onChange={(e) =>
                setShortsPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="niche">Content niche</Label>
            <Select
              value={niche}
              onValueChange={(v) => setNiche(v as typeof niche)}
            >
              <SelectTrigger id="niche" className="w-full">
                <SelectValue placeholder="Select niche" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="region">Audience region</Label>
            <Select
              value={region}
              onValueChange={(v) => setRegion(v as typeof region)}
            >
              <SelectTrigger id="region" className="w-full">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="other">Other / Global</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="text-sm font-medium text-muted-foreground">
            Estimated monthly Shorts earnings
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Est. RPM: {rpmLow.toFixed(2)}¢ – {rpmHigh.toFixed(2)}¢ per 1,000
            views
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Ad revenue</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                {formatUsd(adRevenueLow)} – {formatUsd(adRevenueHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bonus incentive</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                {formatUsd(bonusLow)} – {formatUsd(bonusHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(totalLow)} – {formatUsd(totalHigh)}
              </p>
              <p className="text-xs text-muted-foreground">per month</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Based on {formatNumber(monthlyViews)} monthly Shorts views. Shorts
            pay a lower RPM than long-form video. These are estimates — real
            earnings vary by engagement and ad rates. See methodology below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
