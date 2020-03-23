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
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown let:close openOnHover id="dd-2">
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="code-spectre">
  ```html
  <Dropdown openOnHover id="dd-2">
    <span slot="trigger">
      Toggle me
    </span>
  
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault>Hello, there</a>
    </div>
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault>Do some action</a>
    </div>
  </Dropdown>
  ```
  </pre>


  <pre class="code" slot="config-semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 100, duration: 500},
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
