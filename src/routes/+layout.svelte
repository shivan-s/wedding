<script lang="ts">
	import type { LayoutProps } from './$types';
	import { m } from '$i18n/messages.js';
	import favicon from '$lib/assets/favicon.svg';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{m.wedding()}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
