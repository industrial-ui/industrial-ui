<script>
  import {setContext} from 'svelte';
  import defaultConfig from './config';
  import prepareConfig from '../utils/prepare-config';

  export let config = {};
  setContext('iui-config', prepareConfig(defaultConfig, config));
</script>

<!-- In order to export as web components (maybe in the bad future) decomment next line -->
<!--<svelte:options tag="iui-wrap" />-->

<slot />
