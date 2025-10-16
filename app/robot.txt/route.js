export const dynamic = "force-static"; // generate once at build

export async function GET() {
  const robotsContent = `
User-agent: *
Allow: /

# Optional: Block sensitive or admin paths
Disallow: /admin
Disallow: /dashboard
Disallow: /api

Sitemap: https://www.brnoweb.com/sitemap.xml
`;

  return new Response(robotsContent.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
