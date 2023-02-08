<script lang="ts">
	import { exploringMode, items } from 'src/stores';
	import { paintingsData } from "src/lib/data";
	import Item from './Item.svelte';
	import type { IItemData } from 'src/lib/items';

	export let missingItemId: IItemData['id'];
	export let itemId: IItemData['id'];

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

{#if $exploringMode === 'placeItems'}
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
					<div class="relative">
						<img src="/icons/fond_item.png" class="opacity-50 w-20"/>
						<img src="/icons/valid.png" class="absolute w-10 top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2"/>
					</div>
				{/if}
			{/each}
		{/key}
	</div>
{/if}

{#if $exploringMode === 'getItems'}
	<div class="flex flex-row justify-center">
		{#if $items.includes(itemId)}
			<div class="w-32 relative">
				<img src="/icons/fond_item.png" class="object-contain"/>
				<Item
						itemId={itemId}
						inventory={true}
						onClick={handleClick}
						className="scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
				/>
			</div>
		{:else}
			<div class="relative w-32 z-10">
				<img src="/icons/fond_item.png" class="opacity-50 max-w-full block z-[-1]"/>
				<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[40%] origin-center w-1/2">
					<p class="font-button">Trouvez l'intrus</p>
				</div>
			</div>
		{/if}
			</div>
{/if}