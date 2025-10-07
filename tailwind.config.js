/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary : "#D8E63C",
        blue: "#17184B",
        purple: '#273287',
        violet: '#D6B4FC',
        lightBlue: '#D3DDE7',
        white: '#F0EEE9'
      },
      fontFamily :{
        lato: ['Lato-Regular', 'sans-serif'],
        'lato-bold': ['Lato-Bold', 'sans-serif'],
        'lato-black': ['Lato-Black', 'sans-serif'],
        'lato-light': ['Lato-Light', 'sans-serif'],
        'lato-italic': ['Lato-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
