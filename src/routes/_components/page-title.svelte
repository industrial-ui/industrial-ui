<script>
  export let title;
  export let subtitle = '';
</script>

<header>
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <hr />
</header>

<style>
  h1 {
    margin: 0 0 0.3rem !important;
  }

  p {
    margin: 0;
    font-style: italic;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(100, 100, 100, 0.8), rgba(100, 100, 100, 0.5), rgba(0, 0, 0, 0));
  }

  header {
    margin-bottom: 1.5rem;
  }
</style>
