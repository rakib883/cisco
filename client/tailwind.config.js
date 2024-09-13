/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "sliderBackground" :"url('/slider.jpg')",
        "bannerImage" : "url('/Banner.png')"
      }
    },
  },
  plugins: [],
}