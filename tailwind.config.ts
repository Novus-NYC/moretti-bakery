import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bakery: {
          ink:      "#1A1208",
          inkSoft:  "#3D2F1E",
          muted:    "#7A6554",
          subtle:   "#AE9E8F",
          line:     "#E8DDD4",
          surface:  "#FFFFFF",
          bg:       "#FAF7F3",
          cream:    "#FDF6EB",
          rose:     "#C8523A",
          roseDeep: "#A33E28",
          gold:     "#C9943A",
          goldLight:"#F0D4A0",
          sage:     "#7A9E7E",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        sub:     ["var(--font-sub)", "Montserrat", "sans-serif"],
        body:    ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(26,18,8,0.20)",
        card: "0 1px 0 rgba(26,18,8,0.04), 0 8px 24px -16px rgba(26,18,8,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
