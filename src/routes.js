import Home from './docs/index.svelte';
import Layout from './docs/_components/layout.svelte';
import Intro from './docs/intro.md';
import Button from './docs/button.md';
import Install from './docs/install.md';

export default [
    {
        name: '/',
        component: Home
    },
    {
        name: '/docs',
        layout: Layout,
        nestedRoutes: [
            {
                name: '/introduction',
                component: Intro,
            },
            {
                name: '/button',
                component: Button,
            },
            {
                name: '/install',
                component: Install,
            }
        ]
    }
]
