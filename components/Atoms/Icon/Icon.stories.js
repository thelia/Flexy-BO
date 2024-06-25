import Icon from './Icon.twig';
import icons from './icons.json';

export default {
  title: 'Design System/Atoms/Icons'
};

export const list = {
  render: (args) => Icon({ ...args, icons }),
  args: {
    size: 'h-5 w-5'
  },
  argTypes: {
    size: {
      options: ['h-5 w-5', 'h-8 w-8', 'h-12 w-12'],
      control: { type: 'radio' }
    }
  }
};
