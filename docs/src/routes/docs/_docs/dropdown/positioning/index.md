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
