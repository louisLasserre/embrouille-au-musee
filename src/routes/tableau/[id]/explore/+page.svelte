<script lang="ts">
	import Item from 'src/components/Item.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';
	import Inventory from 'src/components/Inventory.svelte';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';

	import { actualPaintingIndex, exploringMode, items } from '../../../../stores';

	import type { PageData } from '../$types';
	import type { IItemData } from 'src/lib/items';

	export let data: PageData;

	let PageId = Number(data.id);
	let isActive = false;

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
			<Item {itemId} onClick={handleClick} />
		{/if}
	</Painting>

	<p>Inventaires</p>
	<Inventory {missingItemId} />

	<ButtonIndice onClick={() => (isActive = true)} />
	<Button {url} disabled={disabled()}>Oeuvre suivante</Button>
	<Modal bind:isActive {PageId} />
</div>
