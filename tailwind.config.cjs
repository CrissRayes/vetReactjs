/** @type {import('tailwindcss').Config} */
module.exports = {
  // En content se indica en que archivos se va a agregar el codigo de css
  // si usa purge en lugar de content, es porque usa la version 2 de tailwind
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
