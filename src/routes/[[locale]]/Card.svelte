<script lang="ts">
	import { m } from '$i18n/messages.js';
	import { getLocale } from '$i18n/runtime';
	import Hands from './Hands.svelte';
</script>

<section>
	<header>
		<p>{@html m.aum_sivamayam()}</p>
		<h2>{@html m.wedding_invitation()}</h2>
	</header>
	<p>
		{@html m.paragraph_1()}
	</p>
	<div>
		<p>
			{@html m.son()}
			<br />
			<span>{m.shivan()}</span>
		</p>
		<Hands />
		<p>
			{@html m.daughter()}
			<br />
			<span>{m.kasthoori()}</span>
		</p>
	</div>
	<p>
		{@html m.paragraph_2()}
	</p>
	{#if getLocale() === 'ta-lk'}
		<p>{m.tamil_venue()}</p>
		<p>{@html m.tamil_address()}</p>
		<p>{m.tamil_parents()}</p>
	{/if}
	<p>{m.invitation_only()}</p>
	{#if getLocale() === 'en-au'}
		<p>{m.rsvp_only()}</p>
		<p>{@html m.your_presence()}</p>
	{/if}
</section>

<style>
	section {
		display: grid;
		align-content: start;
		gap: var(--gap);
		justify-content: center;
		min-height: calc(100dvh - 2rem);
		margin: var(--margin);
		padding: var(--margin);
		border: 6px var(--color) double;
		scroll-snap-align: start;
		& > * {
			max-width: 60ch;
		}
		& > div {
			display: grid;
			grid-template-columns: 1fr auto 1fr;
			align-items: center;
			p > span {
				font-family: ImperialScript, BalooThambi2, cursive;
				font-size: 2rem;
				font-weight: 900;
				text-shadow: 0rem 0.1rem 0.1rem hsl(from var(--color) h s l / 60%);
			}
		}
	}
</style>
