import SocialMedia from './SocialMedia.twig';
import SocialMedias from './SocialMedias.twig';

export default {
  title: 'Design System/Molecules/SocialMedia'
};

export const list = {
  render: (args) => SocialMedias(args),
  args: { size: 'w-4 h-4' },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['w-8 h-8', 'w-10 h-10', 'w-14 h-14', 'w-20 h-20']
    }
  }
};

export const base = {
  render: (args) => SocialMedia(args),
  args: {
    size: 'w-4 h-4',
    variant: 'black',
    icon: 'facebook',
    href: '#'
  },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['w-8 h-8', 'w-10 h-10', 'w-14 h-14', 'w-20 h-20']
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['black', 'white']
    },
    icon: {
      control: {
        type: 'select'
      },
      options: ['github', 'x', 'facebook']
    },
    href: {
      control: {
        type: 'text'
      }
    }
  }
};
