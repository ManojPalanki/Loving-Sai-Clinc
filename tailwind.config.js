/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004ac6',
          container: '#2563eb',
        },
        surface: {
          DEFAULT: '#faf8ff',
          container: '#eaedff',
          lowest: '#ffffff',
        },
        text: {
          DEFAULT: '#131b2e',
          muted: '#57657a'
        }
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0,0,0,0.08)',
        'premium-hover': '0 20px 60px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}
