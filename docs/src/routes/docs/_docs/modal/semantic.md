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
      closeClass: 'hidden',
      overlayClass: 'ui page dimmer',
      openOverlayClass: 'visible active',
      closeOverlayClass: 'hidden',
    },
  },
  ```
  </pre>
</ShowBlock>


<h2 id="transitions">Transitions</h2>

<ShowBlock>
  <TransitionsExample />
  
  <pre class="code" slot="code">
  ```html
  
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
      closeClass: 'hidden',
      overlayClass: 'ui page dimmer',
      openOverlayClass: 'visible active',
      closeOverlayClass: 'hidden',
    },
  },
  ```
  </pre>
</ShowBlock>


<PropsSlotsMarkup />
