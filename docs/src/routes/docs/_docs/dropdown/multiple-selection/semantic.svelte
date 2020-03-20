<script>
  import {Dropdown} from 'industrial-ui';
  const ITEMS = ['Russia', 'India', 'Not Russia and not India'];
  let activeItems = [];
  const choose = item => {
    if (activeItems.includes(item)) activeItems = activeItems.filter(itm => itm !== item);
    else activeItems = [...activeItems, item];
  };
</script>

<Dropdown is:multiselect let:close={close} triggerClass={activeItems.length ? '' : 'default text'} id="dd-5">
  <div slot="trigger">
    {#if activeItems.length}
      {#each activeItems as item}
        <span class="ui label transition visible" on:click={() => choose(item)}>{item}</span>
      {/each}
    {:else}
      Countries
    {/if}
  </div>

  {#each ITEMS.filter(itm => !activeItems.includes(itm)) as item}
    <div class="item" on:click="{() => choose(item)}">{item}</div>
  {/each}
</Dropdown>
