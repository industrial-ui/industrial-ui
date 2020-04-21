<script>
  import {Dropdown} from 'industrial-ui';
</script>

<Dropdown transition="fadeWithColor" let:close id="dd-3" is:primary>
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
