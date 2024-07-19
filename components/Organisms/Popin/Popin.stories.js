import Popin from './Popin.twig';
import PopinWithTrigger from './PopinWithTrigger.twig';
import { popin } from './popin';

export default {
  title: 'Design System/Organisms/Popin'
};

export const base = {
  render: (args) => Popin(args),
  play: () => popin(),
  args: {
    title: 'Ici un titre',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/illustrations/sécurité.png',
    checkbox: {
      label: "Ici une optin que l'utilisateur peut checker",
      name: 'popin-checkbox'
    },
    link: {
      label: 'Ici un lien',
      href: '#'
    },
    action: 'Bouton',
    secondaryAction: 'Bouton',
    open: true,
    id: 'popin-base'
  },
  argTypes: {
    checkbox: {
      control: { type: 'object' }
    },
    action: {
      control: { type: 'text' }
    },
    secondaryAction: {
      control: { type: 'text' }
    },
    link: {
      control: { type: 'object' }
    }
  }
};

export const withTrigger = {
  render: (args) => PopinWithTrigger(args),
  play: () => popin()
};
