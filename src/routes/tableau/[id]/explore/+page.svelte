<script lang="ts">
	import type { PageData } from '../$types';
	import Button from '../../../../components/Button.svelte';
<<<<<<< Updated upstream
	import { actualPaintingIndex } from '../../../../stores';
=======
	import { actualPaintingIndex, exploringMode, items } from '../../../../stores';
>>>>>>> Stashed changes

	export let data: PageData;

	let PageId = Number(data.id);

	const { name, description, itemId } = data.tableau;

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}
	console.log({ $actualPaintingIndex }, { PageId });

	if (PageId === data.total) {
		url = '/end';
	}

	function getItems(itemId){
		if($items.includes(itemId)){
			$items = $items.filter(item => item !== itemId)
		}else{
			$items = [...$items, itemId]
		}
	}

	function removeItems(itemId){
		$items = $items.filter(item => item !== itemId)
	}

	$: disabled = !$items.includes(itemId);
</script>

<div>
	<h1 class="text-red-600">{name}</h1>
	<p class="text-background font-texts font-normal">{description}</p>
	{#if !$items.includes(itemId)}
		<button on:click={() => getItems(itemId)}>item n° {itemId}</button>
	{/if}
	<p>Inventaire</p>
	{#each $items as item}
		<button on:click={$exploringMode === 'placeItems' ? removeItems(item) : null}>objet {item}</button>
	{/each}
	<Button {url} {disabled}>Oeuvre suivante {PageId}</Button>
</div>

<style lang="postcss">
</style>
