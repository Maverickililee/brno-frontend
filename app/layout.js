import {  Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/index/Footer";
import Navbar from "@/components/global/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title:"BrnoWeb - Full-Stack , UI/UX & Web3 Experts",
description:"Brno Web is a creative agency specializing in crafting beautiful, functional websites that help businesses grow.",
  keywords: [
    "brno",
    "brnoweb",
    "brno web",
    "Web3 development",
    "web",
    "Next.js",
    "Node.js",
    "BRNO web agency",
        "smart contract development",
    "app development",
    "SEO optimization",
    "frontend development",
    "backend development",
    "website design",
    "digital solutions",
    "web agency",
        "full-stack development",
    "UI/UX design",
  ],   
url: "https://www.brnoweb.com",
        siteName: "Brno Web",
            type: "website",
openGraph:{
images:"https://brnoweb.com/brnoOg.png",

},
other:{
  "google-site-verification":"xP_gvdteQNG0Y06s6j5rtCkWwBSnUKYVOPEvbCQ_iIo",
},
twitter:{
  card:"summary_large_image",
  itle:"BrnoWeb - Full-Stack , UI/UX & Web3 Experts",
description:"Brno Web is a creative agency specializing in crafting beautiful, functional websites that help businesses grow.",
images:["https://brnoweb.com/brnoOg.png"],

},
alternates: {
  canonical: "https://www.brnoweb.com",
},

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
