/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold': {},
        },
        '.btn-secondary': {
          '@apply px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold': {},
        },
        '.btn-danger': {
          '@apply px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold': {},
        },
        '.container-main': {
          '@apply max-w-7xl mx-auto px-4': {},
        },
      })
    },
  ],
}
