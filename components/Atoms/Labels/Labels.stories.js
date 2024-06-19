import Labels from './Labels.twig';

export default {
  title: 'Design System/Atoms/Labels'
};

export const list = {
  render: (args) => Labels(args),
  args: {
    text: 'Label text'
  },
  argTypes: {
    text: {
      control: 'text'
    }
  }
};
