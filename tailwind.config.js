/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme=>({
        "intern" : "url('/src/assets/events.jpeg')",
        "newsletter" : "url('/src/assets/newsletter.jpeg')",
        "bg" : "url('/src/assets/bg.jpeg')",
        "resources" : "url('/src/assets/resources.jpeg')",
        
      })
    },
  },
  plugins: [],
}