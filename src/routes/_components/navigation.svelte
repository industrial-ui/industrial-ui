<script>
    import routes from '../docs/_docs/routes';
    export let segment;
</script>

<div>
    <header>
        Getting started
    </header>
    <ul>
        {#each routes as route}
            <a href="/docs/{route.name}">
                <li class:active={segment === route.name}>
                    {route.name}
                </li>
            </a>
        {/each}
    </ul>
</div>

<style>
    div {
        margin-top: 1rem;
    }

    header, li {
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
        font-size: 1em;
        text-transform: capitalize;
    }

    li:hover {
        background: rgba(255, 122, 0, .1);
    }

    li.active {
        color: rgba(255, 122, 0, 1);
    }
</style>
