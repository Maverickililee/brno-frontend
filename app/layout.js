import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/index/Footer";
import Navbar from "@/components/global/Navbar";
import { Analytics } from "@vercel/analytics/next";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brno Web - Full-Stack , UI/UX & Web3 Experts",
  description:
    "Brno Web is a creative agency specializing in crafting beautiful, functional websites that help businesses grow.",
  keywords: [
  "Brno Web",
  "brno web agency",
  "brno web — web development",
  "brno web next.js agency",
  "brno web ui/ux design",
  "hire brno web developer",
  "brno web portfolio",
  "web development agency",
  "web design agency",
  "next.js development company",
  "full-stack web development",
  "ui ux design agency",
  "headless cms development",
  "ecommerce website development",
  "web agency brno",
  "web developer brno",
  "brno web design agency",
  "hire web developer brno",
  "web3 development agency",
  "dapp development services",
  "nft marketplace development",
  "smart contract development",
  "solidity smart contract developer",
  "defi app development",
  "blockchain integration services",
  "hire Next.js developer for production website",
  "Next.js website development company for startups",
  "headless CMS with Sanity & Next.js",
  "custom WordPress theme & Elementor development",
  "SEO-friendly eCommerce website development",
  "performance optimization for Next.js sites",
  "Next.js SEO best practices",
  "optimize Core Web Vitals on Vercel",
  "building accessible RTL websites with Next.js",
  "Web3 SEO content strategies",
  "headless commerce case study Next.js",
  "Next.js development",
  "React.js development",
  "Node.js backend development",
  "Sanity headless CMS",
  "Vercel deployment & performance"
],
  metadataBase: new URL("https://www.brnoweb.com"),
  url: "https://www.brnoweb.com",
  siteName: "Brno Web",
  type: "website",

  openGraph: {
    title: "Brno Web - Full-Stack, UI/UX & Web3 Experts",
    description:
      "Brno Web is a creative agency specializing in crafting beautiful, functional websites that help businesses grow.",
    url: "https://www.brnoweb.com",
    siteName: "Brno Web",
    type: "website",
    images: [
      {
        url: "https://www.brnoweb.com/brnoOg.png",
        width: 1200,
        height: 630,
        alt: "Brno Web Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brno Web - Full-Stack, UI/UX & Web3 Experts",
    description:
      "Brno Web is a creative agency specializing in crafting beautiful, functional websites that help businesses grow.",
    images: ["https://brnoweb.com/brnoOg.png"],
  },
  alternates: {
    canonical: "https://www.brnoweb.com",
  },
    other: {
    "google-site-verification": "xP_gvdteQNG0Y06s6j5rtCkWwBSnUKYVOPEvbCQ_iIo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <header>
        <Navbar />

        </header>
        <main className="w-full h-full">
        {children}
        </main>
        <Footer />

        {/* ✅ Analytics and Performance */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
