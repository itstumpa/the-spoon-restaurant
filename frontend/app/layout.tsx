import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  title: "The Spoon — Simple Ingredients. Soulful Flavors.",
  description:
    "Experience warm American hospitality at The Spoon. Fresh local ingredients, homestyle cooking, and a cozy atmosphere in Austin, Texas.",
  openGraph: {
    title: "The Spoon — Simple Ingredients. Soulful Flavors.",
    description:
      "Experience warm American hospitality at The Spoon. Fresh local ingredients, homestyle cooking, and a cozy atmosphere in Austin, Texas.",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
