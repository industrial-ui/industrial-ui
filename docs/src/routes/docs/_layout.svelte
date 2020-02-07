<script>
  import Layout from './_components/layout.svelte';
  import IUI from 'industrial-ui';
  import 'highlight.js/styles/an-old-hope.css';
  import {theme} from './_helpers/theme';

  export let segment;
</script>

<svelte:head>
  <link href={$theme.url} type="text/css" rel="stylesheet">
</svelte:head>

<Layout {segment}>
  <IUI config={$theme.config}>
    <slot />
  </IUI>
</Layout>
