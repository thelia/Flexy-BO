import SnackBar from './SnackBar.twig';

export default {
  title: 'Design System/Organisms/SnackBar'
};

export const base = {
  render: (args) => SnackBar(args),
  args: {
    title: 'SnackBar title',
    close: true,
    content:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    variant: 'info',
    action: 'Bouton',
    secondaryAction: 'Bouton',
    icon: true
  },
  argTypes: {
    close: {
      control: { type: 'boolean' }
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error']
    },
    action: {
      control: { type: 'text' }
    },
    secondaryAction: {
      control: { type: 'text' }
    },
    link: {
      control: { type: 'object' },
      description: 'Object with label and href'
    }
  }
};
