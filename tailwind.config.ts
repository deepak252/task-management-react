/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 1px 8px 2px #BDBDBD',
      },
      colors: {
        primary: {
          DEFAULT: '#646DDF',
        },
        secondary: '#020865',
        green: {
          DEFAULT: '#49B638',
          200: '#E8FFE4',
          600: '#51B42E',
        },
        red: {
          DEFAULT: '#FA4733',
          200: '#FEECEC',
          600: '#BA1A1A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        13: '13px',
        15: '15px',
        17: '17px',
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeOut: 'fadeOut 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      zIndex: {
        dropdown: 50,
        navbar: 200,
        modal: 500,
        toast: 990,
        loader: 1000,
      },
    },
  },
  darkMode: 'class',
}
