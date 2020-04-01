<script>
  import {Dropdown} from 'industrial-ui';
  const LATIN_COUNTRIES = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'French Guiana', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Martinique', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Saint Barthelemy', 'Saint Martin', 'Uruguay', 'Venezuela'];
  let value = null;
  let searchValue = '';

  const choose = item => {
    value = item;
    searchValue = '';
  };
  const input = e => searchValue = e.target.value;
</script>

<Dropdown
  is:search
  let:close={close}
  let:open={open}
  dropdownClass="h-32 w-full overflow-y-auto"
  id="dd-6"
>
  <input
    slot="trigger"
    class="py-2 px-2 border-none"
    placeholder="Choose latin country"
    value={value}
    on:input={(e) => input(e)}
  />

  {#each LATIN_COUNTRIES.filter(itm => itm.startsWith(searchValue)) as item}
    <span
      class:bg-gray-300={item === value}
      class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer"
      on:click="{() => {choose(item); close()}}"
    >
      {item}
    </span>
  {/each}
</Dropdown>
