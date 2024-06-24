import Logo from './Logo.twig';

export default {
  title: 'Design System/Atoms/Logos'
};

export const logo = {
render: (args) => Logo(args),
parameters: {
    layout: 'centered',
    backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#FFFFFF',
          },
          {
            name: 'dark',
            value: '#282828',
          },
        ],
      },
},
args:  {
    type: 'thelia',
    theme: 'dark',
    path: '/images/placeholder-logo.svg',
    alt: 'Thelia Logo',
  },
  argTypes: {
    type: {
      options: ['placeholder', 'thelia'],
      control: { type: 'radio' },
      defaultValue: 'placeholder',
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
      defaultValue: 'light',
      description: 'Select the theme for the Thelia Logotype',
      if: { arg: 'type', eq: 'thelia' },
    },
    path: {
      control: 'text',
      description: 'Path to the logo image'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the logo image',
      defaultValue: 'Placeholder Logo',
    },
  }
  };
