import Tabulation from './Tabulation.twig';
import TabulationLanguage from './TabulationLanguage.twig';
import './tabulation.css';
import './Tabulation.js';

export default {
  title: 'Design System/Molecules/Tabulation',
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab items',
      notification: { control:'text', defaultValue:'Label', description:'Text of the label in the tab item with notification'},
      disable: { control:'boolean', defaultValue:'false', description:'State of the current tab item'},
      notification: { control:'text', defaultValue:'Label', description:'Text of the label in the tab item with notification'},
      href: { control:'text', defaultValue:'#', description:'Link of the '}
 
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
};


export const TabulationStory = {
    render: (args) => Tabulation(args),
parameters: {
    backgrounds: {
        default: 'grey',
        values: [
          {
            name: 'light',
            value: '#FFFFFF',
          },
          {
            name: 'grey',
            value: '#F5F5F5',
          },
        ],
      },
},
args: {
  type: 'standard',
  tabs: [
    { label: 'Tabulation 1' },
    { label: 'Tabulation 2', state: 'initial' },
  ],
  classes: '',
}
};

export const Tabulation_Language = {
  render: (args) => TabulationLanguage(args),
parameters: {
  backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'grey',
          value: '#F5F5F5',
        },
      ],
    },
},
args: {
  href: '#',
tabs: [
  { label: 'Tabulation 1' },
  { label: 'Tabulation 2', state: 'initial' },
],
classes: '',
}
};