import type { Metadata, Viewport } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://halo-safety-ng.mchinyangwa.chatgpt.site");
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    title: "Halo — Your people. Your places. Your Halo.",
    description:
      "Keep your circle close with Halo for iPhone: live location sharing, personal privacy controls, check-ins, SOS, saved places, and 30-day trail replay.",
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
      title: "Halo — Your people. Your places. Your Halo.",
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
      title: "Halo — Your people. Your places. Your Halo.",
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
