/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        card: '#aecadf',
        headcard: '#bbd7ec',
        search: '#1e1e1e',
        light: '',
        dark: '#111015',
        blur: 'rgba(255,255,255,0.4)',
      },
    },
  },
  plugins: [],
}
