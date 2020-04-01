<script>
  import {Dropdown, Button} from 'industrial-ui';
</script>

<Dropdown openOnHover id="dd-2">
  <div slot="trigger">
    <Button>Hover me</Button>
  </div>

  <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
  <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
</Dropdown>
