<script>
    import {setContext} from 'svelte';
    import defaultConfig from './config';
    import mergeDeep from '../utils/merge-deep';

    export let config = {};
    setContext('iui-config', mergeDeep({}, defaultConfig, config));
</script>

<slot />
