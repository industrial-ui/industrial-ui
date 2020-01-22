<script>
    import routes from './_docs/routes';
    import {stores} from '@sapper/app';

    let components = routes.reduce((accumulator, current) => {
        return [...accumulator, ...current.nested];
    }, []);

    const {page} = stores();
    $: segment = ($page.path.match(/.*\/(.*)$/) || [null, 'introduction'])[1];
    $: comp = (components.find(x => x.name === segment.toLowerCase()) || {}).component || null;
</script>

<svelte:component this={comp} />
