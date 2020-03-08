<script>
import Title from '../../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
import SimpleExample from './simple-example.md';
import OpenOnHover from './open-on-hover.md';
import CustomTransition from './custom-transition.md';
import SimpleSelection from './simple-selection.md';
</script>

<Title
  id="examples"
  title="Dropdown"
/>

### Simple example

Dropdown usage without special properties. Just classes are configured with
some style library that makes it look nice

<SimpleExample />


### Open on hover effect

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger

<OpenOnHover />


### Custom transition

You can configure a custom transition and pass its name to the `transition` prop or to the configuration
object of the dropdown. Transition should be a function that operates on some node element and has options
like `delay`, `duration` and other properties perfectly described in the 
<a href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank">Svelte's documentation</a> 

<CustomTransition />

## Selection dropdown

Simple selection: an example of how to pick a value from the list

<SimpleSelection />


## Dropdown roadmap

To make it work perfectly, there is a need in:
 - **Positioning**. We need to calculate the position of the dropdown (top-left, top-right,
bottom-left or bottom-right) depending of how close the window borders are.
 - Consider such **cases** from semantic-ui as selection menu, search dropdown. 
May be just show it in the docs, and that's all.

<h2 id="props">Props</h2>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | `value` | `Boolean` | `false` | Handles the open/close state of the dropdown |
  | `id` | `String` | `''` | **id** of the dropdown (not wrapper). It is advised to put the **id** if you have more than 1 dropdown on the page |
  | `openOnHover` | `Boolean` | `false` | If `true`, will open dropdown on *mouseenter* and close on *mouseleave* |
  | `triggerClass` | `String` | `''` | Trigger (opener element that should be clicked) class |
  | `dropdownClass` | `String` | `''` | Dropdown class |
  | `transition` | `String` | `null` | Transition applied for the dropdown (it is better to put in the config but not as a prop) |
</div>


<h2 id="markup">Resulting markup</h2>

This is how the markup of the simplest dropdown will look like

<pre class="code">
  ```html
    <div class="your wrapper classes">
      <div class="trigger class"></div>
      <div class="dropdown class" id="prop-id"></div>
    </div>
  ```
</pre>
