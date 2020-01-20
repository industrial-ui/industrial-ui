<script>
    import { Navigate } from 'svelte-router-spa'
</script>

<main>
    <h1>Be logical!</h1>
    <p>Visit the <Navigate to="/docs/introduction" styles="link">documentation of industrial-ui </Navigate>to develop web apps faster</p>
</main>

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
        background: #12141d;
        width: 100%;
        height: 100vh;
        padding: 10% 0 0 15%;
    }

    h1 {
        color: #fff;
        font-size: 54px;
        letter-spacing: -0.02em;
    }

    p {
        color: #ff715b;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
    }

    :global(.link) {
        color: inherit;
    }
</style>
