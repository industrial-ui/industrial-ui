<script>
	import {Dropdown, IUI, Button} from 'industrial-ui';
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <IUI>
    <Dropdown id="my-drop" openOnHover>
      <div slot="trigger" class="dd-trigger">
        Toggle the dropdown
      </div>
      <div class="dd">Well.. Hello, world!</div>
    </Dropdown>

    <Button>
      This is a button from IUI
    </Button>
  </IUI>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  :global(#my-drop) {
    max-width: 300px;
    margin: 2rem auto;
    position: relative;
  }

  .dd-trigger {
    padding: .7rem 1.2rem;
    border: 1px solid #888888;
    border-radius: .4rem;
    cursor: pointer;
  }

  .dd {
    position: absolute;
    width: 100%;
    margin-top: .5rem;
    border: 1px solid #888888;
    border-radius: .4rem;
  }
</style>
