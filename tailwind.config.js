import { type Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#334155',
        accent: '#60a5fa',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config