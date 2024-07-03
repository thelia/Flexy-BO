import Link from './Link.twig';

export default {
  title: 'Design System/Molecules/Link',
  argTypes: {
    label: {
      control: 'text',
      description: 'Text that should be displayed for the link'
    },
    classes: {
      control: 'text',
      description: 'Tailwind or CSS classes to apply to the link for styling'
    },
    href: {
      control: 'text',
      description: 'URL that the link should navigate to'
    },
    target: {
      control: 'text',
      description:
        'Specifies where to open the linked document (e.g., _blank for a new tab)'
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'State of the link if true then the style disabled is applied to the link'
    },
    error: {
      control: { type: 'boolean' },
      description:
        'State of the link if true then the style error is applied to the link'
    },
    iconLeft: {
      control: 'text',
      description:
        'Name of the icon that should be on the left side of the link'
    },
    iconRight: {
      control: 'text',
      description:
        'Name of the icon that should be on the right side of the link'
    },
    iconSize: {
      control: 'text',
      description: 'CSS classes to define the size of the icon'
    }
  }
};

export const Default = {
  render: (args) => Link(args),
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Link',
    classes: '',
    href: '#',
    target: '',
    disabled: false,
    error: false,
    iconLeft: 'arrow-left',
    iconRight: 'arrow-right',
    iconSize: 'h-5 w-5'
  }
};
