<script>
  import {Dropdown} from 'industrial-ui';
  const ITEMS = ['Male', 'Female'];
  let activeItem = null;
  const choose = item => activeItem = item;
</script>

<Dropdown is:select let:close id="dd-4">
  <div slot="trigger">
    {#if activeItem}
      {activeItem}
    {:else}
      Gender
    {/if}
  </div>

  {#each ITEMS as item}
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault="{() => {choose(item); close()}}">{item}</a>
    </div>
  {/each}
</Dropdown>
