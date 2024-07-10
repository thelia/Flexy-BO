import RadioChoiceCard from './RadioChoiceCard.twig';

export default {
  title: 'Design System/Molecules/ChoiceCards/RadioChoiceCard'
};

export const base = {
  render: (args) => RadioChoiceCard(args),
  args: {
    text: 'Label',
    size: 'sm',
    disabled: false,
    description: 'ici une courte description',
    active: false
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg']
    },
    text: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    description: {
      control: { type: 'text' }
    },
    active: {
      control: { type: 'boolean' }
    }
  }
};
