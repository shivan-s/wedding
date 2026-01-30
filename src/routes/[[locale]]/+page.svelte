<script lang="ts">
	import Card from './Card.svelte';
	import ScrollDown from './ScrollDown.svelte';
	import '$lib/assets/css/app.css';
	import TimeToWedding from './TimeToWedding.svelte';
	import Ganesh from './Ganesh.svelte';
	import Lang from './Lang.svelte';
	import { m } from '$i18n/messages';
</script>

<main>
	<header>
		<Ganesh />
		<h1 id="top">{m.shivan_weds_kas()}</h1>
		<TimeToWedding />
		<Lang />
		<ScrollDown />
	</header>
	<Card />
	<footer>Thank you</footer>
</main>

<style>
	main {
		text-align: center;
		& > header,
		& > footer {
			display: grid;
			gap: 1rem;
			min-height: 100dvh;
			place-content: center;
			scroll-snap-align: start;
		}
	}
</style>
