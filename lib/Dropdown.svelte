<script>
  import {getContext} from 'svelte';
  import filterIsProps from './utils/is-properties';
  import filterProps from './utils/filter-props';
  import composeClasses from './utils/compose-classes';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.dropdown;

  export let triggerClass = '';
  export let dropdownClass = '';
  export let value = false;

  const close = () => value = false;

  const propsList = ['class', 'triggerClass', 'dropdownClass', 'value', ...Object.keys(config.isProperties)];
</script>

<div
  class={composeClasses(globalConfig.globalClass, config.class, $$props.class, value ? config.openClass : config.closeClass)}
  use:filterIsProps={{isProperties: config.isProperties, props: $$props}}
  {...filterProps(propsList, $$props)}
>
  <!-- Trigger element -->
  <div
    class={composeClasses(config.triggerClass, triggerClass, value ? config.openTriggerClass : config.closeTriggerClass)}
    on:click={() => value = !value}
  >
    <slot name="trigger" {close} />
  </div>

  <!-- Dropdown itself -->
  <div class={composeClasses(config.dropdownClass, dropdownClass, value ? config.openDropdownClass : config.closeDropdownClass)}>
    <slot {close} />
  </div>
</div>
