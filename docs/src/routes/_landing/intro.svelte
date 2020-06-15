<script>
  import IntroIcon from './icons/triangles-intro.svelte';
  import IntroDotsIcon from './icons/dots-intro.svelte';
</script>

<section class="introduction">
  <div class="info">
    <h2>Introduction</h2>
    <p>Industrial-ui is a fast and feature-rich library of styleless UI components with all needed logic.</p>
    <p>Don't refactor, configure it to use with your own styles!</p>
  </div>

  <IntroDotsIcon />
  <IntroIcon />
</section>

<style>
  section {
    height: 220px;
    padding-left: 10%;
    padding-top: 10%;
    position: relative;
    overflow-x: hidden;
  }

  div.info {
    width: 50%;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    color: #F168B4;
    margin-top: 0;
    margin-bottom: 18px;
  }

  p {
    color: #1E1F72;
    font-size: 13px;
    margin-bottom: 0;
  }

  section p:last-child {
    margin-top: 15px;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    section {
      padding-top: 5%;
    }
  }

  @media screen and (min-width: 1024px) {
    section {
      padding-top: 5%;
      height: 350px;
    }

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 22px;
    }
  }
</style>
