<script>
    import Layout from '../_components/layout.svelte';
    export let segment;
</script>

<Layout {segment}>
    <slot />
</Layout>
