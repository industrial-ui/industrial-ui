import Install from './installation.md';
import Conventions from './conventions/routes';
import Configuration from './configuration/routes';
import DocStyling from './doc-styling/routes';
import Plan from './plan/routes';
import Button from './button/index.md';
import Dropdown from './dropdown/routes';

export default [
  {
    title: 'Get started',
    nested: [
      {
        name: 'installation',
        component: Install,
        meta: {
          title: 'Installation',
          description: 'Get started with industrial-ui right now by following these simple steps of installation the library',
        },
      },
      Configuration,
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
  {
    title: 'Contributors',
    nested: [
      Conventions,
      DocStyling,
      Plan,
    ],
  },
];
