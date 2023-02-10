<script lang="ts">
	import { exploringMode, items } from 'src/stores';
	import { paintingsData } from 'src/lib/data';
	import Item from './Item.svelte';
	import type { IItemData } from 'src/lib/items';
	import {onMount} from "svelte";

	export let missingItemId: IItemData['id'];
	export let itemId: IItemData['id'];
	export let placedItem: () => void;

	const handleClick = (itemId: IItemData['id']) => {
		// if ($exploringMode === 'placeItems' && itemId !== missingItemId) {
		// 	alert("wrong item");
		// }
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
			placedItem();
			$items = $items.filter((item) => item !== id);
		}
	}

	function wrongItem	(event) {
		let button = event.target.parentElement;
		button.classList.add("animate-wrong-item");
		setTimeout(() => {
			button.classList.remove("animate-wrong-item");
		}, 1000);
	}


</script>

{#if $exploringMode === 'placeItems'}
	<div class="flex flex-row justify-between">
		{#key $items}
			{#each paintingsData as item}
				{#if $items.includes(item.itemId)}
					<button class="w-20 relative" id={item.itemId !== missingItemId ? item.itemId : ''} on:click={wrongItem}>
						<img src="/icons/fond_item.png" class="object-contain" />
						<Item
							itemId={item.itemId}
							inventory={true}
							onClick={handleClick}
							className="scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center {item.itemId !== missingItemId ? 'pointer-events-none' : ''}"
						/>
					</button>
				{:else}
					<button class="relative" >
						<img src="/icons/fond_item.png" class="opacity-50 w-20" />
						<img
							src="/icons/valid.png"
							class="absolute w-10 top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2"
						/>
					</button>
				{/if}
			{/each}
		{/key}
	</div>
{/if}

{#if $exploringMode === 'getItems'}
	<div class="flex flex-row justify-center">
		{#if $items.includes(itemId)}
			<div class="w-32 relative">
				<img src="/icons/fond_item.png" class="object-contain" />
				<Item
					{itemId}
					inventory={true}
					onClick={handleClick}
					className="scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
				/>
			</div>
		{:else}
			<div class="relative w-32 z-10">
				<img src="/icons/fond_item.png" class="opacity-50 max-w-full block z-[-1]" />
				<div
					class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[40%] origin-center w-1/2"
				>
					<p class="font-button">Trouvez l'intrus</p>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
    :global(.animate-wrong-item){
        animation-name: animate-wrong-item;
        animation-duration: .5s;
        animation-delay: 0.25s;
    }
    @keyframes animate-wrong-item{
        0% {
            transform: translateX(0px);
        }
        37% {
            transform: translateX(5px);
        }
        55% {
            transform: translateX(-5px);
        }
        73% {
            transform: translateX(4px);
        }
        82% {
            transform: translateX(-4px);
        }
        91% {
            transform: translateX(2px);
        }
        96% {
            transform: translateX(-2px);
        }
        100% {
            transform: translateX(0px);
        }
    }

</style>
