<script>
  import {Modal, Button} from 'industrial-ui';
  let open = false;
</script>

<Button on:click={() => open = !open}>Toggle me</Button>

<Modal bind:value={open}>
  <h1>kek</h1>
</Modal>
