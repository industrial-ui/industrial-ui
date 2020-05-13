<script>
import Intro from './intro.md';
import Link from '../../_components/link.svelte';
import ShowBlock from '../../_components/show-block.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
import SimpleExample from './simple-example/tailwind.svelte';
import TransitionsExample from './transitions/tailwind.svelte';
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
    <div 
      slot="close" 
      class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer"
      on:click={() => close()}
    >
      ✕
    </div>
  
    <h2 class="font-bold text-xl mb-2">Modal header</h2>
    <p class="text-gray-700 text-base">Some text about this awesome component</p>
  
    <div class="flex justify-end mt-4">
      <div 
        class="bg-red-200 cursor-pointer font-semibold py-2 px-6 rounded inline-flex items-center" 
        on:click={() => close()}
      >
        Close
      </div>
    </div>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    modal: {
      class: 'w-6/12 relative bg-white shadow-lg rounded-md p-8',
      overlayClass: 'fixed inset-0 h-screen w-full flex flex-col items-center justify-center bg-black bg-opacity-75 z-10',
      closeOverlayClass: 'hidden',
    }
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
    import Child from '../modal-children/tailwind.svelte';
    let open1 = false, open2 = false, open3 = false;
  </script>
  
  <Button on:click={() => open1 = !open1}>Fade</Button>
  <Button on:click={() => open2 = !open2}>Blur</Button>
  <Button on:click={() => open3 = !open3}>Scale</Button>
  
  <Modal transition="fade" bind:value={open1} let:close>
    <div slot="close" class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer" on:click={() => close()}>✕</div>
    <Child on:click={() => close()}>
      <div on:click={() => {open1 = false; open2 = true}} class="bg-green-200 cursor-pointer py-2 px-6 rounded items-center mr-4">
        Modal "Blur"
      </div>
    </Child>
  </Modal>
  
  <Modal transition="blur" transitionOptions={{opacity: 0.25, amount: 10}} bind:value={open2} let:close>
    <div slot="close" class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer" on:click={() => close()}>✕</div>
    <Child on:click={() => close()}>
      <div on:click={() => {open2 = false; open3 = true}} class="bg-green-200 cursor-pointer py-2 px-6 rounded items-center mr-4">
        Modal "Scale"
      </div>
    </Child>
  </Modal>
  
  <Modal transition="scale" transitionOptions={{opacity: 0.25, start: 0.5}} bind:value={open3} let:close>
    <div slot="close" class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer" on:click={() => close()}>✕</div>
    <Child on:click={() => close()}>
      <div on:click={() => {open3 = false; open1 = true}} class="bg-green-200 cursor-pointer py-2 px-6 rounded items-center mr-4">
        Modal "Fade"
      </div>
    </Child>
  </Modal>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    modal: {
      class: 'w-6/12 relative bg-white shadow-lg rounded-md p-8',
      overlayClass: 'fixed inset-0 h-screen w-full flex flex-col items-center justify-center bg-black bg-opacity-75 z-10',
      closeOverlayClass: 'hidden',
    }
  },
  ```
  </pre>
</ShowBlock>


Here the `Child` component is the insides of the Modal with a button that triggers `click` event to close Modal. 

<PropsSlotsMarkup />
