import Compact from './Classic.twig';

export default {
  title: 'Design System/Molecules/Button'
};

const types = ['primary', 'secondary', 'tertiary', 'quartenary', 'destructive'];
const icons = ['copy', 'eye', 'edit', 'close'];

export const classic = {
  render: (args) => Compact(args),
  args: {
    customText: 'Button',
    variant: 'primary',
    icon_left: 'none',
    icon_right: 'none',
    data: {}
  },
  argTypes: {
    variant: {
      options: types,
      control: { type: 'radio' }
    },
    icon_left: {
      options: ['none', ...icons],
      control: { type: 'radio' }
    },
    icon_right: {
      options: ['none', ...icons],
      control: { type: 'radio' }
    },
    href: {
      control: { type: 'text' }
    },
    data: {
      control: { type: 'object' }
    }
  }
};
