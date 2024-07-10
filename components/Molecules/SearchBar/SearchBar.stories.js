import SearchBar from './SearchBar.twig';

export default {
  title: 'Design System/Molecules/SearchBar'
};

export const base = {
  render: (args) => SearchBar(args),
  args: {
    placeholder: 'Search...',
    value: '',
    size: 'lg'
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg']
    }
  }
};
