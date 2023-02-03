<script lang="ts">
	import type { PageData } from '../$types';
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode, items } from 'src/stores';
	import Painting from 'src/components/Painting.svelte';
	import Item from 'src/components/Item.svelte';

	export let data: PageData;

	let PageId = Number(data.id);

	const { name, description, itemId, fileName } = data.tableau;

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}
	console.log({ $actualPaintingIndex }, { PageId });

	if (PageId === data.total) {
		url = '/end';
	}

	function removeItems(itemId) {
		$items = $items.filter((item) => item !== itemId);
	}

	$: disabled = !$items.includes(itemId);

	const objectClick = () => {
		console.log('you clicked');
	};
</script>

<div class="h-[100vh]">
	<Painting src={`/paintings/${fileName}.jpeg`} alt="Autoportrait de Alfred Roll" {objectClick}>
		{#if !$items.includes(itemId)}
			<Item {itemId} />
		{/if}
	</Painting>

	<p>Inventaire</p>
	{#each $items as item}
		<button on:click={$exploringMode === 'placeItems' ? removeItems(item) : null}
			>objet {item}</button
		>
	{/each}
	<Button {url} {disabled}>Oeuvre suivante {PageId}</Button>
</div>

<style lang="postcss">
</style>
