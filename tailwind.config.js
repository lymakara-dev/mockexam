import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-kantumruy-pro)", "var(--font-sans)"],
        mono: ["var(--font-mono)"],
        kantumruy: ["var(--font-kantumruy-pro)"],
      },
      colors: {
        primary: {
          DEFAULT: "#06598F",
          background: "#F1F5F9",
          grey: "#64748B",
          secondgrey: "#94A3B8",
          // foreground: "var(--color-primary-foreground)",
        },
        background: "#F1F5F9",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
