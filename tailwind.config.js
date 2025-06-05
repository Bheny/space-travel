// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          barlow: ['"Barlow"', 'sans-serif'],
          barlowCondensed: ['"Barlow Condensed"', 'sans-serif'],
          bellefair: ['"Bellefair"', 'serif'],
        },
      },
    },
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  }
  