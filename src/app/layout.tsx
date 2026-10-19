import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer, MinimalFooter } from "@/components/layout/Footer";
import { FooterGate } from "@/components/layout/FooterGate";
import { HideOnAuth } from "@/components/layout/HideOnAuth";
import { ProgressSteps } from "@/components/layout/ProgressSteps";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peace Room | Peace9",
  description:
    "Peace Room helps two sides of a conflict move from competing requests to a shared agreement, guided privately by AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-peace-white text-peace-heading">
        <HideOnAuth>
          <Header />
          <ProgressSteps />
        </HideOnAuth>
        {children}
        <FooterGate full={<Footer />} minimal={<MinimalFooter />} />
      </body>
    </html>
  );
}
