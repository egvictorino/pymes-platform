/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
        default: '#1543AB',
        hover: '#1E366B',
        pressed: '#6d28d9',
        },
        secondary: {
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
        soul: {
          600: '#ec4899',
          700: '#be185d',
          800: '#9d174d',
        },
      },
    },
  },
};