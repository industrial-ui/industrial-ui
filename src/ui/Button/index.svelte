<script>
  import {getContext} from 'svelte';
  import filterIsProps from '../utils/is-properties';
  import filterProps from '../utils/filter-props';
  import composeClasses from '../utils/compose-classes';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.button;

  export let label;

  const propsList = ['label', 'class', ...config.isProperties];
</script>

<button
  type="button"
  class={composeClasses(config.class, $$props.class)}
  use:filterIsProps={{isProperties: config.isProperties, props: $$props}}
  {...filterProps(propsList, $$props)}
>
  <slot>
    {label}
  </slot>
</button>
