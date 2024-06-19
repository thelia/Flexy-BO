import Range from './Range.twig';
import { range } from '../../../assets/js/range';

export default {
  title: 'Design System/Atoms/Range'
};

export const base = {
  render: () => Range(),
  play: () => {
    range();
  }
};
