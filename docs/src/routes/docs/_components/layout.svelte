<script>
  import {onMount} from 'svelte';
  import Header from './header.svelte';
  import Navigation from './navigation.svelte';
  import Contents from './contents.svelte';

  export let segment;
  let open = false;

  onMount(() => {
    import('tocca');
  });
</script>

<svelte:head>
  <link href="/style/fonts.css" rel="stylesheet">
  <link href="/style/content.css" rel="stylesheet">
</svelte:head>

<svelte:body on:swiperight={() => open = true} on:swipeleft={() => open = false} />

<header>
  <Header bind:open={open} />
</header>

<nav class:open={open}>
  <Navigation {segment} on:close={() => open = false} />
</nav>

<section>
  <main on:click={() => open = false} id="content">
    <slot />

    <div class="grow" />
    <footer>
      <hr />
      <div>
        Copyright © <a href="https://github.com/VanishMax" target="_blank" rel="noreferrer noopener">VanishMax</a> 2020
      </div>
    </footer>
  </main>

  <aside id="contents">
    <Contents {segment} />
  </aside>
</section>

<style lang="scss">
  :global(body) {
    font-family: 'Noto Sans', sans-serif;
    overflow: hidden;
  }

  header {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.7rem;
    padding: 0 2rem;
    border-bottom: 1px solid #EEEEEE;
    background: white;
    z-index: 5;
  }

  section {
    position: absolute;
    top: 3.7rem;
    bottom: 0;
    left: calc(100vw / 12 * 2);
    right: 0;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  nav {
    position: fixed;
    top: 3.7rem;
    left: 0;
    bottom: 0;
    background: rgba(220, 220, 220, .1);
    width: calc(100vw / 12 * 2);
    overflow-y: auto;
    border-right: 1px solid #EEEEEE;
    z-index: 4;
  }

  main {
    width: calc(100vw / 12 * 8);
    padding: 1rem 4rem;
    display: flex;
    flex-direction: column;
  }

  aside {
    width: calc(100vw / 12 * 2);
    position: sticky;
    top: 0;
  }

  .grow {
    flex-grow: 1;
  }

  footer {
    margin-top: 1rem;
    text-align: center;
    color: #646866;
  }

  footer > div {
    height: 100%;
    padding: 1rem 0 .3rem;
  }

  footer a {
    color: #646866 !important;
  }

  @media screen and (max-width: 1024px) {
    nav {
      width: 25%;
    }

    main {
      width: 100%;
      padding: 1rem 2rem;
    }

    section {
      left: 25%;
    }

    aside {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      left: unset;
      right: 100%;
      transition: right .3s;
      width: 50%;
      background: #FBFBFB;
    }

    nav.open {
      display: block;
      right: 50%;
    }

    section {
      width: 100%;
      left: 0;
    }

    header {
      padding: 0 1rem;
    }
  }

  @media screen and (max-width: 560px) {
    nav {
      width: 70%;
    }

    nav.open {
      right: 30%;
    }

    main {
      padding: 1rem 1.5rem;
    }
  }
</style>
