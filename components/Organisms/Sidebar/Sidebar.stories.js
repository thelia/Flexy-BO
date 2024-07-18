import Sidebar from './Sidebar.twig';
import { sidebar } from './sidebar';

export default {
  title: 'Design System/Organisms/Sidebar'
};

export const base = {
  render: (args) => Sidebar(args),
  play: () => sidebar()
};
