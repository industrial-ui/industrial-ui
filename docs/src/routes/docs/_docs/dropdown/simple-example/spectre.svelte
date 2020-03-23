<script>
  import {Dropdown} from 'industrial-ui';
</script>

<Dropdown let:close is:primary id="dd-1">
  <span slot="trigger">
    Toggle me
  </span>

  <div class="menu-item">
    <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Hello, there</a>
  </div>
  <div class="menu-item">
    <a href="/docs/dropdown" on:click|preventDefault={() => close()}>Do some action</a>
  </div>
</Dropdown>
