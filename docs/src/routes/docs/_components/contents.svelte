<script>
  import routes from '../_docs/routes';
  import getHashLink from '../_helpers/get-hash-link';

  export let segment = '';

  $: contents = routes
    .reduce((accumulator, current) => {
      return [...accumulator, ...current.nested];
    }, [])
    .find(component => component.name === segment)
    .contents;
</script>

{#if contents}
  <h3>Contents</h3>
  <ul>
    {#each contents as link}
      <li>
        <a href="{getHashLink('/docs/' + segment, link.slug)}">
          {link.text}
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
  h3 {
    text-transform: uppercase;
    color: #555555;
    font-size: .8em;
    line-height: 2em;
    font-weight: 400;
    padding-left: .7rem;
    margin-bottom: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li:hover {
    background-image: linear-gradient(to right, rgba(255, 122, 0, .3), rgba(255, 122, 0, .1), rgba(255, 122, 0, 0));
    transition: all .1s;
  }

  li:hover a {
    transform: scale(1.05);
    transition: all .1s;
  }

  a {
    width: inherit;
    height: inherit;
    display: block;
    line-height: 1.8em;
    padding: .05rem 0 .05rem .7rem;
    font-size: .85em;
    text-transform: capitalize;
    color: #4b4e4d;
    font-weight: 300;
  }
</style>

