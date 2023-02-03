<script lang="ts">
	import type { PageData } from '../$types';
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode, items } from 'src/stores';
	import Painting from 'src/components/Painting.svelte';
	import Item from 'src/components/Item.svelte';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';

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
	function getItems(itemId) {
		if ($items.includes(itemId)) {
			$items = $items.filter((item) => item !== itemId);
		} else {
			$items = [...$items, itemId];
		}
	}
	function placeItems(item) {
		if (item === itemId) {
			$items = $items.filter((item) => item !== itemId);
		}
	}

	$: disabled = () => {
		if ($exploringMode === 'placeItems') {
			return $items.includes(itemId);
		} else if ($exploringMode === 'getItems') {
			return !$items.includes(itemId);
		}
	};

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

	{#if !$items.includes(itemId) && $exploringMode === 'getItems'}
		<button on:click={() => getItems(itemId)}>item n° {itemId}</button>
	{/if}
	{#if $exploringMode === 'placeItems' && !$items.includes(itemId)}
		<p>item n° {itemId}</p>
	{/if}

	<p>Inventaire</p>
	{#each $items as item}
		<button on:click={$exploringMode === 'placeItems' ? removeItems(item) : null}
			>objet {item}</button
		>
	{/each}
	<ButtonIndice />
	<Button {url} disabled={disabled()}>Oeuvre suivante</Button>
</div>

<style lang="postcss">
</style>
