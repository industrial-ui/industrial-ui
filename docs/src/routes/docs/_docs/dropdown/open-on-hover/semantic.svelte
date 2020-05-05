<script>
  import {Dropdown, Button} from 'industrial-ui';
</script>

<Dropdown let:close openOnHover id="dd-2">
  <div slot="trigger">
    <Button>Hover me</Button>
  </div>

  <div class="item" on:click={() => close()}>Hello, there</div>
  <div class="item" on:click={() => close()}>Do some action</div>
</Dropdown>
