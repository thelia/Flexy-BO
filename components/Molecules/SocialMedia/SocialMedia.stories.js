import SocialMedia from './SocialMedia.twig';
import SocialMedias from './SocialMedias.twig';

export default {
  title: 'Design System/Molecules/SocialMedia'
};

export const list = () => SocialMedias();

export const base = {
  render: (args) => SocialMedia(args),
  args: {
    variant: 'black',
    icon: 'facebook',
    href: '#'
  },
  argTypes: {
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
