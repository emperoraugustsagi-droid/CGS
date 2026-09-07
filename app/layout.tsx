import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./site.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Centre for Gender Studies | NSUK",
  description: "Centre for Gender Studies, Nasarawa State University, Keffi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
