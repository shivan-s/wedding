<script lang="ts">
	import Card from './Card.svelte';
	import ScrollDown from './ScrollDown.svelte';
	import { m } from '$i18n/messages.js';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/css/app.css';
	import Ganesh from './Ganesh.svelte';
	import Lang from './Lang.svelte';
</script>

<svelte:head>
	<title>{m.wedding()}</title>
	<link rel="icon" href={favicon} />
	<!-- TODO update the font -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&family=Courgette&family=Imperial+Script&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

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

	.imperial {
		font-family: 'Imperial Script', cursive;
		font-weight: 400;
		font-style: normal;
	}

	.ephesis {
		font-family: 'Ephesis', cursive;
		font-weight: 400;
		font-style: normal;
	}

	main {
		font-family: 'Courgette', cursive;
		font-weight: 400;
		font-style: normal;
	}
</style>
