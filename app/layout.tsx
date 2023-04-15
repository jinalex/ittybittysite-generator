import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "itty.bitty.site generator",
  description: "Anything you can dream, we'll make (as an itty.bitty.site)",
  twitter: {
    card: "summary_large_image",
    title:
      "itty.bitty.site generator - ChatGPT Plugin that generates itty.bitty.site URLs",
    description: "Anything you can dream, we'll make (as an itty.bitty.site)",
    creator: "@iamalexjin",
  },
  metadataBase: new URL("https://ittybittysite-generator.vercel.app"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
