/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', '"SF Pro Text"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"SF Pro Display"', '"Avenir Next"', 'system-ui', 'sans-serif']
      },
      screens: {
        xs: '360px'
      }
    }
  },
  plugins: []
};
