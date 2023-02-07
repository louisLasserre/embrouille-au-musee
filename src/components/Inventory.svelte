<script lang="ts">
	import { exploringMode, items } from 'src/stores';

	import Item from './Item.svelte';
	import type { IItemData } from 'src/lib/items';

	export let missingItemId: IItemData['id'];

	const handleClick = (itemId: IItemData['id']) => {
		if ($exploringMode === 'placeItems' && !$items.includes(itemId)) {
			return;
		}
		if ($exploringMode === 'getItems' && !$items.includes(itemId)) {
			getItems(itemId);
		}
		if ($exploringMode === 'placeItems') {
			placeItems(itemId);
		}
	};

	function getItems(id: IItemData['id']) {
		$items = [...$items, id];
	}

	function placeItems(id: IItemData['id']) {
		if (missingItemId === id) {
			$items = $items.filter((item) => item !== id);
		}
	}
</script>

{#key $items}
	{#each $items as item}
		{item}
		<Item itemId={item} inventory={true} onClick={handleClick} />
	{/each}
{/key}
