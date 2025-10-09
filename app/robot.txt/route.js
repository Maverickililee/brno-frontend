// app/robots.txt/route.js

export const dynamic = 'force-static'; // optional: static generation

export async function GET() {
  const robotsContent = `
User-agent: *
Disallow: []
Allow: /

Sitemap: https://www.brnoweb.com/sitemap.xml
`;

  return new Response(robotsContent.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
