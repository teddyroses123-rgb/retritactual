/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        terracotta: {
          50: '#FDF7F0',
          100: '#FAEBD7',
          200: '#F4D3AE',
          300: '#EEB98C',
          400: '#E8A169',
          500: '#D2691E',
          600: '#B8591A',
          700: '#9E4916',
          800: '#843912',
          900: '#6A2A0E',
        },
        sage: {
          50: '#F7F8F5',
          100: '#EEF1E8',
          200: '#DDE4D1',
          300: '#C1CDB0',
          400: '#A5B68F',
          500: '#87A96B',
          600: '#739157',
          700: '#5F7943',
          800: '#4B612F',
          900: '#37491B',
        },
        gold: {
          50: '#FFFEF7',
          100: '#FFFCEF',
          200: '#FFF9DF',
          300: '#FFF5CF',
          400: '#FFF1BF',
          500: '#DAA520',
          600: '#C7951D',
          700: '#B4851A',
          800: '#A17517',
          900: '#8E6514',
        },
        warm: {
          50: '#FEFEFE',
          100: '#F8F8F8',
          200: '#F0F0F0',
          300: '#E8E8E8',
          400: '#E0E0E0',
          500: '#F5F5DC',
          600: '#E5E5CB',
          700: '#D5D5BA',
          800: '#C5C5A9',
          900: '#B5B598',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};