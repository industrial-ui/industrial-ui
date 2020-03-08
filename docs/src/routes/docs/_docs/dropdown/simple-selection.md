<script>
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';

const ITEMS = ['Male', 'Female'];
let activeItem = null;
const choose = item => activeItem = item;
</script>

<ShowBlock>
  <Dropdown is:select let:close={close}>
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
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
    let activeItem = null;
    const ITEMS = ['Male', 'Female'];
    const choose = item => activeItem = item;
  </script>
  
  <Dropdown is:select let:close={close}>
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
  ```
  </pre>

  <pre class="code" slot="semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      isProperties: {select: 'selection'},
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
