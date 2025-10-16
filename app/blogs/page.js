// app/blogs/page.js
import BlogsPageClient from "../../components/global/BlogPageClient";

export const metadata = {
  title: "Brno Web Blog – Web Development, Design & Tech Insights",
  description:
    "Explore Brno Web’s latest articles on web design, development, SEO, and digital innovation.",
  keywords: [
    "Brno Web blog",
    "web development blog",
    "web design articles",
    "Next.js tutorials",
    "frontend development",
    "backend development",
    "SEO optimization tips",
    "UI/UX design",
    "modern web agency insights",
  ],
  alternates: {
    canonical: "https://www.brnoweb.com/blogs",
  },
  openGraph: {
    title: "Brno Web Blog – Web Development, Design & Tech Insights",
    description:
      "Read the latest insights on web design, full-stack development, SEO, and digital strategy from Brno Web.",
    url: "https://www.brnoweb.com/blogs",
    siteName: "Brno Web",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.brnoweb.com/og/blogs-banner.webp",
        width: 1200,
        height: 630,
        alt: "Brno Web Blog – Web Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brno Web Blog – Web Development, Design & Tech Insights",
    description:
      "Discover design, development, and SEO insights from Brno Web’s creative and technical experts.",
    images: ["https://www.brnoweb.com/og/blogs-banner.webp"],
    creator: "@brnoweb",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "Technology",
}

;

export default function Page() {
  return <BlogsPageClient />;
}
