<script>
import {Dropdown} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';

const LATIN_COUNTRIES = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'French Guiana', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Martinique', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Saint Barthelemy', 'Saint Martin', 'Uruguay', 'Venezuela'];
let value = null;
let searchValue = '';

const choose = item => {
  value = item;
  searchValue = '';
};
const input = e => searchValue = e.target.value;
</script>

<ShowBlock>
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
  
  <pre class="code" slot="code">
  ```html
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
  ```
  </pre>

  <pre class="code" slot="semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      isProperties: {search: 'search selection'},
      class: 'ui dropdown',
      openClass: 'active visible',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
  ```
  </pre>

  <pre class="code" slot="spectre">
  ```javascript
  components: {
  }
  ```
  </pre>

  <pre class="code" slot="tailwind">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>
