import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: { 
        'common-white': 'rgba(217, 217, 217, 0.12)',
        'common-gray': '#94A3B8',
        'common-blue': '#254061',
        'background-color': '#F1F5F9',
        
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
