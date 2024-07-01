import Tag from './Tag.twig';
import tagFunction from './Tag.js';

export default {
  title: 'Design System/Molecules/Tag'
};

export const Base = {
  render: (args) => Tag(args),
  args: {
    customText: "Commande validée",
    icon: "trash",
  },
  argTypes: {
    variant: {
      options: ['validated', 'error', 'vermillon'],
      control: { type: 'select' },
    },
  },
};

export const Action = {
  render: (args) => Tag(args),
  play: () => {
    tagFunction()
  },
  args: {
    customText: "Commande validée",
    icon: "trash",
    href: "",
    onClick: {},
  },
  argTypes: {
    variant: {
      options: ['validated', 'error', 'vermillon'],
      control: { type: 'select' },
    },
    closeOnClick: {
      control: { type: 'boolean' }
    },
  },
};