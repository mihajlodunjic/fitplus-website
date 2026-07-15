import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL;

if (!site) {
  console.warn(
    "[fitplus] PUBLIC_SITE_URL is not set. Canonical metadata, sitemap, robots sitemap URL and absolute social URLs will be omitted until it is provided.",
  );
}

export default defineConfig({
  output: "static",
  site,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: site ? [sitemap()] : [],
});
