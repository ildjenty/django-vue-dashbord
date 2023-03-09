/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/***/**/*.{js,vue}',
    './src/**/*.{js,vue}',
    './src/*.{js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'main-primary': '#42b883',
        'main-secondary': '#187f58',
        'light-primary': '#ededed',
        'light-secondary': '#cacaca',
        'dark-primary': '#2a2a2a',
        'dark-secondary': '#3a3a3a',
      },
    },
  },
  darkMode: 'class',
};
