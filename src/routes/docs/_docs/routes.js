import Intro from './introduction.md';
import Instal from './installation.md';
import Button from './button.md';
import DocStyling from './doc-styling.md';
import Conventions from './conventions.md';

export default [
  {
    title: 'Get started',
    nested: [
      {
        name: 'introduction',
        component: Intro,
        meta: {
          title: 'Introduction',
          description: 'Introduction to industrial-ui library of unstyled components. Philosophy behind the project, ideas, plans for the future'
        }
      },
      {
        name: 'installation',
        component: Instal,
        meta: {
          title: 'Installation',
          description: 'Get started with industrial-ui right now by following these simple steps of installation the library',
        },
      },
      {
        name: 'conventions',
        component: Conventions,
        meta: {
          title: 'UI Conventions',
          description: 'The philosophy behind the industrial-ui project and how to live and code with it easily',
        },
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
