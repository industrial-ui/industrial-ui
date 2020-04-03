<script>
  import {onMount} from 'svelte';
  import {fly} from 'svelte/transition';
  import {theme} from '../_helpers/active-theme';

  const names = {
    semantic: 'semantic',
    spectre: 'spectre',
    tailwind: 'tailwind',
    config: 'config',
    code: 'code',
  };

  let chosen = null;
  const choose = type => {
    if (chosen && chosen === type) {
      chosen = null;
    } else {
      chosen = type;
    }
  };
</script>

<div class="show-block" class:open={chosen}>
  <div class="show-showcase">
    <div class="show-navbar">
      <img
        src="/img/code.svg"
        alt="show code usage"
        title="Show code usage"
        on:click={() => choose(names.code)}
      />
      <img
        src="/img/settings.svg"
        alt="show settings configuration"
        title="Show settings configuration"
        on:click={() => choose(names.config)}
      />
    </div>
    <slot />
  </div>
  {#if chosen}
    <div in:fly="{{duration: 300}}" class="show-code">
      {#if chosen === names.code}
        <slot name="code" />
      {:else if chosen === names.config}
        <slot name="config" />
      {/if}
    </div>
  {/if}
</div>

<style>
  .show-block {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .show-block.open {
    margin-bottom: 0;
  }

  .show-block.open .show-showcase {
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    transition: all .3s;
  }

  .show-showcase {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem .5rem;
    border-radius: 1rem;
    border: 1px solid #b1b4b3;
    transition: border-radius .3s;
  }

  .show-code {
    position: relative;
  }

  :global(.show-showcase) > *:not(.show-navbar) {
    margin: .5rem 0;
  }

  .show-navbar {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 4rem;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  .show-navbar img {
    background-color: white;
    padding: 0 .1rem;
    cursor: pointer;
  }
</style>
