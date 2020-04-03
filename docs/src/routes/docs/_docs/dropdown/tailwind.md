<script>
import Title from '../../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
import SimpleExample from './simple-example/tailwind.svelte';
import OpenOnHover from './open-on-hover/tailwind.svelte';
import CustomTransition from './custom-transition/tailwind.svelte';
import Positioning from './positioning/tailwind.svelte';
import SimpleSelection from './simple-selection/tailwind.svelte';
import MultipleSelection from './multiple-selection/tailwind.svelte';
import Search from './search/tailwind.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
</script>

<Title
  id="examples"
  title="Dropdown"
/>

<h2 id="simple-example">Simple example</h2>

Dropdown usage without special properties. Just classes are configured with
some style library that makes it look nice

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>


<h2 id="open-on-hover">Open on hover effect</h2>

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger

<ShowBlock>
  <OpenOnHover />
  
  <pre class="code" slot="code">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
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
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
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
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>

<h2 id="selection-dropdown">Selection dropdown</h2>

*Simple selection*: an example of how to pick a value from the list

<ShowBlock>
  <SimpleSelection />
  
  <pre class="code" slot="code">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>

*Multiple selection*: Pick as many options as you want.

<ShowBlock>
  <MultipleSelection />
  
  <pre class="code" slot="code">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>

*Search dropdown*: Find a value in the dropdown list by typing some letters.

<ShowBlock>
  <Search />
  
  <pre class="code" slot="code">
  ```html
  No code provided
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
  }
  ```
  </pre>
</ShowBlock>


<PropsSlotsMarkup />
