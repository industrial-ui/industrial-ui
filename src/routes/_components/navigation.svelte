<script>
    export let segment;
</script>

<div>
    <header>
        Getting started
    </header>
    <ul>
        <a href="/docs/introduction">
            <li class:active={segment === 'introduction'}>
                Introduction
            </li>
        </a>
        <a href="/docs/installation">
            <li class:active={segment === 'installation'}>
                Install
            </li>
        </a>
        <a href="/docs/button">
            <li class:active={segment === 'button'}>
                Button
            </li>
        </a>
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
