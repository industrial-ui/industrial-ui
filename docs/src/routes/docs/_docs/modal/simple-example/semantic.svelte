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
