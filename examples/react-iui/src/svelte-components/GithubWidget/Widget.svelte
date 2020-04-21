{#if search}
  <input bind:value={username} placeholder="username or username/repo">
{/if}

<slot />

<div class="card">
{#await card}
	<Spinner size="50" speed="750" color="#38b0ee" thickness="2" gap="40" />
{:then card}
	{#if card}
	<svelte:component this={Card} {...card} />
	{/if}
{:catch error}
	<Error {...error} />
{/await}
</div>

<slot name="todo" />

<script>
	import debounce from 'debounce-promise';
	import Spinner from './Spinner.svelte';
	import User from './User.svelte';
	import Repo from './Repo.svelte';
	import Error from './Error.svelte';
	import {getRepoCard} from './api.js';
  import {getUserCard} from './api';

	const getUser = debounce(getUserCard, 1000);
	const getRepo = debounce(getRepoCard, 1000);

	export default {
		components: { Error, Spinner },
		data() {
			return {
				username: '',
				search: false
			};
		},
		computed: {
			card: ({ username, repo }) => username && (repo ? getRepo : getUser)(username),
			Card: ({ repo }) => repo ? Repo : User,
			repo: ({ username }) => username.includes('/')
		}
	};
</script>

<style>
	input {
		width: 300px;
		font-size: 20px;
		border: 1px solid black;
		border-radius: 3px;
		margin-bottom: 10px;
		padding: 10px;
	}

	.card {
        text-align: center;
        border-radius: 5px;
        background: #fff;
        color: #555;
        position: relative;
    }
</style>
