<script lang="ts">
	import { each, loop_guard } from 'svelte/internal';
	import '../app.css';

	const assets = [
		'alfred-home',
		'alfred',
		'bg-home',
		'heritier-home',
		'heritier',
		'madame-home',
		'madame',
		'paintings-all'
	];
	const paintings = [
		'alfred-roll.jpg',
		'alfred-roll.jpeg',
		'les-heritiers.jpg',
		'les-heritiers.jpeg',
		'madame-samazeuilh.jpg',
		'madame-samazeuilh.jpeg'
	];
</script>

<svelte:head>
	{#each assets as asset}
		<link rel="prefetch" href={`/assets/${asset}.png`} />
	{/each}
	{#each paintings as painting}
		<link rel="prefetch" href={`/paintings/${painting}`} />
	{/each}
</svelte:head>

<slot />
