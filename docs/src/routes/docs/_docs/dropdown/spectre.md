<script>
import Title from '../../_components/page-title.svelte';
import Link from '../../_components/link.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
import SimpleExample from './simple-example/spectre.svelte';
import OpenOnHover from './open-on-hover/spectre.svelte';
import CustomTransition from './custom-transition/spectre.svelte';
import Positioning from './positioning/spectre.svelte';
import SimpleSelection from './simple-selection/spectre.svelte';
import MultipleSelection from './multiple-selection/spectre.svelte';
import Search from './search/spectre.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
</script>

<Title
  id="examples"
  title="Dropdown"
  subtitle="See the Spectre CSS + IUI implementation of the dropdown"
/>


Dropdown component allows you to toggle a menu from invisible to visible state.
It can be opened by *trigger* click, hovering or focusing. Your dropdown can be positioned in different corners
relative to the wrapper and customized to look anyhow depending only on your
imagination.

All you need to know is that the component accepts two main slots: `trigger` and
`default`. The first one is passed to the trigger element (it can be button,
input or any other controller), and the second – inside the dropdown.

You can close the dropdown by clicking outside of it, and, to let the script
help you, pass an `id` property to component, especially if you have more
that one dropdown on the page. 

Spectre CSS, in turn, brings some difficulties if you want to use an input as
the trigger element. In that case, you will have to omit the IUI predefined
markup by utilizing wrappers. See <Link path="/docs/dropdown" hash="selection dropdown">real life example</Link>
for it.

<h2 id="simple-example">Simple example</h2>

Dropdown usage without special properties. Styling is added through Industrial-ui's
<Link path="/docs/dropdown" hash="configuration">configuration</Link> with the usage 
of some Spectre CSS classes.

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
  </script>
  
  <Dropdown let:close id="dd-1" is:primary>
    <span slot="trigger">
      Toggle me
    </span>
  
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Hello, there</a>
    </div>
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Do some action</a>
    </div>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
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
</ShowBlock>

Open the code and configuration tabs in the block above to see that all the magic is done
by adding the Spectre classes which you can find in the stylesheet's documentation and 
its examples. The problem with Spectre specifically is that it requires you to make the
trigger a button by adding `.btn` class on it.


<h2 id="open-on-hover">Open on hover effect</h2>

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger.

<ShowBlock>
  <OpenOnHover />
    
  <pre class="code" slot="code">
  ```html
  <Dropdown openOnHover id="dd-2" is:primary>
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

  <pre class="code" slot="config">
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

  <pre class="code" slot="config">
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
    import {Dropdown} from 'industrial-ui';
  </script>
  
  <Dropdown transition="fadeWithColor" is:primary let:close id="dd-3">
    <span slot="trigger">
      Toggle me
    </span>
  
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Hello, there</a>
    </div>
    <div class="menu-item">
      <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Do some action</a>
    </div>
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
</ShowBlock>

<h2 id="selection-dropdown">Selection dropdown</h2>

This section shows how the dropdown can be used in real frontend cases. 
With Spectre CSS you should be careful. For example, in the **Search dropdown**
case you have to omit the predefined markup by using the `nowrap-trigger` slot
and even add multiple html-elements to it. By doing this, you loose provided 
logic and have to deal with it with slot variables and functions.
Multiple selection is mostly impossible to implement with the pure Spectre CSS without
adding extra styles.

*Simple selection*: an example of how to pick a value from the list

<ShowBlock>
  <SimpleSelection />
  
  <pre class="code" slot="code">
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
  
  <pre class="code" slot="config">
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
</ShowBlock>

*Multiple selection*: Pick as many options as you want.

<ShowBlock>
  <MultipleSelection />
  
  <pre class="code" slot="code">
  ```html
  Unfortunately, no code provided
   ```
   </pre>
    
  <pre class="code" slot="config">
  ```html
  Unfortunately, no code provided
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
    <label slot="nowrap-trigger" class="form-label" for="search-dd">Choose any Latin country</label>
    <input
      slot="nowrap-trigger"
      class="form-input"
      type="text"
      id="search-dd"
      placeholder="Country name"
      value={value}
      on:input={(e) => input(e)}
      on:focus={() => open()}
      on:blur={() => close()}
    >
  
    {#each LATIN_COUNTRIES.filter(itm => (itm.startsWith(searchValue) && itm !== value)) as item}
      <div class="menu-item" on:click="{() => {choose(item); close()}}">
        <a href="/docs/dropdown" on:click|preventDefault>{item}</a>
      </div>
    {/each}
  </Dropdown>
  ```
  </pre>
  
  <pre class="code" slot="config">
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
</ShowBlock>


<PropsSlotsMarkup />
