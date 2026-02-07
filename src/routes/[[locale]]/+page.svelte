<script lang="ts">
	import Card from './Card.svelte';
	import ScrollDown from './ScrollDown.svelte';
	import '$lib/assets/css/app.css';
	import Ganesh from './Ganesh.svelte';
	import Lang from './Lang.svelte';
</script>

<main>
	<header>
		<Ganesh />
		<h1 id="top">X weds Y</h1>
		<Lang />
		<ScrollDown />
	</header>
	<Card />
	<footer>Thank you</footer>
</main>

<style>
	main {
		& > header,
		& > footer {
			display: grid;
			gap: 1rem;
			min-height: 100dvh;
			place-content: center;
			text-align: center;
			scroll-snap-align: start;
		}
	}
</style>
