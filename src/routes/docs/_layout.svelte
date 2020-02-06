<script>
  import Layout from './_components/layout.svelte';
  import IUI from '../../ui/IUI/index.svelte';
  import 'highlight.js/styles/an-old-hope.css';
  export let segment;

  const config = {
    components: {
      button: {
        class: 'ui button',
        isProperties: {
          primary: 'primary',
          outline: 'outline',
          icon: 'round icon',
          labeled: 'labeled',
        },
      }
    }
  };
</script>

<svelte:head>
  <link href="/style/semantic.min.css" type="text/css" rel="stylesheet">
</svelte:head>

<Layout {segment}>
  <IUI {config}>
    <slot />
  </IUI>
</Layout>
