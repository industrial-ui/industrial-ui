<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {getEventAction} from './utils/dispatch-events';
  import filterIsProps from './utils/is-properties';
  import clickOutside from './utils/click-outside';
  import filterProps from './utils/filter-props';
  import composeClasses from './utils/compose-classes';
  import dynamic from './utils/transition';

  const globalConfig = getContext('iui-config');
  const config = globalConfig.components.dropdown;
  const events = getEventAction(current_component);

  export let triggerClass = '';
  export let dropdownClass = '';
  export let openOnHover = false;
  export let id = null;
  export let value = false;
  export let transition = null;
  const propsList = ['id', 'class', 'triggerClass', 'dropdownClass', 'value', 'openOnHover', 'transition', ...Object.keys(config.isProperties)];

  const close = () => value = false;
  const hoverEffect = (isEntered) => {
    if (!openOnHover) return;
    value = isEntered;
  }
</script>

<div
  {id}
  class={composeClasses(
    globalConfig.globalClass,
    config.class,
    $$props.class,
    filterIsProps(config.isProperties, $$props),
    value ? config.openClass : config.closeClass
  )}
  {...filterProps(propsList, $$props)}
  use:clickOutside={close}
  use:events
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
    <div
      class={composeClasses(config.dropdownClass, dropdownClass, value ? config.openDropdownClass : config.closeDropdownClass)}
      transition:dynamic={{transition: transition || config.transition, options: transition ? {} : config.transitionOptions, customs: globalConfig.customTransitions}}
    >
      <slot {close} />
    </div>
  {/if}
</div>
