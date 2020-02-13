<script>
  import {getContext} from 'svelte';
  import filterIsProps from './utils/is-properties';
  import filterProps from './utils/filter-props';
  import composeClasses from './utils/compose-classes';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.dropdown;

  export let triggerClass = '';
  export let dropdownClass = '';

  const propsList = ['class', 'triggerClass', 'dropdownClass', ...Object.keys(config.isProperties)];
</script>

<div
  class={composeClasses(globalConfig.globalClass, config.class, $$props.class)}
  use:filterIsProps={{isProperties: config.isProperties, props: $$props}}
  {...filterProps(propsList, $$props)}
>
  <!-- Trigger element -->
  <div class={composeClasses(config.triggerClass, triggerClass)}>
    <slot name="trigger" />
  </div>

  <!-- Dropdown itself -->
  <div class={composeClasses(config.dropdownClass, dropdownClass)}>
    <slot />
  </div>
</div>
