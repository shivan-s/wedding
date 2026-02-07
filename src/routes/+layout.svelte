<script lang="ts">
	import { PUBLIC_IS_PREVIEW } from '$env/static/public';
	import type { LayoutProps } from './$types';
	import { m } from '$i18n/messages.js';
	import favicon from '$lib/assets/favicon.svg';

	const isPreview = PUBLIC_IS_PREVIEW === '1';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	{#if isPreview}
		<title>{m.wedding()}</title>
	{:else}
		<title>Coming soon...</title>
	{/if}
	<link rel="icon" href={favicon} />
</svelte:head>

{#if isPreview}
	{@render children()}
{:else}
	Coming soon...
{/if}
