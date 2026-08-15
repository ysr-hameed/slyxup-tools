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

const PROCESSING_RATE = 0.029;
const DEFAULT_COMMISSION = 0.08;

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function WhatnotFeeCalculator() {
  const [price, setPrice] = React.useState(25);
  const [quantity, setQuantity] = React.useState(1);
  const [commission, setCommission] = React.useState(DEFAULT_COMMISSION);
  const [shipping, setShipping] = React.useState(0);

  const saleTotal = price * quantity;
  const commissionFee = saleTotal * commission;
  const processingFee = saleTotal * PROCESSING_RATE;
  const totalFees = commissionFee + processingFee + shipping;
  const net = saleTotal - totalFees;
  const keepPercent = saleTotal > 0 ? (net / saleTotal) * 100 : 0;

  const reset = () => {
    setPrice(25);
    setQuantity(1);
    setCommission(DEFAULT_COMMISSION);
    setShipping(0);
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          Whatnot Fee Calculator
        </CardTitle>
        <CardDescription>
          See how much you keep per Whatnot live sale after the seller
          commission and payment processing.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="wprice">Sale price ($)</Label>
            <Input
              id="wprice"
              type="number"
              min={0}
              step={0.01}
              value={price}
              onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wquantity">Quantity</Label>
            <Input
              id="wquantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wcommission">Seller commission (%)</Label>
            <Input
              id="wcommission"
              type="number"
              min={0}
              step={0.5}
              value={Math.round(commission * 100)}
              onChange={(e) =>
                setCommission(Math.max(0, Number(e.target.value)) / 100)
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wshipping">Shipping you pay ($, optional)</Label>
            <Input
              id="wshipping"
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
              <p className="text-sm text-muted-foreground">Seller commission</p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(commissionFee)}
              </p>
              <p className="text-xs text-muted-foreground">
                {Math.round(commission * 100)}%
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">
                Payment processing
              </p>
              <p className="mt-1 font-mono text-lg font-semibold">
                −{formatUsd(processingFee)}
              </p>
              <p className="text-xs text-muted-foreground">2.9%</p>
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
              That&apos;s {keepPercent.toFixed(1)}% of the order value. See
              methodology below.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}