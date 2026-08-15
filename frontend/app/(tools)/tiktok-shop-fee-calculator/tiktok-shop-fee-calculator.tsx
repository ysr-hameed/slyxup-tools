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

const PROCESSING_RATE = 0.029;
const PROCESSING_FLAT = 0.3;

const REFERRAL_RATES: Record<string, number> = {
  general: 0.06,
  beauty: 0.06,
  fashion: 0.06,
  home: 0.06,
  sports: 0.06,
  toys: 0.06,
  electronics: 0.05,
  books: 0.05,
  food: 0.06,
};

const CATEGORY_LABELS: Record<string, string> = {
  general: "General / Other",
  beauty: "Beauty & Personal Care",
  fashion: "Fashion & Apparel",
  home: "Home & Living",
  sports: "Sports & Outdoor",
  toys: "Toys & Hobbies",
  electronics: "Electronics",
  books: "Books & Media",
  food: "Food & Beverage",
};

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function TikTokShopFeeCalculator() {
  const [price, setPrice] = React.useState(50);
  const [quantity, setQuantity] = React.useState(1);
  const [category, setCategory] =
    React.useState<keyof typeof REFERRAL_RATES>("general");
  const [shipping, setShipping] = React.useState(0);

  const saleTotal = price * quantity;
  const referralRate = REFERRAL_RATES[category];
  const referralFee = saleTotal * referralRate;
  const processingFee = saleTotal * PROCESSING_RATE + PROCESSING_FLAT;
  const totalFees = referralFee + processingFee + shipping;
  const net = saleTotal - totalFees;
  const keepPercent = saleTotal > 0 ? (net / saleTotal) * 100 : 0;

  const reset = () => {
    setPrice(50);
    setQuantity(1);
    setCategory("general");
    setShipping(0);
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          TikTok Shop Fee Calculator
        </CardTitle>
        <CardDescription>
          Work out exactly how much you keep per TikTok Shop sale after the
          referral fee and payment processing, by category.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price">Sale price ($)</Label>
            <Input
              id="price"
              type="number"
              min={0}
              step={0.01}
              value={price}
              onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={category}
              onValueChange={(v) => setCategory(v as typeof category)}
            >
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General / Other</SelectItem>
                <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                <SelectItem value="home">Home & Living</SelectItem>
                <SelectItem value="sports">Sports & Outdoor</SelectItem>
                <SelectItem value="toys">Toys & Hobbies</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="books">Books & Media</SelectItem>
                <SelectItem value="food">Food & Beverage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="shipping">Shipping you pay ($, optional)</Label>
            <Input
              id="shipping"
              type="number"
              min={0}
              step={0.01}
              value={shipping}
              onChange={(e) => setShipping(Math.max(0, Number(e.target.value)))}
            />
          </div>
        </div>

        <Separator />

        <div className="rounded-lg border bg-muted/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              Fee breakdown — {formatUsd(saleTotal)} order
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Reset
            </button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Referral fee</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(referralFee)}
              </p>
              <p className="text-xs text-muted-foreground">
                {Math.round(referralRate * 100)}% in{" "}
                {CATEGORY_LABELS[category]}
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">
                Payment processing
              </p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(processingFee)}
              </p>
              <p className="text-xs text-muted-foreground">2.9% + $0.30</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Shipping</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(shipping)}
              </p>
              <p className="text-xs text-muted-foreground">optional</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Total fees</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                {formatUsd(totalFees)}
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-foreground">
              You keep per sale
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-foreground">
              {formatUsd(net)}
            </p>
            <p className="text-xs text-muted-foreground">
              That&apos;s {keepPercent.toFixed(1)}% of the order value. Enter a
              target price to hit a profit margin. See methodology below.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}