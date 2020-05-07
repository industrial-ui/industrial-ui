import Tailwind from './tailwind.md';
import Semantic from './semantic.md';
import Spectre from './spectre.md';

export default {
  name: 'modal',
  tailwind: Tailwind,
  semantic: Semantic,
  spectre: Spectre,
  meta: {
    title: 'Modal window',
    description: 'Modal window with an overlay that moves visual focus from main window to itself'
  },
  contents: [
    {
      slug: 'simple-example',
      text: 'Simple example',
    },
    {
      slug: 'props',
      text: 'Properties',
    },
    {
      slug: 'configuration',
      text: 'Configuration',
    },
    {
      slug: 'slots',
      text: 'Slots',
    },
    {
      slug: 'markup',
      text: 'Resulting markup',
    },
  ],
}
