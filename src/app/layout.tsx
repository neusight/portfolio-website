import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { PatentGradientDefs } from "@/components/site/patent-gradient-defs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seankwatkins.com"),
  title: {
    default: "Sean Watkins — Senior Product Designer",
    template: "%s — Sean Watkins",
  },
  description:
    "Sean Watkins is a senior product designer with 15+ years building AI-powered enterprise products, currently designing enterprise pricing experiences at Kroger.",
  openGraph: {
    title: "Sean Watkins — Senior Product Designer",
    description:
      "Sean Watkins is a senior product designer with 15+ years building AI-powered enterprise products, currently designing enterprise pricing experiences at Kroger.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <div className="grain-overlay" />
        <PatentGradientDefs />
        <ScrollProgress />
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
