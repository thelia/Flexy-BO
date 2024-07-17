/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{twig,ts,js,json}'],
  theme: {
    extend: {
      colors: {
        vermillon: {
          dark: 'var(--vermillon-dark)',
          DEFAULT: 'var(--vermillon)',
          medium: 'var(--vermillon-medium)',
          light: 'var(--vermillon-light)',
          lighter: 'var(--vermillon-lighter)',
          lightest: 'var(--vermillon-lightest)'
        },
        black: 'var(--black)',
        grey: {
          darker: 'var(--grey-darker)',
          dark: 'var(--grey-dark)',
          DEFAULT: 'var(--grey)',
          light: 'var(--grey-light)',
          lighter: 'var(--grey-lighter)',
          lightest: 'var(--grey-lightest)'
        },
        white: 'var(--white)',
        success: {
          darkest: 'var(--success-darkest)',
          dark: 'var(--success-dark)',
          DEFAULT: 'var(--success)',
          lightest: 'var(--success-lightest)'
        },
        error: {
          darkest: 'var(--error-darkest)',
          dark: 'var(--error-dark)',
          DEFAULT: 'var(--error)',
          light: 'var(--error-light)',
          lightest: 'var(--error-lightest)'
        },
        warning: {
          darkest: 'var(--warning-darkest)',
          DEFAULT: 'var(--warning)',
          light: 'var(--warning-light)',
          lightest: 'var(--warning-lightest)'
        },
        informative: {
          darkest: 'var(--informative-darkest)',
          DEFAULT: 'var(--informative)',
          lightest: 'var(--informative-lightest)'
        },
        validated: {
          darkest: 'var(--validated-darkest)',
          DEFAULT: 'var(--validated)',
          lightest: 'var(--validated-lightest)'
        },
        brown: 'var(--brown)',
        'brown-light': 'var(--brown-light)',
        'electric-blue': 'var(--electric-blue)',
        'electric-blue-light': 'var(--electric-blue-light)',
        purple: 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        lavender: 'var(--lavender)',
        'lavender-light': 'var(--lavender-light)',
        magenta: 'var(--magenta)',
        'magenta-light': 'var(--magenta-light)'
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
