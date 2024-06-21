import ErrorState from './ErrorState.twig';

export default {
  title: 'Design System/Organisms/ErrorState'
};

export const base = {
  render: (args) => ErrorState(args),
  args: {
    code: '404',
    message: 'Page not found'
  },
  argTypes: {
    code: {
      control: {
        type: 'select',
        options: ['404', '500']
      }
    },
    message: {
      control: {
        type: 'text'
      }
    }
  }
};
