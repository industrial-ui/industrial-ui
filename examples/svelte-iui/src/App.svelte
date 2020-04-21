<script>
	import {Dropdown, IUI, Button} from 'industrial-ui';
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <IUI>
    <Dropdown id="my-drop" openOnHover>
      <div slot="trigger">
        Hello, pachan
      </div>
      <div>Nu privet pachan</div>
    </Dropdown>
    <Button>
      This is button from IUI
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
</style>
