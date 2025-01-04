import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        vampire: {
          dark: '#0A0A0A',
          blood: '#8A0303',
          gray: '#1F1F1F',
          light: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
