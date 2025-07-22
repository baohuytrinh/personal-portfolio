/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            inter: ['var(--font-inter)', 'sans-serif'],
            grotesk: ['var(--font-spacegrotesk)', 'sans-serif'],
          },
        },
    },
    plugins: [],
  }