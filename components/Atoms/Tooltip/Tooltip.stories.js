import Tooltip from './Tooltip.twig';
import TooltipIcon from './Tooltip-Icon.twig';

export default {
  title: 'Design System/Atoms/Tooltip'
};


export const base = {
  render: (args) => Tooltip(args),
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Tooltip text',
    trigger: 'Hover Me',
    position: 'top' 
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The textt displayed inside the tooltip'
    },
    trigger: {
      control: 'text',
      description: 'The text that triggers the tooltip'
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relativz to the trigger element'
    }
  }
};

export const iconTrigger = {
    render: (args) => TooltipIcon(args),
    parameters: {
        layout: 'centered',
      },
    args: {
      text: 'Tooltip text',
      position: 'top' 
    },
    argTypes: {
      text: {
        control: 'text',
        description: 'The text displayed inside the tooltip'
      },
      position: {
        control: { type: 'select' },
        options: ['top', 'right', 'bottom', 'left'],
        description: 'Position of the tooltip relative to the trigger element'
      }
    }
  };
