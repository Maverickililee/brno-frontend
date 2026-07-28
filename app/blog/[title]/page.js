import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

import { notFound } from "next/navigation";

async function getBlogByTitle(link) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    next: { revalidate: 300 }, // ISR - 5 minutes
  });
  const blogs = await res.json();

  const decodedTitle = decodeURIComponent(link);
  return blogs.find((blog) => blog.link === decodedTitle) || null;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  const blogs = await res.json();

  return blogs.map((blog) => ({
    link: encodeURIComponent(blog.link),
  }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogByTitle(params.title);

  if (!blog) {
    return {
      title: "Blog Not Found | Brno Web",
      description: "The blog you’re looking for could not be found.",
      robots: "noindex, nofollow",
    };
  }
  const siteUrl = "https://www.brnoweb.com";
  const imageUrl = blog.image.startsWith("http")
    ? blog.image
    : `${siteUrl}${blog.image}`;
  return {
    title: `${blog.title} | Brno Web Blog`,
    description:
      blog.description?.slice(0, 155) ||
      "Read this article on Brno Web about web development, UI/UX, and Web3 insights.",
    alternates: {
      canonical: `${siteUrl}/blog/${encodeURIComponent(blog.link)}`,
    },
    openGraph: {
      title: `${blog.title} | Brno Web Blog`,
      description:
        blog.description?.slice(0, 155) ||
        "Discover the latest insights and tutorials from Brno Web.",
      url: `https://www.brnoweb.com/blog/${encodeURIComponent(blog.link)}`,
      siteName: "Brno Web",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Brno Web Blog`,
      description:
        blog.description?.slice(0, 155) ||
        "Discover the latest insights and tutorials from Brno Web.",
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { title } = params;
  const blog = await getBlogByTitle(title);

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-full py-20 relative  bg-stone-100 ">
      <div className="w-[65%] max-lg:w-[80%] max-md:w-[90%]  mx-auto p-6 shadow-2xl rounded-4xl overflow-hidden service-shadow border-stone-300 border">
     
                           <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${blog?.image}`}
          className="w-full max-h-[620px]  rounded-4xl border border-stone-300"
                             alt={blog.title}
                             width={500}
                             height={300}
                             unoptimized
                           />


        <h1 className="mt-6 text-4xl mb-6 font-bold leading-normal pb-6 border-stone-300 border-b text-main">
          {blog.title}
        </h1>
        <article
          className=" article-main  leading-relaxed "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></article>
        <Link
          href="/blogs"
          className="hover:text-white text-sm   flex items-center justify-center font-semibold gap-2 px-6 hover:bg-stone-800 w-fit py-3 text-stone-800 duration-300 text-center rounded-xl bg-[#00000050] border-2 border-stone-800"
        >
          <FaArrowLeft />
          Back to all blogs
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            image: `${process.env.NEXT_PUBLIC_API_URL}${blog.image}`,
            author: {
              "@type": "Organization",
              name: "Brno Web",
            },
            publisher: {
              "@type": "Organization",
              name: "Brno Web",
              logo: {
                "@type": "ImageObject",
                url: "https://www.brnoweb.com/logo.png",
              },
            },
            datePublished: blog.createdAt,
            dateModified: blog.updatedAt || blog.createdAt,
          }),
        }}
      />
    </main>
  );
}
