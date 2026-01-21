"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, FileSearch } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const auditRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  websiteUrl: z.string().url("Please enter a valid URL"),
  industry: z.string().optional(),
  painPoints: z.string().optional(),
});

type AuditRequestFormData = z.infer<typeof auditRequestSchema>;

const industries = [
  "Mining & Quarrying",
  "Retail & Trade",
  "Transport & Logistics",
  "Manufacturing",
  "Agriculture & Agro",
  "Healthcare & Clinics",
  "Private Schools",
  "Construction",
  "Hospitality",
  "Professional Services",
  "Other",
];

// Replace with your Formspree form ID
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_AUDIT_FORM_ID";

export function AuditRequestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<AuditRequestFormData>({
    resolver: zodResolver(auditRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      websiteUrl: "",
      industry: "",
      painPoints: "",
    },
  });

  async function onSubmit(data: AuditRequestFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast({
        variant: "success",
        title: "Audit request received!",
        description: "We'll analyze your website and send you a report within 48 hours.",
      });

      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or contact us via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Tendai Moyo"
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="tendai@company.co.zw"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            placeholder="+263 77 456 9384"
            {...form.register("phone")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company (Optional)</Label>
          <Input
            id="company"
            placeholder="Your Company Ltd"
            {...form.register("company")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="websiteUrl">Website URL *</Label>
        <Input
          id="websiteUrl"
          placeholder="https://yourcompany.co.zw"
          {...form.register("websiteUrl")}
        />
        {form.formState.errors.websiteUrl && (
          <p className="text-sm text-destructive">
            {form.formState.errors.websiteUrl.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          onValueChange={(value) => form.setValue("industry", value)}
          defaultValue={form.getValues("industry")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="painPoints">What challenges are you facing? (Optional)</Label>
        <Textarea
          id="painPoints"
          placeholder="e.g., Slow loading, not mobile-friendly, no leads from website..."
          rows={4}
          {...form.register("painPoints")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <FileSearch className="h-4 w-4 mr-2" />
            Request Free Audit
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        We&apos;ll analyze your website&apos;s performance, security, SEO, and mobile-friendliness.
        Report delivered within 48 hours.
      </p>
    </form>
  );
}
