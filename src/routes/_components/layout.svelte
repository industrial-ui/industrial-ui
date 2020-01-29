<script>
  import {onMount} from 'svelte';
  import Header from './header.svelte';
  import Navigation from './navigation.svelte';

  export let segment;
  let open = false;

  onMount(() => {
    import('tocca');
  });
</script>

<svelte:head>
  <link href="/style/fonts.css" rel="stylesheet">
</svelte:head>

<header>
  <Header bind:open={open} />
</header>
<div id="swipe-container-left" class:disabled={open} on:swiperight={() => open = true} />
<div id="swipe-container-right" class:disabled={!open} on:swipeleft={() => open = false} />

<section>
  <nav class:open={open}>
    <Navigation {segment} on:close={() => open = false} />
  </nav>
  <main on:click={() => open = false}>
    <slot />
  </main>
</section>

<style>
  :global(body) {
    font-family: 'Noto Sans', sans-serif;
  }

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.7rem;
    padding: 0 2rem;
    border-bottom: 1px solid #EEEEEE;
  }

  #swipe-container-left,
  #swipe-container-right,
  #swipe-container-right.disabled,
  #swipe-container-left.disabled {
    display: none;
    position: fixed;
    top: 3.7rem;
    left: 0;
    width: 50%;
    bottom: 0;
  }

  #swipe-container-right {
    width: 100%;
  }

  section {
    display: flex;
    min-height: calc(100vh - 3.7rem);
  }

  nav {
    background: rgba(220, 220, 220, .1);
    width: calc(100% / 12 * 2);
    border-right: 1px solid #EEEEEE;
  }

  main {
    width: calc(100% / 12 * 10);
    padding: 1rem;
  }

  @media screen and (max-width: 1024px) {
    nav {
      width: 25%;
    }

    main {
      width: 75%;
    }
  }

  @media screen and (max-width: 768px) {
    #swipe-container-left,
    #swipe-container-right {
      display: block;
    }

    nav {
      position: fixed;
      top: 3.7rem;
      right: 100%;
      transition: right .3s;
      bottom: 0;
      width: 70%;
      background: #FBFBFB;
    }

    nav.open {
      display: block;
      right: 30%;
    }

    main {
      width: 100%;
    }

    header {
      padding: 0 1rem;
    }
  }
</style>
