<script>
  import {onMount} from 'svelte';
  import Layout from './_components/layout.svelte';
  import {IUI} from 'industrial-ui';
  import 'highlight.js/styles/an-old-hope.css';
  import getActiveTheme, {theme} from './_helpers/active-theme';

  export let segment;
  onMount(getActiveTheme);
</script>

<svelte:head>
  <link href={$theme.url} type="text/css" rel="stylesheet">
</svelte:head>

{#if $theme.slug}
  <Layout {segment}>
    <IUI config={$theme.config}>
      <slot />
    </IUI>
  </Layout>
{/if}
