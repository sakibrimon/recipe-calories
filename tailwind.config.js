import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: '#0BE58A',
      },
      screens: {
        'xl2': '1400px', // Custom breakpoint at 1400px
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

