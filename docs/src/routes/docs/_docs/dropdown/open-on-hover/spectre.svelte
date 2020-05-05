<script>
  import {Dropdown} from 'industrial-ui';
</script>

<Dropdown openOnHover id="dd-2" is:primary>
  <span slot="trigger">
    Hover me
  </span>

  <div class="menu-item">
    <a href="/docs/dropdown" on:click|preventDefault>Hello, there</a>
  </div>
  <div class="menu-item">
    <a href="/docs/dropdown" on:click|preventDefault>Do some action</a>
  </div>
</Dropdown>
