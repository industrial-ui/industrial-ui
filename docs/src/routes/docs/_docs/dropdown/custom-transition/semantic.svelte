<script>
  import {Dropdown, Button} from 'industrial-ui';
</script>

<Dropdown transition="fadeWithColor" let:close={close} id="dd-3">
  <div slot="trigger">
    <Button>Toggle me</Button>
  </div>

  <div class="item" on:click={() => close()}>Hello, there</div>
  <div class="item" on:click={() => close()}>Do some action</div>
</Dropdown>
