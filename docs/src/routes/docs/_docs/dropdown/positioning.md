<script>
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
</script>

<ShowBlock>
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
  
  <pre class="code" slot="code">
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

  <pre class="code" slot="semantic">
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
