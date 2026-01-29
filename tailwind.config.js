/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#153c66',
        secondary: '#b71f67',
        accent: '#4CAF50',
        success: '#10b981',
        warning: '#f59e0b',
        light: '#f8fafc',
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'Jost', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
