<script>
import Intro from './intro.md';
import Link from '../../_components/link.svelte';
import ShowBlock from '../../_components/show-block.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
import SimpleExample from './simple-example/spectre.svelte';
import TransitionsExample from './transitions/spectre.svelte';
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
    <div slot="in-overlay" class="modal-overlay" />
  
    <div class="modal-header">
      <div class="btn btn-clear float-right" on:click={() => close()} />
      <div class="modal-title h5">Modal header</div>
    </div>
    <div class="modal-body">
      <div class="content">
        <p>Some text about this awesome component</p>
      </div>
    </div>
    <div class="modal-footer">
      <Button is:error on:click={() => close()}>
        Close
      </Button>
    </div>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'btn-primary',
        error: 'btn-error'
      },
    },
    modal: {
      class: 'modal-container',
      overlayClass: 'modal',
      openOverlayClass: 'active',
    },
  },
  ```
  </pre>
</ShowBlock>

Take a note, Spectre provides overlay as another block inside your Modal wrapper
which is considered as overlay in Industrial-ui. To add it, you need to use
attribute `slot="in-overlay"` in your code.


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
    import Child from '../modal-children/spectre.svelte';
    let open1 = false, open2 = false, open3 = false;
  </script>
  
  <Button is:primary on:click={() => open1 = !open1}>Fade</Button>
  <Button is:primary on:click={() => open2 = !open2}>Blur</Button>
  <Button is:primary on:click={() => open3 = !open3}>Scale</Button>
  
  <Modal transition="fade" bind:value={open1} let:close>
    <div slot="in-overlay" class="modal-overlay" />
    <Child on:click={() => close()}>
      <Button is:primary on:click={() => {open1 = false; open2 = true}}>Modal "Blur"</Button>
    </Child>
  </Modal>
  
  <Modal transition="blur" transitionOptions={{opacity: 0.25, amount: 10}} bind:value={open2} let:close>
    <div slot="in-overlay" class="modal-overlay" />
    <Child on:click={() => close()}>
      <Button is:primary on:click={() => {open2 = false; open3 = true}}>Modal "Scale"</Button>
    </Child>
  </Modal>
  
  <Modal transition="scale" transitionOptions={{opacity: 0.25, start: 0.5}} bind:value={open3} let:close>
    <div slot="in-overlay" class="modal-overlay" />
    <Child on:click={() => close()}>
      <Button is:primary on:click={() => {open3 = false; open1 = true}}>Modal "Fade"</Button>
    </Child>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'btn-primary',
        error: 'btn-error'
      },
    },
    modal: {
      class: 'modal-container',
      overlayClass: 'modal',
      openOverlayClass: 'active',
    },
  },
  ```
  </pre>
</ShowBlock>

Here the `Child` component is the insides of the Modal with a button that triggers `click` event to close Modal.


<PropsSlotsMarkup />
