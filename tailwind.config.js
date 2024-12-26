import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      myFont: ['American Captain'],
      myFont2: ['Gidole Regular'],
    },
  },
  plugins: [daisyui],
}
