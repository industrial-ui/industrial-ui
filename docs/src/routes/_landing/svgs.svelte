<script>
  import BackIcon from './icons/back.svelte';
  import BackMobileIcon from './icons/back-mob.svelte';
  import BackTabletIcon from './icons/back-tab.svelte';
  import BigOutlineIcon from './icons/big-outline.svelte';
  import IconsGroup from './icons/icon-group.svelte';
  import IconsLeftGroup from './icons/icon-left-group.svelte';
  import './icons/styles.css';
</script>

<div class="svgs">
  <BackIcon />
  <BackMobileIcon />
  <BackTabletIcon />
  <BigOutlineIcon />
  <IconsLeftGroup />
  <IconsGroup />
</div>

<style>
  div {
    position: absolute;
    width: 100%;
    height: 325px;
    top: 0;
    overflow-x: hidden;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    div {
      height: 400px;
    }
  }
</style>
