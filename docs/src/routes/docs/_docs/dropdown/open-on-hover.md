<script>
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
</script>

<ShowBlock>
  <Dropdown let:close={close} openOnHover id="dd-2">
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown>
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    Hello, there
    <Button>And button is here</Button>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="semantic">
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
