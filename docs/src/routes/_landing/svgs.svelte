<script>
  import BackIcon from './icons/back.svelte';
  import BigOutlineIcon from './icons/big-outline.svelte';
  import IconsGroup from './icons/icon-group.svelte';
  import IconsLeftGroup from './icons/icon-left-group.svelte';
</script>

<div class="svgs">
  <BackIcon />
  <BigOutlineIcon />
  <IconsLeftGroup />
  <IconsGroup />
</div>

<style>
  :global(.svgs svg) {
    position: absolute;
  }

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

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    div {
      height: 700px;
    }
  }

  @media screen and (min-width: 1441px) {
    div {
      height: 800px;
    }
  }
</style>
