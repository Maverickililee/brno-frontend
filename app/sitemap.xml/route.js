export const dynamic = "force-static"; // Ensures it's statically generated at build time

export async function GET() {
  try {
    const baseUrl = "https://www.brnoweb.com";
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      next: { revalidate: 3600 }, // refresh every hour
    });
    const blogs = await res.json();

    // Sort by latest first (optional)
    const sortedBlogs = blogs.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const blogUrls = sortedBlogs
      .map(
        (blog) => `
        <url>
          <loc>${baseUrl}/blog/${encodeURIComponent(blog.link)}</loc>
          <lastmod>${new Date(blog.updatedAt || blog.createdAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
      )
      .join("");

    const staticPages = [
      "",
      "about",
      "contact",
      "services",
      "blogs",
      "how-we-work",
      "faq",
    ]
      .map(
        (page) => `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === "" ? "1.0" : "0.7"}</priority>
        </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${staticPages}
      ${blogUrls}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response("Failed to generate sitemap", { status: 500 });
  }
}
