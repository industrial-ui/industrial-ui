<script>
  import {Dropdown} from 'industrial-ui';
</script>

<Dropdown id="dd-p-1" position="bottom left" openOnHover is:primary>
  <span slot="trigger">
    Bottom Left
  </span>
  Hello there!
</Dropdown>

<Dropdown id="dd-p-2" position="bottom right" openOnHover is:primary>
  <span slot="trigger">
    Bottom Right
  </span>
  Hello there!
</Dropdown>

<Dropdown id="dd-p-3" position="auto" openOnHover is:primary>
  <span slot="trigger">
    Auto
  </span>
  Hello there! <br>
  Auto position calculates the<br>
  absolute position of the dropdown<br>
  to open it, so it won't go out<br>
  of the borders.<br>
  Try opening with different scroll<br>
  position.
</Dropdown>

<Dropdown id="dd-p-4" position="top left" openOnHover is:primary>
  <span slot="trigger">
    Top Left
  </span>
  Hello there!
</Dropdown>

<Dropdown id="dd-p-5" position="top right" openOnHover is:primary>
  <span slot="trigger">
    Top Right
  </span>
  Hello there!
</Dropdown>
