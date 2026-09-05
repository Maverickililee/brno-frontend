import nextDynamic from "next/dynamic";
import Hero from "@/components/index/Hero";
import Services from "@/components/index/Services";
import Aboutus from "@/components/index/Aboutus";
import Whyus from "@/components/index/Whyus";
import { Suspense } from "react";
import Loading from "@/components/global/Loading";

// Lazy load heavy sections with suspense
const Faq = nextDynamic(() => import("@/components/index/Faq"), { suspense: true });
const Blogs = nextDynamic(() => import("@/components/index/Blogs"), { suspense: true });
const Contactus = nextDynamic(() => import("@/components/index/Contactus"), { suspense: true });

export const dynamic = 'force-dynamic';

async function fetchData(endpoint) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    { next: { revalidate: 300 } } // ISR support - 5 minutes
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

export default async function Home() {
  try {
    const [services, blogs, faq, heros, whyus, aboutus] = await Promise.all([
      fetchData("/api/services"),
      fetchData("/api/blogs"),
      fetchData("/api/faq"),
      fetchData("/api/heros"),
      fetchData("/api/whyus"),
      fetchData("/api/aboutus"),
    ]);

    return (
      <div>
        {/* Server components render instantly */}
        <Hero data={heros} />
        <Services data={services} />
        <Aboutus data={aboutus} />
        <Whyus data={whyus} />

        {/* Client-side lazy-loaded sections with loading */}
        <Suspense fallback={<Loading />}>
          <Faq data={faq} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Contactus />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Blogs data={blogs} />
        </Suspense>
      </div>
    );
  } catch (err) {
    console.error("Error fetching data:", err);

    return (
      <div className="min-h-[65vh] text-lg font-semibold flex items-center justify-center">
        Failed to fetch data. Please try again later!
      </div>
    );
  }
}
