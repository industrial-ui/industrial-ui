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
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown id="dd-p-1" position="bottom left" openOnHover>
    <div slot="trigger">
      <Button>Bottom Left</Button>
    </div>
    
    <div class="item">Hello, there</div>
    <div class="item">Do some action</div>
  </Dropdown>
  
  <Dropdown id="dd-p-2" position="bottom right" openOnHover>
    <div slot="trigger">
      <Button>Bottom Right</Button>
    </div>
    
    <div class="item">Hello, there</div>
    <div class="item">Do some action</div>
  </Dropdown>
  
  <Dropdown id="dd-p-a" position="auto" openOnHover>
    <div slot="trigger">
      <Button>Auto. Scroll to see</Button>
    </div>
    
    <div class="item">Hello, there</div>
    <div class="item">Do some action</div>
  </Dropdown>
  
  <Dropdown id="dd-p-3" position="top left" openOnHover>
    <div slot="trigger">
      <Button>Top Left</Button>
    </div>
    
    <div class="item">Hello, there</div>
    <div class="item">Do some action</div>
  </Dropdown>
  
  <Dropdown id="dd-p-4" position="top right" openOnHover>
    <div slot="trigger">
      <Button>Top Right</Button>
    </div>
    
    <div class="item">Hello, there</div>
    <div class="item">Do some action</div>
  </Dropdown>
  ```
  </pre>

  
  <pre class="code" slot="code-spectre">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
  </script>
  
  <Dropdown id="dd-p-1" position="bottom left" openOnHover is:primary>
    <span slot="trigger">
      Bottom Left
    </span>
    Hello there!
  </Dropdown>
  
  <Dropdown id="dd-p-2" position="bottom right" openOnHover is:primary>
    <span slot="trigger">
      Bottom Right
    </span>
    Hello there!
  </Dropdown>
  
  <Dropdown id="dd-p-3" position="auto" openOnHover is:primary>
    <span slot="trigger">
      Auto
    </span>
    Hello there!
  </Dropdown>
  
  <Dropdown id="dd-p-4" position="top left" openOnHover is:primary>
    <span slot="trigger">
      Top Left
    </span>
    Hello there!
  </Dropdown>
  
  <Dropdown id="dd-p-5" position="top right" openOnHover is:primary>
    <span slot="trigger">
      Top Right
    </span>
    Hello there!
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="code-tailwind">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config-semantic">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 100, duration: 300},
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
