<script>
  import {onMount} from 'svelte';
  import Layout from './_components/layout.svelte';
  import {IUI} from 'industrial-ui';
  import 'highlight.js/styles/an-old-hope.css';
  import {checkTheme, getTheme} from './_helpers/active-theme';
  import {stores} from '@sapper/app';

  export let segment;
  onMount(checkTheme);

  const {page} = stores();
  const theme = getTheme($page.query);
</script>

<svelte:head>
  <link id="global-stylesheet" href={theme.url} type="text/css" rel="stylesheet">
</svelte:head>

{#if theme.slug}
  <Layout {segment}>
    <IUI config={theme.config}>
      <slot />
    </IUI>
  </Layout>
{/if}
