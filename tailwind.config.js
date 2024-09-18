/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        'custom-pink': '#ff0082',
        'custom-pink-hover': '#e60076',
      },
    },
  },
  plugins: [[require('tailwind-hamburgers')]],
}

