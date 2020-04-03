<script>
  import routes from './_docs/routes';
  import {theme} from './_helpers/active-theme';
  import {stores} from '@sapper/app';

  let components = routes.reduce((accumulator, current) => {
      return [...accumulator, ...current.nested];
  }, []);

  const {page} = stores();
  $: segment = ($page.path.match(/.*\/(.*)$/) || [null, 'introduction'])[1];
  $: comp = components.find(x => x.name === segment.toLowerCase()) || {component: null, meta: {}};
</script>

<svelte:head>
  <title>{comp.meta.title || ''} | INDUSTRIAL-UI</title>
  <meta name="description" content={comp.meta.description || ''}>
</svelte:head>

<svelte:component this={comp[$theme.slug] || comp.component} />
