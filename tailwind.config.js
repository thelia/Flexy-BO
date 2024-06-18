/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{twig,ts,js,json}'],
  theme: {
    extend: {
      colors: {
        vermillon: {
          light: 'var(--vermillon-light)',
          lighter: 'var(--vermillon-lighter)',
          lightest: 'var(--vermillon-lightest)',
          dark: 'var(--vermillon-dark)'
        },
        charcoal: {
          light: 'var(--charcoal-light)',
          medium: 'var(--charcoal-medium)',
          dark: 'var(--charcoal-dark)'
        },
        pearl: {
          light: 'var(--pearl-light)',
          medium: 'var(--pearl-medium)'
        },
        grey: {
          medium: 'var(--grey-medium)',
          dark: 'var(--grey-dark)'
        },
        white: 'var(--white)',
        red: {
          light: 'var(--red-light)',
          DEFAULT: 'var(--red)'
        },
        'background-red': 'var(--background-red)',
        green: {
          light: 'var(--green-light)',
          dark: 'var(--green-dark)'
        },
        wheat: {
          light: 'var(--wheat-light)',
          DEFAULT: 'var(--wheat)',
          dark: 'var(--wheat-dark)'
        },
        'ultramarine-blue': {
          light: 'var(--ultramarine-blue-light)',
          dark: 'var(--ultramarine-blue-dark)'
        },
        'caribbean-green': 'var(--caribbean-green)',
        purple: 'var(--purple)',
        turquoise: 'var(--turquoise)',
        brown: 'var(--brown)',
        'apple-green': 'var(--green)',
        pink: 'var(--pink)'
      },
      screens: {
        xs: '320px',
        '3xl': '1920px',
        max2xl: { max: '1680px' },
        maxXl: { max: '1366px' },
        maxLg: { max: '1024px' },
        maxMd: { max: '768px' },
        maxSm: { max: '390px' },
        maxXs: { max: '321px' }
      }
    },
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      '2xl': '1680px'
    },
    fontSize: {
      '2xs': 'var(--font-size-2xs)',
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '272px'
          },
          '@screen sm': {
            maxWidth: '340px'
          },
          '@screen md': {
            maxWidth: '664px'
          },
          '@screen lg': {
            maxWidth: '864px'
          },
          '@screen xl': {
            maxWidth: '1206px'
          }
        },
        '.container-medium': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '272px'
          },
          '@screen sm': {
            maxWidth: '340px'
          },
          '@screen md': {
            maxWidth: '540px'
          }
        },
        '.container-small': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '272px'
          },
          '@screen sm': {
            maxWidth: '340px'
          },
          '@screen md': {
            maxWidth: '400px'
          }
        }
      });
    }
  ]
};
