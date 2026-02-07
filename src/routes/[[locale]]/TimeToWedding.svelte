<script lang="ts">
	import { getLocale } from '$i18n/runtime';
	import { onDestroy } from 'svelte';
	import { sineInOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	const weddingDate = new Date('2026-09-13T11:00:00+10:00');
	let diff = new Tween(0, { easing: sineInOut });
	const interval = setInterval(() => {
		diff.target = weddingDate.getTime() - Date.now();
	}, 500);

	const MS = 1;
	const S = MS * 1000;
	const MIN = S * 60;
	const H = MIN * 60;
	const D = 24 * H;

	let days = $derived(diff.current / D);
	let hours = $derived((days - Math.floor(days)) * 24);
	let minutes = $derived((hours - Math.floor(hours)) * 60);
	let seconds = $derived((minutes - Math.floor(minutes)) * 60);

	onDestroy(() => clearInterval(interval));
</script>

<time
	datetime={weddingDate.toISOString()}
	title={weddingDate.toLocaleString(getLocale(), { dateStyle: 'full', timeStyle: 'short' })}
>
	{Math.floor(days).toString().padStart(3, '0')}d
	{Math.floor(hours).toString().padStart(2, '0')}h
	{Math.floor(minutes).toString().padStart(2, '0')}m
	{Math.floor(seconds).toString().padStart(2, '0')}s
</time>

<style>
	time {
		font-family: monospace;
	}
</style>
