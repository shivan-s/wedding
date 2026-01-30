<script lang="ts">
	import { formatDistanceToNowStrict } from 'date-fns';
	const weddingDate = new Date('2026-09-13T11:00:00+10:00');

	let d = $derived(formatDistanceToNowStrict(weddingDate, { addSuffix: true, unit: 'day' }));
</script>

<time datetime={weddingDate.toISOString()}>{d}</time>
