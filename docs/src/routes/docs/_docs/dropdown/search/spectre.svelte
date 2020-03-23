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
  <label slot="nowrap-trigger" class="form-label" for="search-dd">Choose any Latin country</label>
  <input
    slot="nowrap-trigger"
    class="form-input"
    type="text"
    id="search-dd"
    placeholder="Country name"
    value={value}
    on:input={(e) => input(e)}
    on:focus={() => open()}
    on:blur={() => close()}
  >

  {#each LATIN_COUNTRIES.filter(itm => (itm.startsWith(searchValue) && itm !== value)) as item}
    <div class="menu-item" on:click="{() => {choose(item); close()}}">
      <a href="/docs/dropdown" on:click|preventDefault>{item}</a>
    </div>
  {/each}
</Dropdown>
