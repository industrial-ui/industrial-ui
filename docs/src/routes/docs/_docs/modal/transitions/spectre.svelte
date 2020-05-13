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
