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
