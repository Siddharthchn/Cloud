/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('700-800', '@media (min-width: 700px) and (max-width: 800px)');
      addVariant('800-900', '@media (min-width: 800px) and (max-width: 900px)');
      addVariant('900-1024', '@media (min-width: 900px) and (max-width: 1024px)');
    },
  ],
}
