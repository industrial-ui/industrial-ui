<script>
import Title from '../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../_components/show-block.svelte';
</script>

<Title 
  title="Dropdown"
/>

### Simple example

<ShowBlock>
  <Dropdown let:close={close} id="dd-1">
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
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
  }
  ```
  </pre>

  <pre class="code" slot="tailwind">
  ```javascript
  components: {
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
  }
  ```
  </pre>
</ShowBlock>


### Left or right menu

<ShowBlock>
  <Dropdown let:close={close} dropdownClass="left" id="dd-2">
    <div slot="trigger">
      <Button>Left menu</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown let:close={close} dropdownClass="left">
    <div slot="trigger">
      <Button>Left menu</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
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


### Open on hover effect

<ShowBlock>
  <Dropdown let:close={close} openOnHover id="dd-3">
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
