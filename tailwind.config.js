/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',

      'primary': '#DA291C;',
      'primary-container': '#FFDAD4',
      'on-primary-container': '#7E1810',
      'on-primary-opacity-0.8' : 'rgba(255, 255, 255, 0.08)',
      'on-primary-opacity-0.16' : 'rgba(255, 218, 212, 0.16)',
      'on-primary-opacity-0.12' : 'rgba(255, 218, 212, 0.12)',
      'secondary': '#009CA6',
      'secondary-container': '#7DF4FF',
      'on-secondary-container': '#00727A',
      'tertiary': '#FDAE2D',
      'tertiary-container': '#FFDDB4',
      'on-tertiary-container': '#8D5801',
      'on-tertiary': '#141414',
      'gray-600' :'#595959',
      'gray-700' :'#434343',
      'gray-800' :'#262626',
      'gray-900' : 'rgba(31, 31, 31, 1)',
      'gray-300': '#D9D9D9',
      'gray-200' :"#F0F0F0",
      'gray-50' :'#FAFAFA'
      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      inset: {
        '70px': '70px',
        '71px': '71px',
        '72px': '72px',
        '73px': '73px',
        '74px': '74px',
        '75px': '75px',
      },
      transitionProperty: {
        'height': 'height 0.3s',
      },
      transitionDuration: {
        '0.1':'0.1s',
        '0.2':'0.2s',
        '0.3':'0.3s',
        '0.4':'0.4s',
        '0.5':'0.5s',
        '0.6':'0.6s',
        '0.7':'0.7s',
        '0.8':'0.8s',
        '0.9':'0.9s',
        '1':'1s',
        '2':'2s',
        '3':'3s',
        '4':'4s',
        '5':'5s',
        '6':'6s',
        '7':'7s',
        '8':'8s',
        '9':'9s',
        '10':'10s',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
      },
      flexBasis: {
        '100%':'100%',
        '40%': '40%',
        '20%': '20%',
        '50%': '50%',
        '60%': '60%',
        '30%': '30%',
        '70%': '70%',
        '80%': '80%',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '120':'30rem'
      },
      height: {
        '100':'100vh',
        '237': '59rem',
        '155': '38.75rem',
      },
      minHeight: {
        '80': '20rem',
      },
      lineHeight: {
        '21': '5rem',
      },
      maxHeight: {
        '237': '59rem',
        
      },
      borderRadius: {
        'r-50':'30px',
        '4xl': '2rem',
        'custom-100':'1.5rem 1.5rem 1.5rem  5.25rem',
        'bra-100':'1.5rem 1.5rem  5.25rem 1.5rem ',
        'bl-100':'0 0 0 5.25rem',
        'br-100':'0 0 5.25rem 0',

      },
      letterSpacing: {
        "0.5" : '0.031rem',
        "1.25" : '0.078rem',

      },
      backgroundPosition: {
        'positionXY':'0px -213px'
      }
    },
  },
  plugins: [],
}
