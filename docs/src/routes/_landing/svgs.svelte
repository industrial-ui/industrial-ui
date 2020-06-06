<script>
  import BigRedIcon from './icons/big-red.svelte';
  import BigOutlineIcon from './icons/big-outline.svelte';
  import GreenOneIcon from './icons/green-one.svelte';
  import GreenTwoIcon from './icons/green-two.svelte';
  import SquareCirclesIcon from './icons/square-circles.svelte';
  import TriangleOutlineIcon from './icons/triangle-outline.svelte';
  import TriangleRedIcon from './icons/triangle-red.svelte';
  import './icons/styles.css';
</script>

<div class="svgs">
  <BigRedIcon />
  <BigOutlineIcon />
  <BigOutlineIcon second />
  <GreenOneIcon />
  <GreenTwoIcon />
  <GreenTwoIcon second />
  <SquareCirclesIcon />
  <SquareCirclesIcon second />
  <TriangleOutlineIcon />
  <TriangleOutlineIcon second />
  <TriangleRedIcon />
</div>

<style>
  .svgs {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
  }
</style>
