<script>
    import Header from './header.svelte';
    import Navigation from './navigation.svelte';
    import { Route } from 'svelte-router-spa';
    export let currentRoute;
</script>

<header>
    <Header />
</header>

<section>
    <nav>
        <Navigation />
    </nav>
    <main>
        <Route {currentRoute} />
    </main>
</section>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60%;
        height: 3em;
        padding: 0 1em;
    }

    @media screen and (max-width: 1024px) {
        header {
            width: 80%
        }
    }
    @media screen and (max-width: 640px) {
        header {
            width: 100%
        }
    }

    section {
        display: flex;
    }

    nav {
        flex-grow: 1;
    }

    main {
        flex-grow: 3;
    }
</style>
