<script lang="ts">
	import type { PageData } from '../$types';
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode, items } from 'src/stores';
	import Painting from 'src/components/Painting.svelte';
	import Item from 'src/components/Item.svelte';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';
	import Inventory from 'src/components/Inventory.svelte';
	import type { IItemData } from 'src/lib/items';

	export let data: PageData;

	let PageId = Number(data.id);

	const { name, description, itemId, fileName, missingItemId } = data.tableau;

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}

	if (PageId === data.total) {
		url = '/end';
	}

	$: disabled = () => {
		if ($exploringMode === 'placeItems') {
			return $items.includes(missingItemId);
		}
		return !$items.includes(itemId);
	};

	const handleClick = (itemId: IItemData['id']) => {
		if ($exploringMode === 'getItems' && !$items.includes(itemId)) {
			getItems(itemId);
		}
	};
	function getItems(id: IItemData['id']) {
		$items = [...$items, id];
	}
</script>

<div class="h-[100vh]">
	<Painting src={`/paintings/${fileName}.jpeg`} alt="Autoportrait de Alfred Roll">
		{#if !$items.includes(itemId) && $exploringMode === 'getItems'}
			<Item {itemId} {missingItemId} onClick={handleClick} />
		{/if}
	</Painting>

	<p>Inventaires</p>
	<Inventory {missingItemId} />

	<ButtonIndice />
	<Button {url} disabled={disabled()}>Oeuvre suivante</Button>
</div>
