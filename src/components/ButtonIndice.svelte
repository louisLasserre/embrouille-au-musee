<script lang="ts">
	export let onClick: () => void;

	let src	= "/icons/clue.png";
</script>

<svelte:head>
	<link rel="preload" href={src} as="image">
</svelte:head>

<button on:click={onClick()} class="font-button text-button items-center">
	Indice
	<img {src} alt="indice" class="w-12">
</button>
