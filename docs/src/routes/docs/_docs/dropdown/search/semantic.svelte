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

<Dropdown is:search let:close={close} let:open={open} id="dd-6">
  <input
    slot="nowrap-trigger"
    class="search"
    placeholder="Choose latin country"
    value={value}
    on:input={(e) => input(e)}
    on:focus={() => open()}
    on:blur={() => close()}
  />

  {#each LATIN_COUNTRIES.filter(itm => itm.startsWith(searchValue)) as item}
    <div class:selected={item === value} class="item" on:click="{() => {choose(item); close();}}">{item}</div>
  {/each}
</Dropdown>
