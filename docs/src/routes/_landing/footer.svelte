<footer>
  <img class="logo" src="/img/logo.png" alt="Industrial-ui logo" />
  <div class="flex">
    <p>
      Released by the terms of MIT license.<br>
      Copyright © VanishMax 2020
    </p>
    <div class="links">
      <a href="https://github.com/vanishmax/industrial-ui" target="_blank">
        <img src="/img/github.png" alt="GitHub repository" />
      </a>
      <a href="https://github.com/vanishmax/industrial-ui" target="_blank">
        <img src="/img/medium.png" alt="Medium post" />
      </a>
      <a href="https://github.com/vanishmax/industrial-ui" target="_blank">
        <img src="/img/habr.png" alt="Habr post (in Russian)" />
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    height: 200px;
    background: #1E1F72;
    padding: 25px 10%;
  }

  .logo {
    width: 25px;
    height: 30px;
  }

  p {
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 30px;
    color: white;
  }

  .links {
    display: flex;
  }

  .links img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  @media screen and (min-width: 1024px) {
    footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 10%;
      height: 250px;
    }

    p {
      font-size: 22px;
      margin: 0;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .logo {
      width: 50px;
      height: 64px;
    }

    .links img {
      width: 48px;
      height: 48px;
    }
  }
</style>
