import Instal from './installation.md';
import Configuration from './configuration.md';
import Conventions from './conventions/routes';
import DocStyling from './doc-styling.md';
import Plan from './plan.md';
import Button from './button.md';
import Dropdown from './dropdown/routes';

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
      Conventions,
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
          {
            slug: 'table',
            text: 'Table',
          },
        ],
      },
      {
        name: 'plan',
        component: Plan,
        meta: {
          title: 'Development plan',
          description: 'The Industrial-ui development roadmap. What is done and what is left for the future'
        },
      }
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
      Dropdown,
    ]
  },
];
