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

const TIER_PRICE = { t1: 4.99, t2: 9.99, t3: 24.99 } as const;
const TWITCH_SPLIT = 0.5;
const BIT_VALUE = 0.01;
const PRIME_SUB_VALUE = 2.5;

const NICHE_ADS_CPM: Record<string, number> = {
  gaming: 3,
  justchatting: 2,
  irl: 2,
  music: 3,
  sports: 4,
  esports: 4,
  creative: 3,
  music_performance: 3,
  variety: 3,
};

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

export function TwitchEarningsCalculator() {
  const [tier1Subs, setTier1Subs] = React.useState(50);
  const [tier2Subs, setTier2Subs] = React.useState(5);
  const [tier3Subs, setTier3Subs] = React.useState(2);
  const [primeSubs, setPrimeSubs] = React.useState(20);
  const [giftedSubs, setGiftedSubs] = React.useState(10);
  const [bitsPerMonth, setBitsPerMonth] = React.useState(50000);
  const [avgViewers, setAvgViewers] = React.useState(100);
  const [adsHours, setAdsHours] = React.useState(60);
  const [donations, setDonations] = React.useState(300);
  const [niche, setNiche] =
    React.useState<keyof typeof NICHE_ADS_CPM>("gaming");

  // Subs (50% split)
  const subRevenue =
    tier1Subs * TIER_PRICE.t1 * TWITCH_SPLIT +
    tier2Subs * TIER_PRICE.t2 * TWITCH_SPLIT +
    tier3Subs * TIER_PRICE.t3 * TWITCH_SPLIT +
    primeSubs * PRIME_SUB_VALUE +
    giftedSubs * TIER_PRICE.t1 * TWITCH_SPLIT;

  // Bits ($0.01 each)
  const bitRevenue = bitsPerMonth * BIT_VALUE;

  // Ads (CPM per 1,000 ad impressions)
  const adImpressions = Math.round((adsHours / 60) * avgViewers * 1.2) * 1000;
  const adRevenue = (adImpressions / 1000) * NICHE_ADS_CPM[niche];
  const adLow = adRevenue * 0.6;
  const adHigh = adRevenue * 1.4;
  const adMid = (adLow + adHigh) / 2;

  const total = subRevenue + bitRevenue + adMid + donations;

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          Twitch Earnings Calculator
        </CardTitle>
        <CardDescription>
          Estimate your monthly Twitch income from subscriptions (50% split),
          Bits, ad revenue, and donations based on your viewers and activity.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="tier1">Tier 1 subs ($4.99)</Label>
            <Input
              id="tier1"
              type="number"
              min={0}
              value={tier1Subs}
              onChange={(e) =>
                setTier1Subs(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tier2">Tier 2 subs ($9.99)</Label>
            <Input
              id="tier2"
              type="number"
              min={0}
              value={tier2Subs}
              onChange={(e) =>
                setTier2Subs(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tier3">Tier 3 subs ($24.99)</Label>
            <Input
              id="tier3"
              type="number"
              min={0}
              value={tier3Subs}
              onChange={(e) =>
                setTier3Subs(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prime">Prime subs (~$2.50)</Label>
            <Input
              id="prime"
              type="number"
              min={0}
              value={primeSubs}
              onChange={(e) =>
                setPrimeSubs(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gifted">Gifted subs</Label>
            <Input
              id="gifted"
              type="number"
              min={0}
              value={giftedSubs}
              onChange={(e) =>
                setGiftedSubs(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bits">Bits / month</Label>
            <Input
              id="bits"
              type="number"
              min={0}
              value={bitsPerMonth}
              onChange={(e) =>
                setBitsPerMonth(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="viewers">Avg. concurrent viewers</Label>
            <Input
              id="viewers"
              type="number"
              min={0}
              value={avgViewers}
              onChange={(e) =>
                setAvgViewers(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adsHours">Stream hours / month</Label>
            <Input
              id="adsHours"
              type="number"
              min={0}
              value={adsHours}
              onChange={(e) =>
                setAdsHours(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="donations">Donations / month ($)</Label>
            <Input
              id="donations"
              type="number"
              min={0}
              value={donations}
              onChange={(e) =>
                setDonations(Math.max(0, Number(e.target.value)))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="niche">Stream category</Label>
            <Select
              value={niche}
              onValueChange={(v) => setNiche(v as typeof niche)}
            >
              <SelectTrigger id="niche" className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="esports">Esports</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="justchatting">Just Chatting</SelectItem>
                <SelectItem value="irl">IRL</SelectItem>
                <SelectItem value="variety">Variety</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="text-sm font-medium text-muted-foreground">
            Estimated monthly earnings
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Subscriptions</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(subRevenue)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bits</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(bitRevenue)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ads</p>
              <p className="mt-1 font-mono text-xl font-semibold">
                {formatUsd(adLow)} – {formatUsd(adHigh)}
              </p>
              <p className="text-xs text-muted-foreground">
                ~{formatNumber(adImpressions)} impressions
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="mt-1 font-mono text-2xl font-semibold">
                {formatUsd(total)}
              </p>
              <p className="text-xs text-muted-foreground">
                subs + bits + ads + donations
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Based on a 50/50 sub split, $0.01 per Bit, and an estimated
            {NICHE_ADS_CPM[niche]} CPM in the {niche} category. These are
            estimates — real earnings vary. See methodology below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
