<script>
  let chosen = null;
  const choose = type => {
    if (chosen && chosen === type) {
      chosen = null;
    } else {
      chosen = type;
    }
  };
</script>

<div class="doc-block">
  <div class="doc-showcase">
    <nav>
      <img src="/img/code.svg" alt="show code usage" on:click={() => choose('code')} />
      <img src="/img/settings.svg" alt="show settings configuration" on:click={() => choose('config')} />
    </nav>
    <slot />
  </div>
  {#if chosen}
    <div class="doc-code">
      {#if chosen === 'code'}
        <slot name="code" />
      {:else if chosen === 'config'}
        <slot name="config" />
      {/if}
    </div>
  {/if}
</div>

<style>
  .doc-block {
    border-radius: 1rem;
    border: 1px solid #b1b4b3;
  }

  .doc-showcase {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem .5rem;
  }

  :global(.doc-showcase) > *:not(nav) {
    margin: .5rem 0;
  }

  nav {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 4rem;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  nav img {
    background-color: white;
    padding: 0 .1rem;
    cursor: pointer;
  }
</style>
