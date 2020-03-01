<script>
import Title from '../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../_components/show-block.svelte';
</script>

<Title
  id="examples"
  title="Dropdown"
/>

### Simple example

Dropdown usage without special properties. Just classes are configured with
some style library that makes it look nice

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


### Left or right menu

`TODO` Consider opening the dropdown in the place that depends on window borders.
If it is close to, for example, right and bottom corner of the screen, it
will be positioned in the left top corner relative to the trigger.

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

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger

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


## Dropdown roadmap

To make it work perfectly, there is a need in:
 - **Positioning**. We need to calculate the position of the dropdown (top-left, top-right,
bottom-left or bottom-right) depending of how close the window borders are.
 - **Transition**. Show and configure the non-default transitions for dropdowns
 - Consider such **cases** from semantic-ui as selection menu, search dropdown. 
May be just show it in the docs, and that's all.

<h1 id="props">Props</h1>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | `value` | `Boolean` | `false` | Handles the open/close state of the dropdown |
  | `id` | `String` | `''` | **id** of the dropdown (not wrapper). It is advised to put the **id** if you have more than 1 dropdown on the page |
  | `openOnHover` | `Boolean` | `false` | If `true`, will open dropdown on *mouseenter* and close on *mouseleave* |
  | `triggerClass` | `String` | `''` | Trigger (opener element that should be clicked) class |
  | `dropdownClass` | `String` | `''` | Dropdown class |
</div>


<h1 id="markup">Resulting markup</h1>

This is how the markup of the simplest dropdown will look like

<pre class="code">
  ```html
    <div class="your wrapper classes">
      <div class="trigger class"></div>
      <div class="dropdown class" id="prop-id"></div>
    </div>
  ```
</pre>