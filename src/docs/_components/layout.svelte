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

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Unica+One&display=swap" rel="stylesheet">
</svelte:head>

<style>
    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3.7em;
        padding: 0 2em;
        border-bottom: 1px solid #EEEEEE;
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
