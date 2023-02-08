<script lang="ts">
	import { exploringMode, items } from 'src/stores';
	import { paintingsData } from "src/lib/data";
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

<div class="flex flex-row justify-between">
	{#key $items}
		{#each paintingsData as item}
			{#if $items.includes(item.itemId)}
				<div class="w-20 relative">
					<img src="/icons/fond_item.png" class="object-contain"/>
						<Item
							itemId={item.itemId}
							inventory={true}
							onClick={handleClick}
							className="scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
						/>
				</div>
				{:else}
				<img src="/icons/fond_item.png" class="opacity-50 w-20"/>
			{/if}
		{/each}
	{/key}
</div>
