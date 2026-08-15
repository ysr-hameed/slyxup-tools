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

// Long-form ad RPM in USD per 1,000 views (US base, before region/length).
// Chosen so the US region lands in the ranges shown on the page.
const NICHE_RPM_USD: Record<string, number> = {
  finance: 9,
  tech: 7.5,
  education: 6,
  beauty: 5,
  fitness: 4.5,
  lifestyle: 3.5,
  food: 3.5,
  travel: 3.5,
  entertainment: 2.5,
  gaming: 2,
  comedy: 2,
};

const NICHE_BRAND_MULT: Record<string, number> = {
  finance: 1.4,
  tech: 1.3,
  beauty: 1.2,
  fitness: 1.1,
  lifestyle: 1.0,
  food: 1.0,
  travel: 1.0,
  education: 1.1,
  gaming: 1.0,
  entertainment: 1.0,
  comedy: 1.0,
};

const NICHE_LABELS: Record<string, string> = {
  finance: "Finance",
  tech: "Tech",
  beauty: "Beauty",
  fitness: "Fitness",
  lifestyle: "Lifestyle",
  food: "Food",
  travel: "Travel",
  education: "Education",
  gaming: "Gaming",
  entertainment: "Entertainment",
  comedy: "Comedy",
};

const REGION_MULT: Record<string, number> = {
  us: 1.3,
  uk: 1.1,
  germany: 1.0,
  other: 0.6,
};

const LENGTH_MULT: Record<string, number> = {
  short: 0.08,
  long: 1,
};

const BONUS_THRESHOLDS: { threshold: number; bonus: number }[] = [
  { threshold: 100_000, bonus: 0.01 },
  { threshold: 10_000, bonus: 0.005 },
  { threshold: 0, bonus: 0 },
];

const CHANNEL_MEMBERSHIP_RATE = 5;

function brandMultForSubs(subs: number): number {
  if (subs >= 1_000_000) return 1.5;
  if (subs >= 250_000) return 1.3;
  if (subs >= 50_000) return 1.1;
  if (subs >= 10_000) return 1.0;
  return 0.9;
}

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

export function YouTubeMoneyCalculator() {
  const [subscribers, setSubscribers] = React.useState(100000);
  const [viewsPerMonth, setViewsPerMonth] = React.useState(500000);
  const [videosPerMonth, setVideosPerMonth] = React.useState(8);
  const [niche, setNiche] =
    React.useState<keyof typeof NICHE_RPM_USD>("finance");
  const [videoLength, setVideoLength] =
    React.useState<keyof typeof LENGTH_MULT>("long");
  const [region, setRegion] = React.useState<keyof typeof REGION_MULT>("us");

  const regionMult = REGION_MULT[region];
  const nicheRpm = NICHE_RPM_USD[niche];

  // Ad revenue (CPM/RPM)
  const rpm = nicheRpm * regionMult * LENGTH_MULT[videoLength];
  const rpmLow = rpm * 0.7;
  const rpmHigh = rpm * 1.3;
  const adRevenueLow = (viewsPerMonth / 1000) * rpmLow;
  const adRevenueHigh = (viewsPerMonth / 1000) * rpmHigh;

  // Brand deals / sponsorships
  const brandMult = NICHE_BRAND_MULT[niche] * brandMultForSubs(subscribers);
  const sponsorLow = 500 * brandMult;
  const sponsorHigh = 1500 * brandMult;
  const brandLow = sponsorLow * Math.max(1, Math.round(videosPerMonth / 4));
  const brandHigh = sponsorHigh * Math.max(1, Math.round(videosPerMonth / 4));

  // Channel memberships
  const memberPct = BONUS_THRESHOLDS.find(
    (t) => subscribers >= t.threshold
  )?.bonus ?? 0;
  const membersLow = Math.floor(subscribers * memberPct);
  const membersHigh = Math.floor(subscribers * memberPct * 2);
  const membershipLow = membersLow * CHANNEL_MEMBERSHIP_RATE;
  const membershipHigh = membersHigh * CHANNEL_MEMBERSHIP_RATE;

  // Supers (Stickers/SuperChat) — less relevant for VOD
  const superLow = 0;
  const superHigh = Math.round(4 * 0.05 * 100) * (viewsPerMonth / 100000);

  const totalLow = adRevenueLow + brandLow + membershipLow + superLow;
  const totalHigh = adRevenueHigh + brandHigh + membershipHigh + superHigh;

  // Per-1,000-views and per-1-million-views (ad revenue only)
  const per1MLow = rpmLow * 1000;
  const per1MHigh = rpmHigh * 1000;

  const reset = () => {
    setSubscribers(100000);
    setViewsPerMonth(500000);
    setVideosPerMonth(8);
    setNiche("finance");
    setVideoLength("long");
    setRegion("us");
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          YouTube Money Calculator
        </CardTitle>
        <CardDescription>
          Estimate your YouTube earnings from ad revenue (CPM/RPM),
          sponsorships, and channel memberships based on views, niche, region,
          and upload frequency.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="subscribers">Subscribers</Label>
            <Input
              id="subscribers"
              type="number"
              min={0}
              value={subscribers}
              onChange={(e) =>
                setSubscribers(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="views">Views / month</Label>
            <Input
              id="views"
              type="number"
              min={0}
              value={viewsPerMonth}
              onChange={(e) =>
                setViewsPerMonth(Math.max(0, Number(e.target.value)))
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
            <Label htmlFor="videoLength">Video length</Label>
            <Select
              value={videoLength}
              onValueChange={(v) => setVideoLength(v as typeof videoLength)}
            >
              <SelectTrigger id="videoLength" className="w-full">
                <SelectValue placeholder="Select length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="long">8 min+ (long-form)</SelectItem>
                <SelectItem value="short">Under 3 min (Shorts)</SelectItem>
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
          <div className="space-y-2">
            <Label htmlFor="videos">Videos / month</Label>
            <Input
              id="videos"
              type="number"
              min={0}
              value={videosPerMonth}
              onChange={(e) =>
                setVideosPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Estimated monthly earnings
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Reset
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Est. RPM: {formatUsd(rpmLow)} – {formatUsd(rpmHigh)} per 1,000
            views (≈ {formatUsd(per1MLow)}–{formatUsd(per1MHigh)} per 1M views)
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Ad revenue</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(adRevenueLow)} – {formatUsd(adRevenueHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sponsorships</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(brandLow)} – {formatUsd(brandHigh)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatUsd(sponsorLow)}–{formatUsd(sponsorHigh)} per deal
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Memberships</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(membershipLow)} – {formatUsd(membershipHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="mt-1 font-mono text-2xl font-semibold">
                {formatUsd(totalLow)} – {formatUsd(totalHigh)}
              </p>
              <p className="text-xs text-muted-foreground">per month</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Based on {formatNumber(viewsPerMonth)} monthly views at an estimated
            RPM of {formatUsd(rpmLow)} – {formatUsd(rpmHigh)} in the{" "}
            {NICHE_LABELS[niche]} niche. These are estimates — real earnings
            vary by audience, watch time, and ad rates. See methodology below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
