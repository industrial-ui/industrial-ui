<script>
</script>

<img
  class="wave"
  srcset="/img/wave-mobile.svg 480w, /img/wave.svg 1600w"
  sizes="(max-width: 600px) 100vw, 100vw"
  src="/img/wave.svg"
  alt="Elva dressed as a fairy"
>

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
    width: 80%;
    margin: 10% auto;
    color: white;
  }

  .logo {
    width: 2.75rem;
  }

  .wave {
    position: absolute;
    z-index: -1;
    width: 100%;
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
    border-radius: 4px;
    font-size: 1.2em;
  }

  br {
    display: none;
  }

  @media screen and (max-width: 1023px) {
    .info {
      margin-top: 25%;
      margin-left: 30%;
    }

    .wave {
      width: 175%;
    }

    .logo {
      width: 2.5rem;
    }

    h1 {
      font-size: 3em;
      margin-top: 1.75rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.75rem;
      font-size: 1.75em;
    }

    a {
      font-size: 1.1em;
      padding: .5rem 1rem;
    }

    br {
      display: block;
    }
  }

  @media screen and (max-width: 479px) {
    .logo {
      width: 2rem;
    }

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1.3em;
    }

    a {
      font-size: 1em;
    }
  }
</style>
