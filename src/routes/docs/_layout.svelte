<script>
  import Layout from '../_components/layout.svelte';
  import IUI from '../../ui/IUI/index.svelte';
  export let segment;

  const config = {
    components: {
      button: {
        class: 'btn',
        isProperties: {
          outline: 'outline',
          icon: 'round icon',
        },
      }
    }
  };
</script>

<Layout {segment}>
  <IUI {config}>
    <slot />
  </IUI>
</Layout>
