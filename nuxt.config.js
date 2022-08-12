import theme from "@nuxt/content-theme-docs";
import { generateSitemap } from "@nuxtjs/sitemap/lib/generator";
import pages from "./content/contentrain/content/en.json";

const createSitemapRoutes = async () => {
  const routes = [];
  for (const page of pages) {
    routes.push(`/${page.slug}`);
  }
  return routes;
};
export default theme({
  docs: {
    primaryColor: "#0543f6",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://docs.contentrain.io",
    gzip: true,
    // routes: generate
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "G-FYJK79MKFG",
      },
    ],
  ],
});
