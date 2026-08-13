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

const NICHE_BRAND_DEAL_PER_POST: Record<string, number> = {
  finance: 1.2,
  tech: 1.2,
  fashion: 1.1,
  beauty: 1.1,
  fitness: 1.05,
  lifestyle: 1.0,
  food: 1.0,
  travel: 1.0,
  education: 1.0,
  gaming: 0.95,
  entertainment: 0.95,
};

const ACCOUNT_TYPE_BRAND_MULT: Record<string, number> = {
  personal: 1.0,
  micro: 1.0,
  pro: 1.15,
  creator: 1.3,
};

const REGION_MULT: Record<string, number> = {
  us: 1.3,
  uk: 1.1,
  other: 0.7,
};

const BONUS_THRESHOLDS: { threshold: number; bonus: number }[] = [
  { threshold: 100_000, bonus: 0.03 },
  { threshold: 50_000, bonus: 0.015 },
  { threshold: 0, bonus: 0 },
];

const AFFILIATE_SHARE = 0.1;

function dealPerPost(followers: number): [number, number] {
  if (followers >= 1_000_000) return [1000, 5000];
  if (followers >= 250_000) return [400, 2000];
  if (followers >= 50_000) return [150, 800];
  if (followers >= 10_000) return [50, 250];
  return [10, 60];
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

export function InstagramEarningsCalculator() {
  const [followers, setFollowers] = React.useState(25000);
  const [reelsPerMonth, setReelsPerMonth] = React.useState(8);
  const [avgReelsViews, setAvgReelsViews] = React.useState(50000);
  const [postsPerMonth, setPostsPerMonth] = React.useState(12);
  const [affiliateRevenue, setAffiliateRevenue] = React.useState(0);
  const [niche, setNiche] =
    React.useState<keyof typeof NICHE_BRAND_DEAL_PER_POST>("beauty");
  const [accountType, setAccountType] =
    React.useState<keyof typeof ACCOUNT_TYPE_BRAND_MULT>("creator");
  const [region, setRegion] = React.useState<keyof typeof REGION_MULT>("us");

  const monthlyReelsViews = reelsPerMonth * avgReelsViews;

  // --- Reels bonus ---
  const bonusMult = BONUS_THRESHOLDS.find(
    (t) => followers >= t.threshold
  )?.bonus ?? 0;
  const bonusLow = monthlyReelsViews * bonusMult * 0.6;
  const bonusHigh = monthlyReelsViews * bonusMult * 1.4;

  // --- Brand deals ---
  const regionMult = REGION_MULT[region];
  const accountMult = ACCOUNT_TYPE_BRAND_MULT[accountType];
  const nicheMult = NICHE_BRAND_DEAL_PER_POST[niche];
  const [dealLowBase, dealHighBase] = dealPerPost(followers);
  const dealLow = dealLowBase * nicheMult * accountMult * regionMult;
  const dealHigh = dealHighBase * nicheMult * accountMult * regionMult;
  const brandLow = dealLow * Math.max(1, Math.round(postsPerMonth / 2));
  const brandHigh = dealHigh * Math.max(1, Math.round(postsPerMonth / 2));

  // --- Affiliate income ---
  const affiliateLow = affiliateRevenue * AFFILIATE_SHARE * 0.5;
  const affiliateHigh = affiliateRevenue * AFFILIATE_SHARE;

  const totalLow = bonusLow + brandLow + affiliateLow;
  const totalHigh = bonusHigh + brandHigh + affiliateHigh;

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          Instagram Earnings Calculator
        </CardTitle>
        <CardDescription>
          Estimate your potential earnings from Reels bonuses, brand deals, and
          affiliate income — based on followers, niche, engagement, and region.
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
              onChange={(e) =>
                setFollowers(Math.max(0, Number(e.target.value)))
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
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="accountType">Account type</Label>
            <Select
              value={accountType}
              onValueChange={(v) => setAccountType(v as typeof accountType)}
            >
              <SelectTrigger id="accountType" className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="micro">Micro (under 10K)</SelectItem>
                <SelectItem value="pro">Professional</SelectItem>
                <SelectItem value="creator">Creator</SelectItem>
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
                <SelectItem value="other">Other / Global</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="reels">Reels / month</Label>
            <Input
              id="reels"
              type="number"
              min={0}
              value={reelsPerMonth}
              onChange={(e) =>
                setReelsPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="views">Avg. Reels views</Label>
            <Input
              id="views"
              type="number"
              min={0}
              value={avgReelsViews}
              onChange={(e) =>
                setAvgReelsViews(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="posts">Posts / month</Label>
            <Input
              id="posts"
              type="number"
              min={0}
              value={postsPerMonth}
              onChange={(e) =>
                setPostsPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="affiliate">Monthly affiliate sales ($)</Label>
            <Input
              id="affiliate"
              type="number"
              min={0}
              value={affiliateRevenue}
              onChange={(e) =>
                setAffiliateRevenue(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
        </div>

        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="text-sm font-medium text-muted-foreground">
            Estimated monthly earnings
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Reels bonus</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(bonusLow)} – {formatUsd(bonusHigh)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Brand deals</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(brandLow)} – {formatUsd(brandHigh)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatUsd(dealLow)}–{formatUsd(dealHigh)} per post
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Affiliate income</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(affiliateLow)} – {formatUsd(affiliateHigh)}
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
            Based on {formatNumber(monthlyReelsViews)} monthly Reels views and{" "}
            {formatNumber(followers)} followers. These are estimates — real
            earnings vary by audience, engagement, and Instagram&apos;s bonus
            programs. See methodology below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
