import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bakery: {
          ink:      "#24130E",
          inkSoft:  "#513128",
          muted:    "#7A625A",
          subtle:   "#A88D82",
          line:     "#E7D6CF",
          surface:  "#FFFFFF",
          bg:       "#FFF9F4",
          cream:    "#F8E9DA",
          rose:     "#B9473F",
          roseDeep: "#8F2F2A",
          gold:     "#D4A23F",
          goldLight:"#F5D57E",
          sage:     "#607E66",
          pistachio:"#DCE8C8",
          berry:    "#6E1F35",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cinzel", "serif"],
        sub:     ["var(--font-sub)", "Barlow Condensed", "sans-serif"],
        body:    ["var(--font-body)", "Lora", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -30px rgba(36,19,14,0.35)",
        card: "0 1px 0 rgba(36,19,14,0.04), 0 14px 28px -22px rgba(36,19,14,0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
