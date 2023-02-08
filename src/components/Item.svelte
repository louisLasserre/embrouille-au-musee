<script lang="ts">
	import { itemsData, type IItemData } from 'src/lib/items';

	export let itemId: IItemData['id'];

	export let inventory: boolean = false;
	export let className: string = '';

	export let onClick: (itemId: IItemData['id']) => void;

	const item = itemsData.find((item) => item.id == itemId) as IItemData;

	const { id, name, fileName } = item;
</script>

{#if inventory}

<div class={`inventory absolute ${className}`}>
	<img
		class={` item`}
		on:click={() => onClick(itemId)}
		src={`/items/${fileName}.png`}
		alt={name}
	/>
</div>
	{:else}
	<div class="">
		<img
				class={` absolute ${fileName} item`}
				on:click={() => onClick(itemId)}
				src={`/items/${fileName}.png`}
				alt={name}
		/>
	</div>
{/if}