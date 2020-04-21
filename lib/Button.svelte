<script>
  import {getContext} from 'svelte';
  import filterIsProps from './utils/is-properties';
  import filterProps from './utils/filter-props';
  import composeClasses from './utils/compose-classes';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.button;

  const propsList = [/*'label', */'class', ...Object.keys(config.isProperties)];
</script>

<button
  type="button"
  class={composeClasses(
    globalConfig.globalClass,
    config.class,
    $$props.class,
    filterIsProps(config.isProperties, $$props)
  )}
  {...filterProps(propsList, $$props)}
>
  <slot />
</button>
