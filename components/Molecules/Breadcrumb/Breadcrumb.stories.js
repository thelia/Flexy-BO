import { breadcrumb } from './breadcrumb.js';
import Breadcrumb from './Breadcrumb.twig';

export default {
  title: 'Design System/Molecules/Breadcrumb'
};

export const Base = {
  render: (args) => Breadcrumb(args),
  args: {
    items: [
      { label: 'Page parante', href: '#' },
      { label: 'Page mère', href: '#' },
      { label: 'Page actuelle' }
    ]
  }
};

export const Lengthy = {
  render: (args) => Breadcrumb(args),
  play: () => {
    breadcrumb();
  },
  args: {
    items: [
      { label: 'Non visible', href: '#' },
      { label: 'Non visible', href: '#' },
      { label: 'Page parante', href: '#' },
      { label: 'Page mère', href: '#' },
      { label: 'Page actuelle' }
    ]
  }
};
