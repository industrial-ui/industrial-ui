<script>
  import BackIcon from './icons/back.svelte';
  import BackMobileIcon from './icons/back-mob.svelte';
  import BigOutlineIcon from './icons/big-outline.svelte';
  import IconsGroup from './icons/icon-group.svelte';
  import IconsLeftGroup from './icons/icon-left-group.svelte';
  import './icons/styles.css';
</script>

<div class="svgs">
  <BackIcon />
  <BackMobileIcon />
  <BigOutlineIcon />
  <IconsLeftGroup />
  <IconsGroup />
</div>

<style>
  .svgs {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
  }
</style>
