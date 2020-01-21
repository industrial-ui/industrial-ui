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
        <Navigation {currentRoute} />
    </nav>
    <main>
        <Route {currentRoute} />
    </main>
</section>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Unica+One&display=swap" rel="stylesheet">
</svelte:head>

<style>
    :global(body) {
        font-family: 'Noto Sans', sans-serif;
    }

    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3.7rem;
        padding: 0 2rem;
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
        min-height: calc(100vh - 3.7rem);
    }

    nav {
        background: rgba(220, 220, 220, .1);
        width: calc(100% / 12 * 2);
        border-right: 1px solid #EEEEEE;
    }

    main {
        width: calc(100% / 12 * 10);
        padding: 1rem;
    }
</style>
