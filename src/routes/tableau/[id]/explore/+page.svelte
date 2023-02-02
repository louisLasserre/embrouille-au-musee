<script lang="ts">
	import type { PageData } from '../$types';
	import Button from '../../../../components/Button.svelte';
	import { actualPaintingIndex } from '../../../../stores';

	export let data: PageData;

	let PageId = Number(data.id);

	const { name, description } = data.tableau;

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}
	console.log({ $actualPaintingIndex }, { PageId });

	if (PageId === data.total) {
		url = '/end';
	}
</script>

<h1 class="text-red-600">{name}</h1>
<p class="text-background font-texts font-normal">{description}</p>
<Button {url}>Oeuvre suivante {PageId}</Button>

<style lang="postcss">
</style>
