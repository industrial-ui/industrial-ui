<script>
import Intro from './intro.md';
import Link from '../../_components/link.svelte';
import ShowBlock from '../../_components/show-block.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
import SimpleExample from './simple-example/semantic.svelte';
import TransitionsExample from './transitions/semantic.svelte';
</script>

<Intro />


<h2 id="simple-example">Simple example</h2>

Standard case of Modal window usage: control the opening with some button,
close by clicking on default closers or a button inside of the window.

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Modal, Button} from 'industrial-ui';
    let open = false;
  </script>
  
  <Button on:click={() => open = !open}>Toggle me</Button>
  
  <Modal bind:value={open} let:close>
    <div class="header">
      Modal header
    </div>
    <div class="content">
      <div class="description">
        <div class="ui header">Some text about modal</div>
        <p>For example, that this modal is really great!</p>
      </div>
    </div>
    <div class="actions">
      <Button class="negative deny" on:click={() => close()}>Close</Button>
      <Button class="positive right" on:click={() => close()}>Also close</Button>
    </div>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'ui button',
    },
    modal: {
      class: 'ui modal',
      openClass: 'active visible',
      overlayClass: 'ui page dimmer',
      openOverlayClass: 'visible active',
    },
  },
  ```
  </pre>
</ShowBlock>


<h2 id="transitions">Transitions</h2>

Example of transition usage with 3 default types: fade, blur and scale. Pass them as prop or configure globally
with transition options to give your Modals smoothness. Read more about transitions in 
<Link path="/docs/configuration" hash="transition">configuration page</Link>. 

<ShowBlock>
  <TransitionsExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Modal, Button} from 'industrial-ui';
    import Child from '../modal-children/semantic.svelte';
    let open1 = false, open2 = false, open3 = false;
  </script>
  
  <Button on:click={() => open1 = !open1}>Fade</Button>
  <Button on:click={() => open2 = !open2}>Blur</Button>
  <Button on:click={() => open3 = !open3}>Scale</Button>
  
  <Modal transition="fade" bind:value={open1} let:close>
    <Child closeFunction={close}>
      <Button class="positive right" on:click={() => {open1 = false; open2 = true}}>Modal "Blur"</Button>
    </Child>
  </Modal>
  
  <Modal transition="blur" transitionOptions={{opacity: 0.25, amount: 10}} bind:value={open2} let:close>
    <Child closeFunction={close}>
      <Button class="positive right" on:click={() => {open2 = false; open3 = true}}>Modal "Scale"</Button>
    </Child>
  </Modal>
  
  <Modal transition="scale" transitionOptions={{opacity: 0.25, start: 0.5}} bind:value={open3} let:close>
    <Child closeFunction={close}>
      <Button class="positive right" on:click={() => {open3 = false; open1 = true}}>Modal "Fade"</Button>
    </Child>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'ui button',
    },
    modal: {
      class: 'ui modal',
      openClass: 'active visible',
      overlayClass: 'ui page dimmer',
      openOverlayClass: 'visible active',
    },
  },
  ```
  </pre>
</ShowBlock>

There is a trick with Semantic UI. It specifies `opacity:0` in modal overlay which prevents
proper transition. You just need to remove it by writing: 

<pre class="code">
  ```css
  dialog.ui.dimmer {
    opacity: 1;
  }
  ```
</pre>

<PropsSlotsMarkup />
