import Pagination from './Pagination.twig';

export default {
  title: 'Design System/Organisms/Pagination'
};

export const base = {
  render: (args) => Pagination(args),
  args: {
    currentPage: 1,
    totalPages: 10
  },
  argTypes: {
    currentPage: {
      control: {
        type: 'number'
      }
    },
    totalPages: {
      control: {
        type: 'number'
      }
    }
  }
};
