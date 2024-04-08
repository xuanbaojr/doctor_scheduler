/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
   "./app/**/*.{js,jsx,ts,tsx}",
   "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        "header" : "#88a6f8",
        "bg" : "#fdf4f4",
        "blue-1" :"#c7d9ff",
        "blue-2" : "#a5c7fc",
        "avatar-1" : "#d9d9d9",
        "avatar-2" : "#9b9090",
        "bgavatar" : "#ececec",
        "threadbg" : "#e7f6f1",
        "majorbg" : "#dee4f0",
        "major" : "#b7a7a8",
        "post-bt" : "#a2abfa",
        "anserBox" : '#f8f6f7',
        "anser" : '#fefefe',
        'hospital' : '#5e9e8d',
      },
    },
  },
  plugins: [],
}

