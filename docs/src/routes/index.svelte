<script>
  import Top from './_landing/top.svelte';
  import Svgs from './_landing/svgs.svelte';
  import SimpleBar from '@woden/svelte-simplebar'
  import 'simplebar/dist/simplebar.css';
</script>

<svelte:head>
  <title>Industrial-ui – styleless, pure functional UI components</title>
  <meta name="title" content="Industrial-ui – styleless, pure functional UI components">
  <meta name="description" content="Production-oriented library with a feature rich UI components with no styles at all. Enjoy coding!">
  <meta name="keywords" content="industrial-ui, iui, ui-kit, ui-components, library, design, logic, javascript, svelte, front-end, npm">
  <meta name="author" content="VanishMax">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://industrial-ui.com/">
  <meta property="og:title" content="Industrial-ui – styleless, pure functional UI components">
  <meta property="og:description" content="Production-oriented library with a feature rich UI components with no styles at all. Enjoy coding!">
  <meta property="og:image" content="https://industrial-ui.com/img/logo.png">

  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/style/landing.css" >

  <noscript>
    <style>
      .simplebar-content-wrapper {
        overflow: auto;
      }
    </style>
  </noscript>
</svelte:head>

<SimpleBar style="height: 3000px;" direction="vertical">
  <Top />
  <Svgs />

  <section class="introduction">
  </section>

  <section class="steps">
  </section>

  <section class="users">
  </section>


  <footer>
  </footer>
  <main></main>
</SimpleBar>

<style>
  :global(body) {
    background: white;
  }
</style>
