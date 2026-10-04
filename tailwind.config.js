/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F2E5C8',
          300: '#E5D09E',
          400: '#D5B669',
          500: '#C5A059', // Brand Gold
          600: '#A9843F',
          700: '#8A672B',
          800: '#6B4E1F',
          900: '#4E3715',
          DEFAULT: '#C5A059',
          light: '#E6C878',
          glow: 'rgba(197, 160, 89, 0.35)',
        },
        dark: {
          DEFAULT: '#09090B',
          surface: '#121215',
          elevated: '#18181D',
          border: '#27272E',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3D999 0%, #C5A059 50%, #9C7934 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, #1c1a14 0%, #09090b 70%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(197, 160, 89, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(197, 160, 89, 0.45)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite',
      }
    },
  },
  plugins: [],
}
