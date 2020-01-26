<script>
    import {getContext} from 'svelte';
    const globalConfig = getContext('iui-config');
    const config = globalConfig.components.button;

    export let label;
</script>

<button type="button" class={config.className}>
    <slot>
        {label}
    </slot>
</button>
