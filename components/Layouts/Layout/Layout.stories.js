import { header } from '../../Organisms/Header/header';
import { sidebar } from '../../Organisms/Sidebar/sidebar';
import Layout from './Layout.twig';

export default {
  title: 'Design System/Layouts/Layout'
};

export const base = {
  render: (args) => Layout(args),
  play: () => {
    header();
    sidebar();
  }
};
