import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Klama - Modern Software Solutions for Zimbabwe",
    template: "%s | Klama",
  },
  description:
    "Transform your Zimbabwean business with modern websites, web apps, mobile solutions, workflow automation, and AI-powered tools. Free consultation available.",
  keywords: [
    "Zimbabwe software",
    "web development Zimbabwe",
    "Harare web design",
    "mobile apps Zimbabwe",
    "business automation",
    "AI solutions Africa",
  ],
  authors: [{ name: "Klama Technologies" }],
  creator: "Klama Technologies",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://klama.co.zw",
    siteName: "Klama",
    title: "Klama - Modern Software Solutions for Zimbabwe",
    description:
      "Transform your Zimbabwean business with modern websites, web apps, mobile solutions, and AI-powered tools.",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Klama - Modern Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klama - Modern Software Solutions for Zimbabwe",
    description:
      "Transform your Zimbabwean business with modern websites, web apps, mobile solutions, and AI-powered tools.",
    images: ["/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
