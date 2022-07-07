/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.{edge,js,ts,vue,jsx,tsx}', // 👈
  ],
  theme: {
    extend: {
      colors: {
        login: '#1d243d',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'night'],
  },
}
