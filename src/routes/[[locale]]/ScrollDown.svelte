<script lang="ts">
	import { m } from '$i18n/messages.js';
</script>

<p>&darr; {m.scroll_down()} &darr;</p>

<style>
	@keyframes scroll-down {
		0%,
		100% {
			transform: translateY(0);
		}

		66% {
			transform: scale(105%) translateY(0.5rem);
		}
	}

	p {
		animation: infinite 2s scroll-down ease-in-out;
	}

	@media (prefers-reduced-motion: reduce) {
		p {
			animation: none;
		}
	}
</style>
