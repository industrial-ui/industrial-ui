<script>
    import Header from './header.svelte';
    import Navigation from './navigation.svelte';
    import { Route } from 'svelte-router-spa';

    export let currentRoute;
    let open = false;
</script>

<header>
    <Header bind:open={open} />
</header>

<section>
    <nav class:open={open}>
        <Navigation {currentRoute} />
    </nav>
    <main on:click={() => open = false}>
        <Route {currentRoute} />
    </main>
</section>

<svelte:head>
    <link href="/style/fonts.css" rel="stylesheet">
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

    @media screen and (max-width: 1024px) {
        nav {
            width: 25%;
        }

        main {
            width: 75%;
        }
    }

    @media screen and (max-width: 768px) {
        nav {
            position: fixed;
            top: 3.7rem;
            right: 100%;
            transition: right .3s;
            bottom: 0;
            width: 70%;
            background: #FBFBFB;
        }

        nav.open {
            display: block;
            right: 30%;
        }

        main {
            width: 100%;
        }

        header {
            padding: 0 1rem;
        }
    }
</style>
