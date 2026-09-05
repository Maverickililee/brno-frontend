"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/global/Loading";
import BlogCardSkeleton from "@/components/global/BlogCardSkeleton";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 7) {
    const parts = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .split(" ");
    return `${parts[0]} ${parts[1]} - ${parts[2]}`;
  } else if (days >= 2) return `${days} days ago`;
  else if (days === 1) return `yesterday`;
  else if (hours >= 1) return `${hours} hours ago`;
  else if (minutes >= 1) return `${minutes} minutes ago`;
  else return `just now`;
}

function BlogCard({ i, index }) {
  return (
    <div key={i._id} className="blog-slide embla__slide !w-full  ">
      <Image
        src={i?.image || "/placeholder.png"}
        className="blog-image"
        alt={i.title}
        width={500}
        height={300}
        unoptimized
      />
      <div className="blog-card ">
        <h2 className="blog-card-title ">{i.title}</h2>
        <p className="blog-description ">{i.description}</p>
        <span className="blog-time ">
          <FaClock className="blog-time-icon" /> {i.time} min read -{" "}
          {timeAgo(i.createdAt)}
        </span>
        <Link href={`/blog/${i.id}`} className="blog-readmore ">
          Read Article <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 15;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((blogs) => {
        const sortedBlogs = [...blogs].sort((a, b) => (a._id < b._id ? 1 : -1));
        setData(sortedBlogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="w-full py-10 md:py-20 min-h-screen flex justify-center">
        <div className="w-[90%] flex flex-col lg:flex-row gap-10">
          {/* Sidebar skeleton */}
          <aside className="w-full lg:w-1/4 flex flex-col gap-6">
            <div className="h-12 bg-stone-200 rounded-xl animate-pulse" />
            <div className="flex flex-col gap-2">
              <div className="h-6 bg-stone-200 rounded animate-pulse w-1/2 mb-3" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-stone-200 rounded animate-pulse" />
              ))}
            </div>
          </aside>

          {/* Blog grid skeleton */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="h-8 bg-stone-200 rounded animate-pulse w-1/3" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
  if (error) return <div className="text-center py-10 text-lg">{error}</div>;

  const categories = ["All", ...new Set(data.map((blog) => blog.category))];

  const filteredData = data.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="w-full py-10 md:py-20 min-h-screen flex justify-center">
        <div className="w-[90%] flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex flex-col gap-6 lg:sticky lg:top-20">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-3 border-2 bg-white rounded-xl focus-visible:outline-none"
            />
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg mb-3 uppercase">
                Categories
              </h4>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`text-left px-2 py-2 border-b cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-main text-white"
                      : "hover:bg-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Blog grid */}
          <div className="flex-1 flex flex-col gap-6">
            <h4 className="text-2xl uppercase text-main font-semibold">
              {search === ""
                ? selectedCategory === "All"
                  ? "All Articles"
                  : selectedCategory
                : filteredData.length < 1
                ? "No blogs found for your search 🔍"
                : `Search result for "${search}"`}
            </h4>

            <div className="w-full grid   grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentBlogs.map((i, index) => (
                <BlogCard key={i._id} i={i} index={index} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-10 gap-2 flex-wrap">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => {
                  if (
                    i + 1 === 1 ||
                    i + 1 === totalPages ||
                    Math.abs(i + 1 - currentPage) <= 1
                  ) {
                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded ${
                          currentPage === i + 1
                            ? "bg-main text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  } else if (i === currentPage - 3 || i === currentPage + 1) {
                    return <span key={i}>...</span>;
                  }
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
