import LanguageMenu from './LanguageMenu.twig';
import ConfigMenu from './ConfigMenu.twig';
import UserMenu from './UserMenu.twig';

export default {
  title: 'Design System/Molecules/NavElements'
};

export const languageMenu = {
  render: (args) => LanguageMenu(args)
};

export const configMenu = {
  render: (args) => ConfigMenu(args)
};

export const userMenu = {
  render: (args) => UserMenu(args)
};
