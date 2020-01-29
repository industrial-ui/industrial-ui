<script>
  import {getContext} from 'svelte';
  import isProperties from '../utils/is-properties';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.button;

  export let label;
  /* TODO: get props: away, disabled (or not) */
</script>

<button
  type="button"
  class={config.className}
  use:isProperties={{isProperties, props: $$props}}
>
  <slot>
    {label}
  </slot>
</button>
