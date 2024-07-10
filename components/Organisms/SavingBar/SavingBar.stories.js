import SavingBar from './SavingBar.twig';

export default {
  title: 'Design System/Organisms/SavingBar'
};

export const base = {
  render: (args) => SavingBar(args),
  args: {
    action: {
      label: 'Enregistrer',
      variant: 'primary'
    },
    secondaryAction: {
      label: 'Prévisualiser',
      variant: 'secondary',
      iconLeft: 'eye'
    },
    tertiaryAction: {
      label: 'Fermer',
      variant: 'tertiary',
      iconLeft: 'close'
    }
  },
  argTypes: {
    action: {
      control: { type: 'object' }
    },
    secondaryAction: {
      control: { type: 'object' }
    },
    tertiaryAction: {
      control: { type: 'object' }
    }
  }
};
