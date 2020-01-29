<script>
  import {getContext} from 'svelte';
  import filterIsProps from '../utils/is-properties';
  import filterProps from '../utils/filter-props';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.button;

  export let label;

  const propsList = ['label', ...config.isProperties];
</script>

<button
  type="button"
  class={config.className}
  use:filterIsProps={{isProperties: config.isProperties, props: $$props}}
  {...filterProps(propsList, $$props)}
>
  <slot>
    {label}
  </slot>
</button>
