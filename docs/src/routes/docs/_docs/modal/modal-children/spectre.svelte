<script>
  import {Button} from 'industrial-ui';
</script>

<div class="modal-header">
  <div class="btn btn-clear float-right" on:click />
  <div class="modal-title h5">Modal header</div>
</div>

<div class="modal-body">
  <div class="content">
    <p>Some text about this awesome component</p>
  </div>
</div>

<div class="modal-footer">
  <slot />
  <Button is:error on:click>Close</Button>
</div>
