<script>
  import {Modal, Button} from 'industrial-ui';
  import Child from '../modal-children/tailwind.svelte';
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

  <Child on:click={() => close()} />
</Modal>
