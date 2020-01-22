<script>
    import components from './_docs/routes';
    import {stores} from '@sapper/app';

    const {page} = stores();
    $: segment = ($page.path.match(/.*\/(.*)$/) || [null, 'introduction'])[1];
    $: comp = components.find(x => x.name === segment.toLowerCase()).component || null;
</script>

<svelte:component this={comp} />
