import theme from "@nuxt/content-theme-docs";
// import pages from "./content/contentrain/content/en.json";

// const createSitemapRoutes = async () => {
//   const routes = [];
//   for (const page of pages) {
//     routes.push(`/${page.slug}`);
//   }
//   console.log({ theme, routes });
//   return routes;
// };
// createSitemapRoutes();
export default theme({
  docs: {
    primaryColor: "#0543f6",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://docs.contentrain.io",
    gzip: true,
    routes: [
      "/users",
      "/typography",
      "/support",
      "/roles",
      "/plans",
      "/informations",
      "/headless-cms",
      "/project-options",
      "/getting-started",
      "/creating-new-project",
      "/creating-contents",
      "/color-palette",
      "/i18n",
      "/collections",
      "/starters",
      "/setup-your-project",
      "/fields",
      "/tutorials",
    ],
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
