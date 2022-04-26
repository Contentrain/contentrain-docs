const color = require("./colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "content/**/*.md",
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `sections/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
      `./safelist.txt`,
    ],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        current: color.info[800],
        primary: color.primary,
        gray: color.info,
        blue:color.primary,
        green:color.success,
        orange:color.orange,
        red:color.danger,
        yellow:color.warning,
      },
    },
    colors: color,
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
  },
};
