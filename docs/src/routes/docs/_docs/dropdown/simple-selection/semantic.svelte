<script>
  import {Dropdown} from 'industrial-ui';
  const ITEMS = ['Male', 'Female'];
  let activeItem = null;
  const choose = item => activeItem = item;
</script>

<Dropdown is:select let:close={close} id="dd-4">
  <div slot="trigger">
    <div class="default text">
      {#if activeItem}
        {activeItem}
      {:else}
        Gender
      {/if}
    </div>
  </div>

  {#each ITEMS as item}
    <div class="item" on:click="{() => {choose(item); close()}}">{item}</div>
  {/each}
</Dropdown>
