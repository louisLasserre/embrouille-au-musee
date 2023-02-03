<script lang="ts">
	import { itemsData, type IItemData } from 'src/lib/items';
	import { items } from 'src/stores';

	export let itemId: IItemData['id'];

	const item = itemsData.find((item) => item.id == itemId) as IItemData;

	const { id, name, fileName } = item;

	function getItems(itemid: IItemData['id']) {
		if ($items.includes(itemid)) {
			$items = $items.filter((item) => item !== itemid);
		} else {
			$items = [...$items, itemid];
		}
	}

	function removeItems(itemid: IItemData['id']) {
		$items = $items.filter((item) => item !== itemid);
	}
</script>

<img
	class={`absolute ${fileName}`}
	on:click={() => getItems(itemId)}
	src={`/items/${fileName}.png`}
	alt={name}
/>
