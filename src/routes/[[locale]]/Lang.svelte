<script>
	import { page } from '$app/state';
	import { m } from '$i18n/messages';
	import { locales, localizeHref } from '$i18n/runtime';
</script>

<section>
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
			{m.lang({}, { locale })}
		</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		place-content: center;
		gap: var(--gap);
		& > a {
			color: var(--color);
		}
	}
</style>
