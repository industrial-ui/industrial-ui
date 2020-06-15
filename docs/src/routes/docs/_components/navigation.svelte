<script>
  import {createEventDispatcher} from 'svelte';
  import routes from '../_docs/routes';
  import StyleChange from './style-change.svelte';

  export let segment;
  const dispatch = createEventDispatcher();
</script>

<StyleChange inNav />

{#each routes as group}
  <div>
    <header>
      {group.title}
    </header>
    <ul>
      {#each group.nested as route}
        <li class:active={segment === route.name}>
          <a href="/docs/{route.name}" on:click={() => dispatch('close')} rel="prefetch">
            {route.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}

<a href="https://github.com/VanishMax/industrial-ui" target="_blank" rel="noreferrer noopener">
  <span>Check out iui repo</span>
  <img src="/img/github.svg" alt="link to github repository" />
</a>

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
    background: #dcddf9;
  }

  li.active {
    color: #6C6EE5;
  }

  a:not([target="_blank"]) {
    width: inherit;
    height: inherit;
    display: block;
    font-size: 1em;
    text-transform: capitalize;
  }

  a:not([target="_blank"]):hover {
    font-size: 1.05em;
    transition: all .1s;
  }

  a[target="_blank"] {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
  }

  a[target="_blank"] img {
    width: 1.75rem;
    height: 1.75rem;
  }

  a[target="_blank"] span {
    margin-right: 0.75rem;
    font-size: 0.9em;
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    a[target="_blank"] {
      display: none;
    }
  }
</style>
