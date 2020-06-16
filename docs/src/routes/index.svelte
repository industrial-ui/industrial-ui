<script>
  import Top from './_landing/top.svelte';
  import Svgs from './_landing/svgs.svelte';
  import Intro from './_landing/intro.svelte';
  import Steps from './_landing/steps.svelte';
  import Footer from './_landing/footer.svelte';
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

  <link href="/style/landing-fonts.css" rel="stylesheet">
  <link rel="stylesheet" href="/style/landing.css" >

  <style>
    body {
      overflow-x: hidden;
      overflow-y: auto;
    }
  </style>
</svelte:head>

<Top />
<Svgs />

<Intro />
<Steps />

<!--<section class="users">
</section>-->

<Footer />
