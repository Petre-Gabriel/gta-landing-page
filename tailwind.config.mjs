/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF1F80",
        secondary: "#E3EE34",
        subheading: "#D7D7D7",
        dark: "#191919",
      },
    },
  },
  plugins: [],
};
