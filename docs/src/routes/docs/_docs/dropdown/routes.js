import Tailwind from './tailwind.md';
import Semantic from './semantic.md';
import Spectre from './spectre.md';

export default {
  name: 'dropdown',
  tailwind: Tailwind,
  semantic: Semantic,
  spectre: Spectre,
  meta: {
    title: 'Dropdown component',
    description: ''
  },
  contents: [
    {
      slug: 'simple-example',
      text: 'Simple example',
    },
    {
      slug: 'open-on-hover',
      text: 'Open on hover effect',
    },
    {
      slug: 'custom-transition',
      text: 'Custom transition',
    },
    {
      slug: 'selection-dropdown',
      text: 'Selection dropdown',
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
