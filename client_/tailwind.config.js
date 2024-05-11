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
        "header" : "#88a6f8",
        "background" : "#f7f7f7",
        "threadbg" : "#e7f6f1",
        "majorbg" : "#dee6f1",
        // "major" : "#fffff",
        "post-bt" : "#a2abfa",
        "anserBox" : '#f8f6f7',
        "anser" : '#fefefe',
        'hospital' : '#5e9e8d',
        'bg-post' : "#fefefe",
        "comment" : "#f5f4f9",
        'question' : "#065bb5",
        "all" : "#194d89",
        "bgmajor" : "#ebeef7",
        "bghotline" : "#7ab3f0"
      },
    },
  },
  plugins: [],
}

