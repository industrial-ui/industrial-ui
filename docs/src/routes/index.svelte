<main>
    <h1>Be logical!</h1>
    <p>Visit the <a rel="prefetch" href="/docs/installation" class="link">documentation of industrial-ui</a> to develop web apps faster</p>
</main>

<svelte:head>
    <title>Industrial-UI – industry-oriented library of unstyled UI-components</title>
    <meta name="title" content="Industrial-UI — industry-oriented library of unstyled UI-components">
    <meta name="description" content="Industrial-UI — industry-oriented library of unstyled UI-components. Enjoy coding!">
    <meta name="keywords" content="industrial-ui, iui, ui-kit, ui-components, library, design, logic, javascript, svelte, npm">
    <meta name="author" content="VanishMax">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://industrial-ui.com/">
    <meta property="og:title" content="Industrial-UI — industry-oriented library of unstyled UI-components">
    <meta property="og:description" content="Industrial-UI — industry-oriented library of unstyled UI-components. Enjoy coding!">
    <meta property="og:image" content="https://industrial-ui.com/img/icon.png">
</svelte:head>

<style>
    @import url('https://rsms.me/inter/inter.css');
    :global(html) {
        font-family: 'Inter', sans-serif;
    }
    @supports (font-variation-settings: normal) {
        :global(html) {
            font-family: 'Inter var', sans-serif;
        }
    }

    :global(body) {
        overflow: hidden;
        margin: 0;
    }

    main {
        width: 100%;
        height: 100vh;
        padding: 10% 0 0 15%;
    }

    h1 {
        color: #443333;
        font-size: 54px;
        letter-spacing: -0.02em;
    }

    p {
        color: #FF7A00;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
    }

    :global(.link) {
        text-decoration: underline;
    }


    @media screen and (max-width: 1024px) {
        main {
            padding: 10% 0 0 10%;
        }
    }

    @media screen and (max-width: 768px) {
        main {
            padding: 10% 0 0 5%;
        }

        p {
            width: 80%;
            line-height: 2em;
        }
    }
</style>
