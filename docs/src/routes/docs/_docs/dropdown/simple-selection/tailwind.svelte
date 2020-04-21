<script>
  import {Dropdown, Button} from 'industrial-ui';
  const ITEMS = ['Male', 'Female'];
  let activeItem = null;
  const choose = item => activeItem = item;
</script>

<Dropdown is:select let:close={close} id="dd-4">
  <div slot="trigger">
    <Button>
      {#if activeItem}
        {activeItem}
      {:else}
        Gender
      {/if}
    </Button>
  </div>

  {#each ITEMS as item}
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click="{() => {choose(item); close()}}">{item}</span>
  {/each}
</Dropdown>
