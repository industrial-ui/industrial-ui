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
  <meta name="title" content={(comp.meta.title || '') + ' | INDUSTRIAL-UI'}>
  <meta name="description" content={comp.meta.description || 'Production-oriented library with a feature rich UI components with no styles at all. Enjoy coding!'}>
  <meta name="keywords" content={comp.name + ', industrial-ui, iui, ui-kit, ui-components, library, design, logic, javascript, svelte, front-end, npm'}>
  <meta name="author" content="VanishMax">

  <meta property="og:type" content="website">
  <meta property="og:url" content={'https://industrial-ui.com/' + comp.name}>
  <meta property="og:title" content={(comp.meta.title || '') + ' | INDUSTRIAL-UI'}>
  <meta property="og:description" content={comp.meta.description || 'Production-oriented library with a feature rich UI components with no styles at all. Enjoy coding!'}>
  <meta property="og:image" content="https://industrial-ui.com/img/logo.png">
</svelte:head>

<svelte:component this={comp[$theme.slug] || comp.component} />
