import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "The Daily — A fresh perspective",
    template: "%s | The Daily",
  },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAF9F6]">
        {children}

        <footer className="border-t border-line py-9 text-[#E2E2DA]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-6 ">
            <div>
              <Link className="inline-flex items-center gap-2 text-3xl font-bold tracking-tighter text-[#22241F]" href="/">
                the daily
                <span className="text-red-700">▧</span>
              </Link>
              <p className="text-[#65675F] text-[12px]">A fresh perspective. Every day.</p>
            </div>
            <a href="#top" className="text-[#22241F] text-[12px]">
              Back to top ↑
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
