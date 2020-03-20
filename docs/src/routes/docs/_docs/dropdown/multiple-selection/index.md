<script>
import ShowBlock from '../../../_components/show-block.svelte';
import Semantic from './semantic.svelte';
import Spectre from './spectre.svelte';
</script>

<ShowBlock>
  <div slot="semantic">
    <Semantic />
  </div>
  <div slot="spectre">
    <Spectre />
  </div>
  
  <pre class="code" slot="code-semantic">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
    const ITEMS = ['Russia', 'India', 'Not Russia and not India'];
    let activeItems = [];
    const choose = item => {
      if (activeItems.includes(item)) activeItems = activeItems.filter(itm => itm !== item);
      else activeItems = [...activeItems, item];
    };
  </script>
  
  <Dropdown is:multiselect triggerClass={activeItems.length ? '' : 'default text'} id="dd-5">
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
  ```
  </pre>

  <pre class="code" slot="config-semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      isProperties: {multiselect: 'fluid selection multiple'},
      class: 'ui dropdown',
      openClass: 'active visible',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
  ```
  </pre>

  <pre class="code" slot="config-spectre">
  ```javascript
  components: {
  }
  ```
  </pre>

  <pre class="code" slot="config-tailwind">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>
