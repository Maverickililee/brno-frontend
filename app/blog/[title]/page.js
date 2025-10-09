import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';



async function getBlogByTitle(title) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    next: { revalidate: 60 }, // ISR (optional)
  });
  const blogs = await res.json();

  const decodedTitle = decodeURIComponent(title);
  return blogs.find((blog) => blog.title === decodedTitle) || null;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  const blogs = await res.json();

  return blogs.map((blog) => ({
    title: encodeURIComponent(blog.title),
  }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogByTitle(params.title);

  if (!blog) {
    return {
      title: "Blog Not Found | Brno Web",
      description: "The blog you’re looking for could not be found.",
    };
  }

  return {
    title: `${blog.title} | Brno Web Blog`,
    description:
      blog.description?.slice(0, 155) ||
      "Read this article on Brno Web about web development, UI/UX, and Web3 insights.",
    openGraph: {
      title: `${blog.title} | Brno Web Blog`,
      description:
        blog.description?.slice(0, 155) ||
        "Discover the latest insights and tutorials from Brno Web.",
      url: `https://www.brnoweb.com/blog/${encodeURIComponent(blog.title)}`,
      siteName: "Brno Web",
      images: [
        {
          url: `https://www.brnoweb.com${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Brno Web Blog`,
      description:
        blog.description?.slice(0, 155) ||
        "Discover the latest insights and tutorials from Brno Web.",
      images: [`https://www.brnoweb.com${blog.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { title } = params;
  const blog = await getBlogByTitle(title);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
   <main className="w-full py-20 relative  bg-stone-100 ">
    <div className='w-[65%] max-lg:w-[80%] max-md:w-[90%]  mx-auto p-6 shadow-2xl rounded-4xl overflow-hidden service-shadow border-stone-300 border'>
              <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image}`}
          alt={blog.title}
          width={2000}
          height={2000}
          priority
          className="w-full max-h-[620px]  rounded-4xl border border-stone-300"
        />

      <h1 className="mt-6 text-4xl mb-6 font-bold leading-normal pb-6 border-stone-300 border-b text-main">{blog.title}</h1>
      <article className=" article-main  leading-relaxed " dangerouslySetInnerHTML={{__html:blog.content}}>
      </article>
      <Link href="/blogs" className='hover:text-white text-sm   flex items-center justify-center font-semibold gap-2 px-6 hover:bg-stone-800 w-fit py-3 text-stone-800 duration-300 text-center rounded-xl bg-[#00000050] border-2 border-stone-800'>
<FaArrowLeft/>
Back to all blogs

</Link>
    </div>

    </main>
  );
}
