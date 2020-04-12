<script>
import Title from '../../_components/page-title.svelte';
import Link from '../../_components/link.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
import SimpleExample from './simple-example/semantic.svelte';
import OpenOnHover from './open-on-hover/semantic.svelte';
import CustomTransition from './custom-transition/semantic.svelte';
import Positioning from './positioning/semantic.svelte';
import SimpleSelection from './simple-selection/semantic.svelte';
import MultipleSelection from './multiple-selection/semantic.svelte';
import Search from './search/semantic.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
</script>

<Title
  id="examples"
  title="Dropdown"
/>

<h2 id="simple-example">Simple example</h2>

Dropdown usage without special properties. Styling is added through Industrial-ui's
<Link path="/docs/dropdown" hash="configuration">configuration</Link> with the usage 
of some Semantic-ui classes.

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown>
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
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
</ShowBlock>

Open the code and configuration tabs in the block above to see that all the magic is done
simply by adding the Semantic classes which you can easily find in the stylesheet's
documentation and its examples.


<h2 id="open-on-hover">Open on hover effect</h2>

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger.

<ShowBlock>
  <OpenOnHover />
  
  <pre class="code" slot="code">
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

  <pre class="code" slot="config">
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
</ShowBlock>


<h2 id="positioning">Dropdown position</h2>

If you want your dropdown to open in different parts of the window, you can use the
`position` property. It can be one of `'auto'|'bottom left'|'bottom right'|'top left'|'top right'`.
If `auto` is chosen, the dropdown will calculate and choose the most appropriate property
to fit into the window.

<ShowBlock>
  <Positioning />
  
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

  <pre class="code" slot="config">
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
</ShowBlock>


<h2 id="custom-transition">Custom transition</h2>

You can configure a custom transition and pass its name to the `transition` prop or to the configuration
object of the dropdown. Transition should be a function that operates on some node element and has options
like `delay`, `duration` and other properties perfectly described in the 
<a href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank">Svelte's documentation</a> 

<ShowBlock>
  <CustomTransition />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown transition="fadeWithColor" let:close id="dd-3">
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="config">
  ```javascript
  customTransitions: {
    fadeWithColor: (node, {delay = 0, duration = 1000}) => ({
      delay,
      duration,
      css: t => `
        opacity: ${t};
        background-color: hsl(${t * 255}, 50%, 50%);
      `
    }),
  },
  components: {
    dropdown: {
      class: 'ui dropdown',
      openClass: 'active visible',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
  ```
  </pre>
</ShowBlock>

<h2 id="selection-dropdown">Selection dropdown</h2>

This section shows how the dropdown can be used in real frontend cases. 
Semantic-ui is a powerful stylesheet, but, instead of Tailwind, you have to be careful. 
For example, in the **Search dropdown** case you have to omit the predefined markup by 
using the `nowrap-trigger` slot and even add multiple html-elements to it. By doing 
this, you loose provided logic and have to deal with it with slot variables and functions.

*Simple selection*: an example of how to pick a value from the list

<ShowBlock>
  <SimpleSelection />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown>
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
    
    <div class="item" on:click={() => close()}>Hello, there</div>
    <div class="item" on:click={() => close()}>Do some action</div>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
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
</ShowBlock>

*Multiple selection*: Pick as many options as you want.

<ShowBlock>
  <MultipleSelection />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
    const ITEMS = ['Russia', 'India', 'Not Russia and not India'];
    let activeItems = [];
    const choose = item => {
      if (activeItems.includes(item)) activeItems = activeItems.filter(itm => itm !== item);
      else activeItems = [...activeItems, item];
    };
  </script>
  
  <Dropdown is:multiselect triggerClass={activeItems.length ? '' : 'default text'} id="dd-5">
    <div slot="trigger">
      {#if activeItems.length}
        {#each activeItems as item}
          <span class="ui label transition visible" on:click={() => choose(item)}>{item}</span>
        {/each}
      {:else}
        Countries
      {/if}
    </div>
  
    {#each ITEMS.filter(itm => !activeItems.includes(itm)) as item}
      <div class="item" on:click="{() => choose(item)}">{item}</div>
    {/each}
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="config">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      isProperties: {multiselect: 'fluid selection multiple'},
      class: 'ui dropdown',
      openClass: 'active visible',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
  ```
  </pre>
</ShowBlock>

*Search dropdown*: Find a value in the dropdown list by typing some letters.

<ShowBlock>
  <Search />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
    const LATIN_COUNTRIES = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'French Guiana', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Martinique', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Saint Barthelemy', 'Saint Martin', 'Uruguay', 'Venezuela'];
    let value = null;
    let searchValue = '';
  
    const choose = item => {
      value = item;
      searchValue = '';
    };
    const input = e => searchValue = e.target.value;
  </script>
  
  <Dropdown is:search let:close={close} let:open={open} id="dd-6">
    <input
      slot="nowrap-trigger"
      class="search"
      placeholder="Choose latin country"
      value={value}
      on:input={(e) => input(e)}
      on:focus={() => open()}
      on:blur={() => close()}
    />
  
    {#each LATIN_COUNTRIES.filter(itm => itm.startsWith(searchValue)) as item}
      <div class:selected={item === value} class="item" on:click="{() => {choose(item); close();}}">{item}</div>
    {/each}
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    dropdown: {
      transition: 'slide',
      isProperties: {search: 'search selection'},
      class: 'ui dropdown',
      openClass: 'active visible',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
  ```
  </pre>
</ShowBlock>


<PropsSlotsMarkup />
