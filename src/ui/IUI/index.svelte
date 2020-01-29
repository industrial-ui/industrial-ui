<script>
  import {setContext} from 'svelte';
  import defaultConfig from './config';
  import prepareConfig from '../utils/prepare-config';

  export let config = {};
  setContext('iui-config', prepareConfig(defaultConfig, config));
</script>

<slot />
