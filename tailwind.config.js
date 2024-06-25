/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{twig,ts,js,json}'],
  theme: {
    extend: {
      colors: {
        vermillon: {
          dark: '#ff4822',
          DEFAULT: '#ff7036',
          medium: '#ffb698',
          light: '#ffe5db',
          lighter: '#ffede5',
          lightest: '#fff5f1'
        },
        black: '#282828',
        grey: {
          darker: '#424242',
          dark: '#545454',
          DEFAULT: '#808080',
          lighter: '#d6d6d6',
          lightest: '#f5f5f5'
        },
        white: '#ffffff',
        success: {
          darkest: '#067d44',
          dark: '#08a65a',
          DEFAULT: '#37e17b',
          lightest: '#f8fffb'
        },
        error: {
          darkest: '#b70101',
          dark: '#d00000',
          DEFAULT: '#eb0000',
          light: '#ff6666',
          lightest: '#ffe1e1'
        },
        warning: {
          darkest: '#9e5400',
          DEFAULT: '#ffa800',
          light: '#ffdd9c',
          lightest: '#fff9ee'
        },
        informative: {
          darkest: '#298094',
          DEFAULT: '#40b1ca',
          lightest: '#e9fbff'
        },
        validated: {
          darkest: '#23806f',
          DEFAULT: '#40cab1',
          lightest: '#eefffc'
        },
        brown: '#a33900',
        'brown-light': '#eb8e5c',
        'electric-blue': '#0531a8',
        'electric-blue-light': '#6f95fb',
        purple: '#5f0ab5',
        'purple-light': '#ba7df8',
        lavender: '#c800cc',
        'lavender-light': '#fb4dff',
        magenta: '#cc006e',
        'magenta-light': '#ff5cb4'
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
