"use client";
import Whyus from "@/components/index/Whyus";
import Hero from "@/components/index/Hero";
import Services from "@/components/index/Services";
import Aboutus from "@/components/index/Aboutus";
import Faq from "@/components/index/Faq";
import Contactus from "@/components/index/Contactus";
import Blogs from "@/components/index/Blogs";
import { useEffect, useState } from "react";
import Loading from "@/components/global/Loading";
// app/page.js


export default function Home() {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
  Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/heros`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/whyus`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/aboutus`).then(res => res.json()),
  ])
.then(([services, blogs, faq, heros, whyus, aboutus]) => {
        setData({ services, blogs, faq, heros, whyus, aboutus });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);
  

  if (loading) return <Loading/>;
  if (error) return <div className="min-h-[65vh] text-lg font-semibold flex items-center justify-center">{error}, Try again later!</div>;
  
  return (
 
<div >



<Hero data={data.heros}/>
<Services data={data?.services}/>
<Aboutus data={data?.aboutus}/>
<Whyus data={data?.whyus}/>
 <Faq data={data?.faq}/>
<Contactus/>
<Blogs data={data?.blogs}/> 
</div>

  );
}
