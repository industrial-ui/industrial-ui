<script>
  import WaveIcon from './icons/wave.svelte';
</script>

<WaveIcon />

<header>
  <div class="info container">
    <img src="/img/logo.png" alt="Industrial-ui logo" />
    <h1>Industrial-ui</h1>
    <p>Styleless, pure functional UI components</p>
    <a href="/docs/installation">Go to documentation</a>
  </div>
</header>

<style>
  header {
    height: 100vh;
  }

  .info {
    width: 80%;
    margin: 10% auto;
    color: white;
  }

  img {
    width: 35px;
  }

  h1 {
    font-weight: 500;
    margin-top: 3.5rem;
    margin-bottom: 1.3rem;
    font-size: 3.3em;
  }

  p {
    margin-top: 0;
    margin-bottom: 3.5rem;
    font-size: 1.75em;
    font-weight: normal;
  }

  a {
    display: inline-block;
    border: 1px solid #FFFFFF;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.2em;
  }
</style>
