<script>
  import {getContext} from 'svelte';
  import filterIsProps from './utils/is-properties';
  import clickOutside from './utils/click-outside';
  import filterProps from './utils/filter-props';
  import composeClasses from './utils/compose-classes';
  import transition from './utils/transition';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.dropdown;

  export let triggerClass = '';
  export let dropdownClass = '';
  export let openOnHover = false;
  export let id = null;
  export let value = false;
  const propsList = ['id', 'class', 'triggerClass', 'dropdownClass', 'value', 'openOnHover', ...Object.keys(config.isProperties)];

  const close = () => value = false;
  const hoverEffect = (isEntered) => {
    if (!openOnHover) return;
    value = isEntered;
  }
</script>

<div
  {id}
  class={composeClasses(globalConfig.globalClass, config.class, $$props.class, value ? config.openClass : config.closeClass)}
  {...filterProps(propsList, $$props)}
  use:filterIsProps={{isProperties: config.isProperties, props: $$props}}
  use:clickOutside={close}
  on:mouseenter={() => hoverEffect(true)}
  on:mouseleave={() => hoverEffect(false)}
>
  <!-- Trigger element -->
  <div
    class={composeClasses(config.triggerClass, triggerClass, value ? config.openTriggerClass : config.closeTriggerClass)}
    on:click={() => value = !value}
  >
    <slot name="trigger" {close} />
  </div>

  <!-- Dropdown itself -->
  {#if value}
  <!--TODO: add transition options, ok?-->
    <div
      class={composeClasses(config.dropdownClass, dropdownClass, value ? config.openDropdownClass : config.closeDropdownClass)}
      transition:transition={{transition: config.transition, options: config.transitionOptions}}
    >
      <slot {close} />
    </div>
  {/if}
</div>
