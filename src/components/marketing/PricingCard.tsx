"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl border ${
        popular
          ? "border-primary shadow-lg scale-105"
          : "bg-card"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground"> {period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href="/contact">
        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
