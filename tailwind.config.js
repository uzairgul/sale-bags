/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["*"],
  theme: {
    screens: {
      'xsm': '630px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgg': '1184px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xlm': '1380px',
      // => @media (min-width: 1280px) { ... }

      'xll': '1485px',
      // => @media (min-width: 1485px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    fontFamily: {
      Inter: ['Inter', "san-serif"],
      Poppins: ['Poppins']
    },
    extend: {},
  },
  plugins: [],
}

