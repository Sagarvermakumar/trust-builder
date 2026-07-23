import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "../index.css";

export const metadata: Metadata = {
  title: "Ted's Woodworking Landing Page",
  description: "Get access to 16,000+ step-by-step woodworking plans, diagrams, and blueprints.",
  robots: "index, follow",
  openGraph: {
    title: "Ted's Woodworking Landing Page - 16,000 Plans",
    description: "Get access to 16,000+ step-by-step woodworking plans, diagrams, and blueprints.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ted's Woodworking Landing Page",
    description: "Get access to 16,000+ step-by-step woodworking plans, diagrams, and blueprints.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="paper-texture min-h-screen bg-[#faf8f5] text-[#2c241e] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
