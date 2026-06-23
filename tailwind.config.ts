import type { Config } from "tailwindcss";

const config: Config = {
  // Enable class-based dark mode if you plan to support dark theme toggling
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D0D0D",
          orange: "#FF6B00",
          lightOrange: "#FF8C42",
          softGray: "#F5F5F5",
          darkGray: "#2D2D2D",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(180deg, rgba(45, 45, 45, 0.4) 0%, rgba(13, 13, 13, 0.8) 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
