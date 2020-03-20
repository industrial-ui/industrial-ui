<script>
  import {Dropdown, Button} from 'industrial-ui';
</script>

<Dropdown let:close={close} openOnHover id="dd-2">
  <div slot="trigger">
    <Button>Toggle me</Button>
  </div>

  <div class="item" on:click={() => close()}>Hello, there</div>
  <div class="item" on:click={() => close()}>Do some action</div>
</Dropdown>
