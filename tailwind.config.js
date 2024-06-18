/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{twig,ts,js,json}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        darkMain: 'var(--darkMain)',
        lightCharbon: 'var(--lightCharbon)',
        mediumCharbon: 'var(--mediumCharbon)',
        darkCharbon: 'var(--darkCharbon)',
        grey: 'var(--grey)',
        mediumGrey: 'var(--mediumGrey)',
        lightGrey: 'var(--lightGrey)',
        lightPearl: 'var(--lightPearl)',
        mediumPearl: 'var(--mediumPearl)',
        carot: 'var(--carot)',
        green: 'var(--green)',
        blue: 'var(--blue)',
        error: 'var(--error)',
        danger: 'var(--danger)',
        success: 'var(--success)',
        info: 'var(--info)',
        darkVermillon: 'var(--darkVermillon)',
        vermillon: 'var(--vermillon)',
        lightVermillon: 'var(--lightVermillon)',
        lighterVermillon: 'var(--lighterVermillon)',
        greyMedium: 'var(--greyMedium)',
        pearlMedium: 'var(--pearlMedium)',
        greyDark: 'var(--greyDark)',
        white: 'var(--white)',
        red: 'var(--red)',
        redLight: 'var(--redLight)',
        backgroundRed: 'var(--backgroundRed)',
        greenDark: 'var(--greenDark)',
        greenLight: 'var(--greenLight)',
        ocre: 'var(--ocre)',
        mauve: 'var(--mauve)',
        turquoise: 'var(--turquoise)',
        electricBlue: 'var(--electricBlue)',
        ocreLight: 'var(--ocreLight)',
        mauveLight: 'var(--mauveLight)',
        turquoiseLight: 'var(--turquoiseLight)',
        electricBlueLight: 'var(--electricBlueLight)',
        backgroundLightVermillon: 'var(--backgroundLightVermillon)',
        wheatDark: 'var(--wheatDark)',
        wheat: 'var(--wheat)',
        wheatLight: 'var(--wheatLight)',
        ultramarineBlue: 'var(--ultramarineBlue)',
        ultramarineBlueLight: 'var(--ultramarineBlueLight)'
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
