<script>
  import {getContext, onMount} from 'svelte';
  import {current_component} from 'svelte/internal';
  import getEventAction, {dispatchMultiple} from '../utils/dispatch-events';
  import filterIsProps from '../utils/is-properties';
  import filterProps from '../utils/filter-props';
  import composeClasses from '../utils/compose-classes';
  // import dynamic from '../utils/transition';

  export let mockConfig = null;
  export let id = null;
  export let value = false;
  // export let transition = null;
  // export let transitionOptions = null;
  export let overlayClass = null;

  const globalConfig = mockConfig || getContext('iui-config');
  if (!globalConfig) throw new Error('No config specified. Please, wrap your component into IUI.');

  const config = globalConfig.components.modal;
  const events = getEventAction(current_component, !!mockConfig);
  const propsList = ['id', 'class', 'overlayClass', 'value', 'mockConfig', ...Object.keys(config.isProperties)];

  let dialog = null;
  onMount(() => {
    if (typeof window !== 'undefined') {
      console.log('here');
      document.body.appendChild(dialog);
    }
  });

  const close = () => {
    value = false;
    dispatchMultiple(['close', 'toggle'], value);
  };
  const open = () => {
    value = false;
    dispatchMultiple(['open', 'toggle'], value);
  };
</script>

<dialog
  {id}
  class={composeClasses(
    config.overlayClass,
    value ? config.openOverlayClass : config.closeOverlayClass,
    overlayClass,
  )}
  open={value}
  bind:this={dialog}
  on:click={close}
>
  <div
    class={composeClasses(
      globalConfig.globalClass,
      config.class,
      $$props.class,
      filterIsProps(config.isProperties, $$props),
      value ? config.openClass : config.closeClass
    )}
    {...filterProps(propsList, $$props)}
    use:events
  >
    <slot {close} {open} {value} />
  </div>
</dialog>
