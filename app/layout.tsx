import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    title: "Halo — Someone’s always looking out for you",
    description:
      "Halo is a personal safety app for trusted circles, with SOS alerts, checkpoints, live trip sharing, privacy controls, and location history.",
    applicationName: "Halo",
    metadataBase,
    keywords: [
      "Halo",
      "personal safety app",
      "Nigeria safety app",
      "live location sharing",
      "SOS alert",
      "trusted contacts",
    ],
    openGraph: {
      title: "Halo — Someone’s always looking out for you",
      description:
        "A calmer, more private way to keep the people you love close through every journey.",
      type: "website",
      siteName: "Halo",
      url: metadataBase,
      images: [
        {
          url: socialImage,
          width: 1778,
          height: 885,
          alt: "Halo personal safety app with a press-and-hold SOS screen and trusted-circle status cards",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Halo — Someone’s always looking out for you",
      description:
        "A calmer, more private way to keep the people you love close through every journey.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
