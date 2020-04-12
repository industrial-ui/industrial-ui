<script>
  import {Dropdown, Button} from 'industrial-ui';
  const ITEMS = ['Tailwind', 'Spectre CSS', 'Semantic-ui', 'Materialize', 'Another one', 'Etcetera'];
  let activeItems = [];
  const choose = item => {
    if (activeItems.includes(item)) activeItems = activeItems.filter(itm => itm !== item);
    else activeItems = [...activeItems, item];
  };
</script>

<Dropdown is:multiselect let:close={close} id="dd-5">
  <div slot="trigger">
    {#if activeItems.length}
      {#each activeItems as item}
        <span class="inline-block bg-gray-200 py-2 px-2 mr-2 rounded cursor-pointer" on:click={() => choose(item)}>{item}</span>
      {/each}
    {:else}
      Supported stylesheets
    {/if}
  </div>

  {#each ITEMS.filter(itm => !activeItems.includes(itm)) as item}
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click="{() => {choose(item)}}">{item}</span>
  {/each}
</Dropdown>
