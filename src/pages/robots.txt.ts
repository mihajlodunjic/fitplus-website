export function GET() {
  const siteOrigin = import.meta.env.PUBLIC_SITE_URL;
  const sitemapLine = siteOrigin ? `Sitemap: ${new URL("/sitemap-index.xml", siteOrigin).toString()}` : "";
  const body = [`User-agent: *`, `Allow: /`, sitemapLine].filter(Boolean).join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
