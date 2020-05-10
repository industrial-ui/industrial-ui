<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import filterIsProps from '../utils/is-properties';
  import filterProps from '../utils/filter-props';
  import composeClasses from '../utils/compose-classes';
  import getEventAction from '../utils/dispatch-events';

  export let mockConfig = null;

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.button;
  const events = getEventAction(current_component, !!mockConfig);

  const propsList = [/*'label', */'class', ...Object.keys(config.isProperties)];
</script>

<button
  type="button"
  use:events
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
