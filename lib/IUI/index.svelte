<script>
  import {setContext} from 'svelte';
  import defaultConfig from './config';
  import prepareConfig from '../utils/prepare-config';

  export let config = {};
  const prepared = prepareConfig(defaultConfig, config);
  setContext('iui-config', prepared);
</script>

<svelte:head>
  {#each prepared.stylesheets as style}
    <link rel="stylesheet" type="text/css" href={style} />
  {/each}
</svelte:head>

<!-- In order to export as web components (maybe in the bad future) decomment next line -->
<!--<svelte:options tag="iui-wrap" />-->

<slot />
