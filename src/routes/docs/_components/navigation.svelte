<script>
  import {createEventDispatcher} from 'svelte';
  import routes from '../_docs/routes';
  export let segment;
  const dispatch = createEventDispatcher();
</script>

{#each routes as group}
  <div>
    <header>
      {group.title}
    </header>
    <ul>
      {#each group.nested as route}
        <li class:active={segment === route.name}>
          <a href="/docs/{route.name}" on:click={() => dispatch('close')}>
            {route.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}

<style>
  div {
    margin-top: 1rem;
  }

  header, a {
    padding-left: 2rem;
    line-height: 2em;
  }

  header {
    text-transform: uppercase;
    color: #555555;
    font-size: .8em;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    height: 2em;
  }

  li:hover {
    background: rgba(255, 122, 0, .1);
  }

  li.active {
    color: rgba(255, 122, 0, 1);
  }

  a {
    width: inherit;
    height: inherit;
    display: block;
    font-size: 1em;
    text-transform: capitalize;
  }

  a:hover {
    font-size: 1.05em;
    transition: all .1s;
  }
</style>
