/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add paths to your files
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide], // Use the imported plugin
};
