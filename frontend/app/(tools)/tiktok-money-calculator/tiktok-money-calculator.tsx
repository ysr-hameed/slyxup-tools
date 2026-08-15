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

const NICHE_BASE_RPM_CENTS: Record<string, number> = {
  finance: 5,
  tech: 5,
  beauty: 4,
  fitness: 4,
  lifestyle: 3,
  food: 3,
  travel: 3,
  entertainment: 3,
  gaming: 3,
  comedy: 2,
  pets: 2,
};

const NICHE_BRAND_MULT: Record<string, number> = {
  finance: 1.3,
  tech: 1.3,
  beauty: 1.2,
  fitness: 1.1,
  lifestyle: 1.0,
  food: 1.0,
  travel: 1.0,
  entertainment: 1.0,
  gaming: 1.0,
  comedy: 1.0,
  pets: 1.0,
};

const REGION_MULT: Record<string, number> = {
  us: 1.3,
  uk: 1.1,
  germany: 1.0,
  other: 0.6,
};

const LENGTH_MULT: Record<string, number> = {
  under1min: 1,
  oneMinutePlus: 8,
};

const NICHE_LABELS: Record<string, string> = {
  finance: "Finance",
  tech: "Tech / Education",
  beauty: "Beauty",
  fitness: "Fitness",
  lifestyle: "Lifestyle",
  food: "Food",
  travel: "Travel",
  entertainment: "Entertainment",
  gaming: "Gaming",
  comedy: "Comedy",
  pets: "Pets",
};

const REGION_LABELS: Record<string, string> = {
  us: "US",
  uk: "UK",
  germany: "Germany",
  other: "Global",
};

const LENGTH_LABELS: Record<string, string> = {
  under1min: "<1min",
  oneMinutePlus: "1min+",
};

function cpfRange(followers: number): [number, number] {
  if (followers >= 1_000_000) return [0.04, 0.08];
  if (followers >= 250_000) return [0.03, 0.05];
  if (followers >= 50_000) return [0.02, 0.04];
  if (followers >= 10_000) return [0.02, 0.03];
  return [0.01, 0.02];
}

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCents(value: number): string {
  return `${value.toFixed(2)}¢`;
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function TikTokMoneyCalculator() {
  const [followers, setFollowers] = React.useState(50000);
  const [viewsPerVideo, setViewsPerVideo] = React.useState(100000);
  const [videosPerMonth, setVideosPerMonth] = React.useState(8);
  const [engagement, setEngagement] = React.useState(3);
  const [niche, setNiche] = React.useState<keyof typeof NICHE_BASE_RPM_CENTS>("finance");
  const [region, setRegion] = React.useState<keyof typeof REGION_MULT>("us");
  const [videoLength, setVideoLength] =
    React.useState<keyof typeof LENGTH_MULT>("under1min");
  const [dealsPerMonth, setDealsPerMonth] = React.useState(2);
  const [liveStreams, setLiveStreams] = React.useState(4);
  const [liveViewers, setLiveViewers] = React.useState(300);

  const monthlyViews = viewsPerVideo * videosPerMonth;

  // --- Creator Fund / Creativity Program ---
  const baseRpm = NICHE_BASE_RPM_CENTS[niche];
  const mult = REGION_MULT[region] * LENGTH_MULT[videoLength];
  const rpmLow = Math.max(0.5, baseRpm * mult * 0.6);
  const rpmHigh = Math.max(1.0, baseRpm * mult * 1.4);
  const fundLow = (monthlyViews / 1000) * (rpmLow / 100);
  const fundHigh = (monthlyViews / 1000) * (rpmHigh / 100);

  // --- Brand deals ---
  const engBoost = Math.min(1.5, Math.max(0.6, engagement / 3));
  const nicheBrand = NICHE_BRAND_MULT[niche];
  const [cpfLow, cpfHigh] = cpfRange(followers);
  const dealPerPostLow = followers * cpfLow * nicheBrand * engBoost;
  const dealPerPostHigh = followers * cpfHigh * nicheBrand * engBoost;
  const brandLow = dealPerPostLow * dealsPerMonth;
  const brandHigh = dealPerPostHigh * dealsPerMonth;

  // --- Live gifts ---
  const liveLow = liveStreams * liveViewers * 0.02;
  const liveHigh = liveStreams * liveViewers * 0.05;

  const totalLow = fundLow + brandLow + liveLow;
  const totalHigh = fundHigh + brandHigh + liveHigh;

  // Per-1,000-views and per-1-million-views (Creator Fund only)
  const per1KLow = rpmLow / 100;
  const per1KHigh = rpmHigh / 100;
  const per1MLow = per1KLow * 1000;
  const per1MHigh = per1KHigh * 1000;

  const reset = () => {
    setFollowers(50000);
    setViewsPerVideo(100000);
    setVideosPerMonth(8);
    setEngagement(3);
    setNiche("finance");
    setRegion("us");
    setVideoLength("under1min");
    setDealsPerMonth(2);
    setLiveStreams(4);
    setLiveViewers(300);
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          TikTok Money Calculator
        </CardTitle>
        <CardDescription>
          Estimate your potential earnings across the Creator Fund, brand
          deals, and LIVE gifts — based on your followers, views, niche, and
          region.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="followers">Followers</Label>
            <Input
              id="followers"
              type="number"
              min={0}
              value={followers}
              onChange={(e) => setFollowers(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="views">Avg. views per video</Label>
            <Input
              id="views"
              type="number"
              min={0}
              value={viewsPerVideo}
              onChange={(e) =>
                setViewsPerVideo(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="videos">Videos per month</Label>
            <Input
              id="videos"
              type="number"
              min={1}
              value={videosPerMonth}
              onChange={(e) =>
                setVideosPerMonth(Math.max(1, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="engagement">Engagement rate (%)</Label>
            <Input
              id="engagement"
              type="number"
              min={0}
              step={0.5}
              value={engagement}
              onChange={(e) =>
                setEngagement(Math.max(0, Number(e.target.value)))
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
                <SelectItem value="tech">Tech / Education</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="pets">Pets</SelectItem>
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
            <Label htmlFor="length">Video length</Label>
            <Select
              value={videoLength}
              onValueChange={(v) => setVideoLength(v as typeof videoLength)}
            >
              <SelectTrigger id="length" className="w-full">
                <SelectValue placeholder="Select length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under1min">
                  Under 1 minute (Creator Fund)
                </SelectItem>
                <SelectItem value="oneMinutePlus">
                  1+ minute (Creativity Program)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="deals">Brand deals / month</Label>
            <Input
              id="deals"
              type="number"
              min={0}
              value={dealsPerMonth}
              onChange={(e) =>
                setDealsPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lives">LIVE streams / month</Label>
            <Input
              id="lives"
              type="number"
              min={0}
              value={liveStreams}
              onChange={(e) =>
                setLiveStreams(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="viewers">Avg. LIVE viewers</Label>
            <Input
              id="viewers"
              type="number"
              min={0}
              value={liveViewers}
              onChange={(e) =>
                setLiveViewers(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Estimated Creator Fund RPM for {NICHE_LABELS[niche]} ×{" "}
          {REGION_LABELS[region]} × {LENGTH_LABELS[videoLength]}:{" "}
          <span className="font-medium">
            {formatCents(rpmLow)} – {formatCents(rpmHigh)} per 1,000 views
          </span>
          . Adjust the sliders and fields to match your account.
        </p>

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
          <p className="mt-3 text-xs text-muted-foreground">
            That&apos;s ≈ {formatUsd(per1MLow)}–{formatUsd(per1MHigh)} per 1
            million views from the Creator Fund alone.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">
                Creator Fund / Creativity Program
              </p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(fundLow)} – {formatUsd(fundHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Brand deals</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(brandLow)} – {formatUsd(brandHigh)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatUsd(dealPerPostLow)}–{formatUsd(dealPerPostHigh)} per
                post
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">LIVE gifts</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(liveLow)} – {formatUsd(liveHigh)}
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
            Based on {formatNumber(monthlyViews)} monthly views and{" "}
            {formatNumber(followers)} followers. These are estimates — real
            earnings vary by audience, engagement, and TikTok&apos;s payout
            programs. See methodology below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}