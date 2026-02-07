<script lang="ts">
	import { getLocale } from '$i18n/runtime';
	import { formatDistanceToNowStrict } from 'date-fns';
	import { locales } from '$i18n/runtime';
	import { type Locale, ta, enAU } from 'date-fns/locale';

	const map = Object.freeze({
		'en-au': enAU,
		'ta-lk': ta
	}) satisfies Record<(typeof locales)[number], Locale>;

	const rsvpDate = new Date('2026-08-02T00:00:00+10:00');

	let d = $derived(
		formatDistanceToNowStrict(rsvpDate, {
			addSuffix: true,
			unit: 'day',
			locale: map[getLocale()]
		})
	);
</script>

<time datetime={rsvpDate.toISOString()}>
	{rsvpDate.toLocaleDateString(getLocale(), { dateStyle: 'full' })} ({d})
</time>
