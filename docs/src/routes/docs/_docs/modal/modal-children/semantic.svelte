<script>
  import {Button} from 'industrial-ui';
  export let closeFunction = null;
</script>

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
  <Button class="negative deny" on:click={() => closeFunction()}>Close</Button>
  <slot />
</div>
