<!--<img
  class="wave"
  srcset="/img/wave-mobile.svg 480w, /img/wave.svg 1600w"
  sizes="(max-width: 600px) 100vw, 100vw"
  src="/img/wave.svg"
  alt="Elva dressed as a fairy"
>-->

<header>
  <div class="info container">
    <img class="logo" src="/img/logo.png" alt="Industrial-ui logo" />
    <h1>Industrial-ui</h1>
    <p>Styleless, pure functional<br /> UI components</p>
    <a href="/docs/installation">Go to documentation</a>
  </div>
</header>



<style>
  header {
    height: 100vh;
  }

  .info {
    width: 90%;
    margin: 10% auto;
    color: white;
    position: relative;
    z-index: 10;
  }

  .logo {
    width: 2.75rem;
  }

  /*.wave {
    position: absolute;
    z-index: -1;
    width: 100%;
  }*/

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
    border-radius: 4px;
    font-size: 1.2em;
  }

  br {
    display: none;
  }
</style>
