import { text } from 'stream/consumers';

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
        interaction: {
          primary: {
            default: '#1643A8',
            hover: '#10327D',
            pressed: '#0B2152',
          },
           secondary: {
          default: '#DEE4ED',
          hover: '#B6BBC3',
          pressed: '#8E9298',
        },
        },
        text: {
          primary: '#111111',
          secondary: '#4b5563',
          disabled: '#9ca3af',
          white: '#ffffff',
        },
      },
    },
  },
};