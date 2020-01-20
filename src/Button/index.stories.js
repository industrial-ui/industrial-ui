import Button from './story.svelte';

export default { title: 'Button' }

export const withText = () => ({
    Component: Button,
    props: {
        label: 'Button explanation',
    },
});
