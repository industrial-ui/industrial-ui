import Conventions from './index.md';

export default {
  name: 'conventions',
  component: Conventions,
  meta: {
    title: 'UI Conventions',
    description: 'The philosophy behind the industrial-ui project and how to live and code with it easily',
  },
  contents: [
    {
      slug: 'naming',
      text: 'Naming',
    },
    {
      slug: 'ssr-compatibility',
      text: 'SSR compatibility',
    },
    {
      slug: 'framework-support',
      text: 'Framework support',
    },
    {
      slug: 'styling',
      text: 'Styling',
    },
    {
      slug: 'event-dispatch',
      text: 'Event dispatching',
    },
    {
      slug: 'logic',
      text: 'Logic',
    },
    {
      slug: 'slots',
      text: 'Slots',
    },
    {
      slug: 'transitions',
      text: 'Transitions',
    },
  ],
};
