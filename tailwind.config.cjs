/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html"
  ],
  safelist: [
    // Add any custom/dynamic classes here to prevent purging
    'text-6xl', 'md:text-5xl', 'text-4xl', 'md:text-6xl', 'text-3xl', 'md:text-5xl', 'text-xl', 'font-bold', 'font-semibold', 'font-normal',
    'w-[450px]', 'md:w-[450px]', 'md:h-[450px]', 'w-[300px]', 'h-[300px]', 'md:w-[600px]', 'md:h-[600px]'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
