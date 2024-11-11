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
        'common-second-gray': '#94A3B8',
        'background-color': '#F1F5F9',
        'normal-blue': '#0D4DA2',
        
      },
      borderRadius: {
        'custom-10': '10px',
        'custom-12': '12px',
        'custom-14': '14px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
