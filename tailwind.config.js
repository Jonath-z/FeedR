/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue: '#161fc8',
        white: '#ffffff',
        darkWhite: '#f5f5f5'
      },
    },
  },
  plugins: [],
};
