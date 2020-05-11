<script>
  import {Modal, Button} from 'industrial-ui';
  let open = false;
</script>

<Button on:click={() => open = !open}>Toggle me</Button>

<Modal bind:value={open} let:close>
  <div slot="close" class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer" on:click={() => close()}>
    ✕
  </div>

  <h2 class="font-bold text-xl mb-2">Modal header</h2>
  <p class="text-gray-700 text-base">Some text about this awesome component</p>

  <div class="flex justify-end mt-4">
    <div class="bg-red-200 cursor-pointer font-semibold py-2 px-6 rounded inline-flex items-center" on:click={() => close()}>
      Close
    </div>
  </div>
</Modal>
