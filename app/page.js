import dynamic from "next/dynamic";
import Hero from "@/components/index/Hero";
import Services from "@/components/index/Services";
import Aboutus from "@/components/index/Aboutus";
import Whyus from "@/components/index/Whyus";
import { Suspense } from "react";
import Loading from "@/components/global/Loading";

// Lazy load heavy sections with suspense
const Faq = dynamic(() => import("@/components/index/Faq"), { suspense: true });
const Blogs = dynamic(() => import("@/components/index/Blogs"), { suspense: true });
const Contactus = dynamic(() => import("@/components/index/Contactus"), { suspense: true });

export const revalidate = 10;

export default async function Home() {
  try {
    const [services, blogs, faq, heros, whyus, aboutus] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, { cache: "no-store" }).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, { cache: "no-store" }).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`, { cache: "no-store" }).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/heros`, { cache: "no-store" }).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/whyus`, { cache: "no-store" }).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/aboutus`, { cache: "no-store" }).then(res => res.json()),
    ]);

    const data = { services, blogs, faq, heros, whyus, aboutus };

    return (
      <div>
        {/* Server components render instantly */}
        <Hero data={data.heros} />
        <Services data={data.services} />
        <Aboutus data={data.aboutus} />
        <Whyus data={data.whyus} />

        {/* Client-side lazy-loaded sections with loading */}
        <Suspense fallback={<Loading />}>
          <Faq data={data.faq} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contactus />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Blogs data={data.blogs} />
        </Suspense>
      </div>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="min-h-[65vh] text-lg font-semibold flex items-center justify-center">
        Failed to fetch data. Try again later!
      </div>
    );
  }
}
