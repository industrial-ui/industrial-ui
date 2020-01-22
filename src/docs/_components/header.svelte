<script>
    import { Navigate } from 'svelte-router-spa';

    export let open;
</script>


<div class="left">
    <label>
        <input
            type="checkbox"
            name="menu-opener"
            id="menu-opener"
            bind:checked={open}
        >
        <i/>
    </label>
    <Navigate to="/">
        <div class="logo">
            <h2>industrial-ui</h2>
        </div>
    </Navigate>
</div>

<div class="right">
    <a href="https://github.com/VanishMax/industrial-ui" target="_blank">
        <img src="/img/github.svg" alt="link to github repository" />
    </a>
</div>


<style>
    .left {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    .logo {
        font-family: 'Unica One', sans-serif;
        text-transform: uppercase;
    }

    img {
        width: 2.3rem;
        height: 2.3rem;
    }

    label, input {
        display: none;
    }

    i {
        transform: scale(1);
        transition: transform .3s;
    }
    i,
    i::after,
    i::before {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background: currentColor
    }
    i::after,
    i::before {
        content: "";
        position: absolute;
        top: -6px
    }
    i::after {
        top: 6px
    }


    @media screen and (max-width: 768px) {
        label {
            display: block;
            margin-right: 1rem;
        }

        input:checked + i {
            transform: rotate(90deg);
            transition: transform .3s;
        }
    }
</style>
