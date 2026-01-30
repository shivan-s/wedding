<script lang="ts">
	import { getLocale } from '$i18n/runtime';
	import { formatDistanceToNowStrict } from 'date-fns';
	const weddingDate = new Date('2026-09-13T11:00:00+10:00');

	let d = $derived(formatDistanceToNowStrict(weddingDate, { addSuffix: true, unit: 'day' }));
</script>

<time datetime={weddingDate.toISOString()}>
	{weddingDate.toLocaleDateString(getLocale(), { dateStyle: 'full' })} ({d})
</time>
