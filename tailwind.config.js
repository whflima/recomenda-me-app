/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
