<script lang="ts">
	import { itemsData, type IItemData } from 'src/lib/items';
	import {onMount} from "svelte";

	export let itemId: IItemData['id'];

	export let inventory: boolean = false;
	export let className: string = '';

	export let onClick: (itemId: IItemData['id']) => void;

	const item = itemsData.find((item) => item.id == itemId) as IItemData;

	const { id, name, fileName } = item;


	onMount(() => {
		if(inventory) return;
		function addBrightnessAfterDelay(){
			let item = document.getElementById("help");
			item.classList.add('brightness');
		}
		setTimeout(addBrightnessAfterDelay, 30000);
	})


</script>

{#if inventory}
	<div class={`inventory absolute ${className}`}>
		<img
			class={`item`}
			on:click={() => onClick(itemId)}
			src={`/items/${fileName}.png`}
			alt={name}
		/>
	</div>
{:else}
		<img
				id="help"
				class={` absolute ${fileName} item `}
				on:click={() => onClick(itemId)}
				src={`/items/${fileName}.png`}
				alt={name}
		/>
{/if}

<style>
	:global(.brightness){
		filter: drop-shadow(-2px -2px 4px #BEBEBE);
	}
</style>