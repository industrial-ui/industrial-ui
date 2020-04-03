<script>
  import {onMount} from 'svelte';
  import Layout from './_components/layout.svelte';
  import {IUI} from 'industrial-ui';
  import 'highlight.js/styles/an-old-hope.css';
  import {theme, DEFAULT_THEME} from './_helpers/active-theme';

  export let segment;
  // let newTheme = $theme.url;
  // $: if ($theme.url && $theme.url !== newTheme && typeof document !== 'undefined') {
  //   console.log($theme.url, newTheme);
  //   document.getElementById('global-stylesheet').remove();
  //   let styles = document.createElement('link');
  //   styles.rel = 'stylesheet';
  //   styles.type = 'text/css';
  //   styles.href = $theme.url;
  //   document.getElementsByTagName('head')[0].appendChild(styles);
  //   newTheme = $theme.url;
  // }
</script>

<svelte:head>
  <link id="global-stylesheet" href={$theme.url} type="text/css" rel="stylesheet">
</svelte:head>

{#if $theme.slug}
  <Layout {segment}>
    <IUI config={$theme.config}>
      <slot />
    </IUI>
  </Layout>
{/if}
