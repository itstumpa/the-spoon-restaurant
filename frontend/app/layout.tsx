import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Spoon — Where Mediterranean Meets the Table",
  description:
    "Farm-fresh Mediterranean cuisine in Austin, TX. Inspired by sun-drenched coasts, crafted with passion, and served with warmth.",
  openGraph: {
    title: "The Spoon — Where Mediterranean Meets the Table",
    description:
      "Farm-fresh Mediterranean cuisine in Austin, TX. Inspired by sun-drenched coasts, crafted with passion, and served with warmth.",
    type: "website",
    locale: "en_US",
    siteName: "The Spoon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.variable, inter.variable)}>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
