<script>
    import { Navigate, routeIsActive } from 'svelte-router-spa';
    export let currentRoute;
    $: console.log(currentRoute);
</script>

<div>
    <header>
        Getting started
    </header>
    <ul>
        <Navigate to="/docs/install">
            <li class:active={currentRoute.path === '/docs/install'}>
                Install
            </li>
        </Navigate>
        <Navigate to="/docs/button">
            <li class:active={currentRoute.path === '/docs/button'}>
                Button
            </li>
        </Navigate>
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
    }

    li:hover {
        background: rgba(255, 122, 0, .1);
    }

    li.active {
        color: rgba(255, 122, 0, 1);
    }
</style>
