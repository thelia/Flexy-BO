import Illustration from './Illustration.twig';
import illustrations from './illustrations.json';

export default {
  title: 'Design System/Atoms/Illustrations'
};

export const list = {
  render: () => Illustration({ illustrations }),
};