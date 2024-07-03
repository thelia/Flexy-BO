import MainMenuButton from './MainMenuButton.twig';
import SubMenuButton from './SubMenuButton.twig';

export default {
  title: 'Design System/Molecules/MenuButton'
};

export const base = {
  render: (args) => MainMenuButton(args),
  args: {
    label: 'Dashboard',
    selected: false,
    hasSubMenus: true
  }
};

export const subMenu = {
  render: (args) => SubMenuButton(args),
  args: {
    label: 'Toutes mes commandes',
    selected: false,
    count: 24
  }
};
