<script>
  import {Modal, Button} from 'industrial-ui';
  let open = false;
</script>

<Button on:click={() => open = !open}>Toggle me</Button>

<Modal bind:value={open} let:close>
  <div slot="close" class="close icon" on:click={() => close()}>
    ✕
  </div>

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
    <div class="ui black deny button" on:click={() => close()}>
      Close
    </div>
  </div>
</Modal>
