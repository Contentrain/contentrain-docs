import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#0543f6",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://docs.contentrain.io",
    gzip: true,
    // routes: [
    //   {
    //     path: "/headless-cms",
    //     changefreq: "daily",
    //     priority: 1,
    //   },
    // ],
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
