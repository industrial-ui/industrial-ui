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
    <Button is:primary on:click={() => close()}>
      Close
    </Button>
  </div>
</Modal>
