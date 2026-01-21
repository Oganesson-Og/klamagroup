import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: "USD" | "ZWL" = "USD"
): string {
  const formatter = new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(amount);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-ZW", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-ZW", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidZimbabwePhone(phone: string): boolean {
  // Matches: +263, 0263, 263, followed by 7X or 8X, then 7-8 digits
  const phoneRegex = /^(\+?263|0)?[78]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export function formatZimbabwePhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("263")) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith("0")) {
    return `+263${cleaned.slice(1)}`;
  }
  return `+263${cleaned}`;
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const formattedPhone = formatZimbabwePhone(phone).replace("+", "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}
