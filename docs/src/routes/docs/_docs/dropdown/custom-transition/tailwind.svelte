<script>
  import {Dropdown, Button} from 'industrial-ui';
</script>

<Dropdown transition="fadeWithColor" let:close id="dd-3">
  <div slot="trigger">
    <Button>Toggle me</Button>
  </div>

  <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Hello, there!</span>
  <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Do some action</span>
</Dropdown>
