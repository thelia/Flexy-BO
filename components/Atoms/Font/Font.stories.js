import Title from './Title.twig';
import Paragraph from './Paragraph.twig';
import Other from './Other.twig';

import './font.css';

export default {
  title: 'Design System/Atoms/Fonts'
};

export const titles = () => Title();

export const paragraphs = {
  render: (args) => Paragraph(args),
  args: {
    weight: 'font-normal',
    italic: false,
    lineThrough: false
  },
  argTypes: {
    weight: {
      options: ['font-light', 'font-normal', 'font-semibold', 'font-bold'],
      control: {
        type: 'select'
      }
    },
    italic: {
      control: { type: 'boolean' }
    },
    lineThrough: {
      control: { type: 'boolean' }
    }
  }
};

export const other = () => Other();
