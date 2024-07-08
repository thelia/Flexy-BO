import IconTextChoiceCard from './IconTextChoiceCard.twig';

export default {
  title: 'Design System/Molecules/ChoiceCards/IconTextChoiceCard'
};

export const base = {
  render: (args) => IconTextChoiceCard(args),
  args: {
    text: 'Label',
    variant: 'sm',
    iconLeft: 'french',
    iconRight: 'long-arrow-right',
    disabled: false
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['sm', 'md']
    },
    text: {
      control: { type: 'text' }
    },
    iconLeft: {
      control: { type: 'text' }
    },
    iconRight: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};
