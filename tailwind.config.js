/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "icon-low-emphasis": "#a1a3a8",
        "icon-high-emphasis": "#424750",
        "icon-rating-0-2": "#f9bc00",
        "icon-warning": "#f9a825",
        "icon-primary": "#ef4056",
        "button-secondray": "#19bfd3",
        "button-disable": "#e0e0e2",
        "hint-text-error": "#b2001a",
        "hint-object-error": "#d32f2f",
        "secondary": {
          500: "#19bfd3",
        },
        "fresh": {
          700: "#029a49",
        }
      },
      fontFamily: {
        "iran-yekan": ["IRANYekan" , "sans-serif"]
      },
      aspectRatio: {
        "4/3": "4 / 3"
      }
    },
  },
  plugins: [],
};
