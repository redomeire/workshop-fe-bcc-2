/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#FFE7AB',
        'raisin-black': '#262729',
        'smoke-white': '#f3f3f3',
        brown: '#B29F89',
        cream: '#E4D8D1',
      },
    },
  },
  plugins: [],
};
