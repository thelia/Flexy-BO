import { userMenuButton } from '../../Molecules/UserMenuButton/userMenuButton.js';
import Header from './Header.twig';
import { header } from './header.js';

export default {
  title: 'Design System/Organisms/Header'
};

export const base = {
  render: (args) => Header(args),
  play: () => {
    header();
    userMenuButton();
  }
};
