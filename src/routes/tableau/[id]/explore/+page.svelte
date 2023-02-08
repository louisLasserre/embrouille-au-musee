<script lang="ts">
	import Item from 'src/components/Item.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';
	import Inventory from 'src/components/Inventory.svelte';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';

	import { actualPaintingIndex, exploringMode, items } from '../../../../stores';

	import type { PageData } from '../$types';
	import { itemsData, type IItemData } from 'src/lib/items';

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

<div class="h-screen w-screen bg-background">
	<Painting src={`/paintings/${fileName}.jpg`} alt="Autoportrait de Alfred Roll">
		{#if !$items.includes(itemId) && $exploringMode === 'getItems'}
			<Item {itemId} onClick={handleClick} />
		{/if}
	</Painting>
	<div class="px-10 py-5">
		<div class="flex flex-row justify-between">
			<div>
				<h2 class="font-titlePainting text-titlePainting uppercase">{name}</h2>
				<p class="font-ssTitle text-ssTitle pl-5">{description}</p>
			</div>
			<ButtonIndice onClick={() => (isActive = true)} />
		</div>
		<p class=" font-buttonTrans underline pb-5">Inventaire :</p>
		<Inventory {missingItemId} />
		<div class="flex justify-center pt-10">
			<Button {url} disabled={disabled()}>Oeuvre suivante</Button>
		</div>
	</div>
	<Modal bind:isActive {PageId} />
</div>
