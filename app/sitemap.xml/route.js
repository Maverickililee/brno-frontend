// app/sitemap.xml/route.js

export const dynamic = 'force-static'; // optional

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  const blogs = await res.json();

  const sortedBlogs = blogs.sort((a, b) => (a._id < b._id ? 1 : -1));

  const blogUrls = sortedBlogs.map(
    (i) => `
      <url>
        <loc>https://www.brnoweb.com/blog/${i.title}</loc>
        <lastmod>${new Date(i.createdAt).toISOString()}</lastmod>
      </url>
    `
  ).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.brnoweb.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${blogUrls}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
