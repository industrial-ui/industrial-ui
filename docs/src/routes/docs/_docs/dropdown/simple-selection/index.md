<script>
import ShowBlock from '../../../_components/show-block.svelte';
import Semantic from './semantic.svelte';
import Spectre from './spectre.svelte';
import Tailwind from './tailwind.svelte';
</script>

<ShowBlock>
  <div slot="semantic">
    <Semantic />
  </div>
  <div slot="spectre">
    <Spectre />
  </div>
  <div slot="tailwind">
    <Tailwind />
  </div>
  
  <pre class="code" slot="code-semantic">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
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
  <pre class="code" slot="code-spectre">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
    const ITEMS = ['Male', 'Female'];
    let activeItem = null;
    const choose = item => activeItem = item;
  </script>
  
  <Dropdown is:select let:close is:select id="dd-4">
    <div slot="trigger">
      {#if activeItem}
        {activeItem}
      {:else}
        Gender
      {/if}
    </div>
  
    {#each ITEMS as item}
      <div class="menu-item">
        <a href="/docs/dropdown" on:click|preventDefault="{() => {choose(item); close()}}">{item}</a>
      </div>
    {/each}
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="code-tailwind">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config=semantic">
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

  <pre class="code" slot="config-spectre">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        select: 'btn',
        primary: 'btn btn-primary'
      },
      class: 'dropdown',
      openClass: 'active',
      triggerClass: 'btn btn-primary dropdown-toggle',
      dropdownClass: 'menu',
    },
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
