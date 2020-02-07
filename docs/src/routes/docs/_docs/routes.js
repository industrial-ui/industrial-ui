import Instal from './installation.md';
import Configuration from './configuration.md';
import Button from './button.md';
import DocStyling from './doc-styling.md';
import Conventions from './conventions.md';

export default [
  {
    title: 'Get started',
    nested: [
      {
        name: 'installation',
        component: Instal,
        meta: {
          title: 'Installation',
          description: 'Get started with industrial-ui right now by following these simple steps of installation the library',
        },
      },
      {
        name: 'configuration',
        component: Configuration,
        meta: {
          title: 'Configuration',
          description: 'Introduction to industrial-ui. How to configure it to make your development as joyful as possible'
        }
      },
      {
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
        ],
      },
    ],
  },
  {
    title: 'Components',
    nested: [
      {
        name: 'button',
        component: Button,
        meta: {
          title: 'Button component',
          description: ''
        }
      },
      {
        name: 'doc-styling',
        component: DocStyling,
        meta: {
          title: 'Documentation Components',
          description: ''
        },
        contents: [
          {
            slug: 'headings',
            text: 'Headings',
          },
          {
            slug: 'simple-text',
            text: 'Simple text',
          },
          {
            slug: 'lists',
            text: 'Lists',
          },
          {
            slug: 'text-types',
            text: 'Text types',
          },
          {
            slug: 'code',
            text: 'Code',
          },
          {
            slug: 'showcase-block',
            text: 'Showcase block',
          },
        ],
      },
    ]
  },
];
