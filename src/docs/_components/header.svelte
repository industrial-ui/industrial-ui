<script>
    import { Navigate } from 'svelte-router-spa'
</script>


<div class="left">
    <Navigate to="/">
        <div class="logo">
            <h2>industrial-ui</h2>
        </div>
    </Navigate>
</div>

<div class="right">
    <a href="https://github.com/VanishMax/industrial-ui" target="_blank">
        <img src="/img/github.svg" alt="link to github repository" width="40" height="40" />
    </a>
</div>


<style>
    .left {
        flex-grow: 1;
    }

    .logo {
        font-family: 'Unica One', cursive;
        text-transform: uppercase;
    }
</style>
