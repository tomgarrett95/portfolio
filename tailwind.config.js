module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        teal: {
          light: '#90ddf0',
          DEFAULT: '#2c666e',
          dark: '#07393c',
          },
        offWhite: {
          DEFAULT: '#f0edee'
        },
        nearBlack: {
          DEFAULT: '#0a090c',
        },  
      },
      fontFamily: {
        Kreon: ['Kreon', 'serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {
        splashImage: "url('./assets/images/teal2.jpg')",
      },
      },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}