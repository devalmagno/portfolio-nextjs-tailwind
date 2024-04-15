import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          100: "#996dff",
          200: "#9466ff",
          300: "#8257e5",
          400: "#734bd1",
          500: "#6833e4",
          700: "#28203e"
        },
        'dark': {
          100: "#28203e",
          200: "#121214",
          300: "#1A1B21",
          400: "#161619",
        },
        'title': {
          100: "#c4c4cc",
          200: "#a8a8b3",
        },
        'bash': {
          green: "#13a10e",
          black: "#0c0c0c",
          purple: "#821791",
          blue: "#265981",
          yellow: "#c19c00"
        },
        'icon': {
          100: "#918E9B",
        }
      }
    },
  },
  plugins: [],
};
export default config;
