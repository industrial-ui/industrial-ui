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
    height: 325px;
    padding-top: 17.5%;
    padding-left: 10%;
  }

  .info {
    width: 50%;
    color: white;
    position: relative;
    z-index: 10;
  }

  .logo {
    width: 22px;
    height: 27px;
  }

  h1 {
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 7px;
    font-size: 24px;
  }

  p {
    margin-top: 0;
    margin-bottom: 13px;
    font-size: 13px;
    font-weight: normal;
  }

  a {
    display: inline-block;
    border: 1px solid #FFFFFF;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 9px;
  }

  br {
    display: block;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    header {
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    header {
      height: 700px;
    }
  }

  @media screen and (min-width: 1441px) {
    header {
      height: 800px;
    }

    .info {
      padding-left: 100px;
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      padding-top: 200px;
      padding-left: 175px;
    }

    .info {
      width: 70%;
    }

    .logo {
      width: 35px;
      height: 43px;
    }

    h1 {
      margin-top: 40px;
      margin-bottom: 21px;
      font-size: 50px;
    }

    p {
      margin-top: 0;
      margin-bottom: 40px;
      font-size: 30px;
    }

    a {
      padding: 15px 20px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1220px) {
    br {
      display: none;
    }

    header {
      padding-left: 200px;
    }
  }
</style>
