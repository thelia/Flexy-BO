import UserMenuButton from './UserMenuButton.twig';
import { userMenuButton } from './userMenuButton';

export default {
  title: 'Design System/Molecules/UserMenuButton'
};

export const base = {
  render: (args) => UserMenuButton(args),
  play: () => userMenuButton(),
  args: {
    name: 'Bruce Wayne',
    avatar: 'https://via.placeholder.com/150',
    active: false,
    variant: 'lg'
  },
  argTypes: {
    name: {
      control: { type: 'text' }
    },
    avatar: {
      control: { type: 'text' }
    },
    active: {
      control: { type: 'boolean' }
    },
    variant: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'lg']
    }
  }
};
