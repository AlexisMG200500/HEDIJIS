/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0D0F',
          900: '#12161A',
          800: '#181D22',
        },
        gold: {
          200: '#F3E5AB',
          400: '#D4AF37',
          600: '#997D24',
        },
        emerald: {
          deep: '#0A5C36',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serifAccent: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #997D24 0%, #D4AF37 45%, #F3E5AB 70%, #D4AF37 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #0A5C36 0%, #10B981 60%, #047857 100%)',
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(212, 175, 55, 0.45)',
        emerald: '0 0 40px -10px rgba(16, 185, 129, 0.45)',
      },
    },
  },
  plugins: [],
}
