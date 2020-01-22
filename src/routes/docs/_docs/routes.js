import Intro from './introduction.md';
import Instal from './installation.md';
import Button from './button.md';

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
    ]
  },
];
