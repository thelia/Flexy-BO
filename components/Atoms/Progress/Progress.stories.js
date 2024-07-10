import Progress from './Progress.twig';

export default {
  title: 'Design System/Atoms/Progress'
};

export const base = {
  render: (args) => Progress(args),
  args: {
    progress: 50
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  }
};
