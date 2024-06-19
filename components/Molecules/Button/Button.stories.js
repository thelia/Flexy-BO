import Button from './Button.twig';

export default {
  title: 'Design System/Molecules/Button'
};

export const base = {
  render: (args) => Button(args),
  args: {
    text: 'Button',
    level: 'primary',
    href: '#',
    target: '_self',
    type: 'button',
    tag: 'button'
  },

  argTypes: {
    text: { control: 'text' },
    level: {
      control: 'select',
      options: ['primary', 'secondary', 'link', 'small']
    },
    href: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    tag: { control: 'select', options: ['button', 'a'] }
  }
};
