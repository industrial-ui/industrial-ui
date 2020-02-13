<script>
import Title from '../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../_components/show-block.svelte';
</script>

<Title 
  title="Dropdown"
/>

Use it, come on. It's cool

<ShowBlock>
  <Dropdown let:close={close}>
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, IUI} from 'industrial-ui';
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

### The button is still a work-in-progress, wait for changes
