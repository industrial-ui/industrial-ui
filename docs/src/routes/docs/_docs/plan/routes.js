import Plan from './plan.md';

export default {
  name: 'plan',
  component: Plan,
  meta: {
    title: 'Development plan',
    description: 'The Industrial-ui development roadmap. What is done and what is left for the future'
  },
  contents: [
    {
      slug: 'create',
      text: 'Project creation',
    },
    {
      slug: 'dropdown',
      text: 'Dropdown component',
    },
    {
      slug: 'vue-react-support',
      text: 'Vue&React support',
    },
    {
      slug: 'npm-publish',
      text: 'Publish IUI to NPM',
    },
    {
      slug: 'other-components',
      text: 'Other components',
    },
    {
      slug: 'release',
      text: 'Release',
    },
  ],
}
