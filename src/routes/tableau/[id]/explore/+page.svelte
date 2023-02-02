<script lang="ts">
	import type { PageData } from '../$types';
	import Button from '../../../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../../../stores';

	export let data: PageData;

	$: PageId = Number(data.id);

	const { name, description } = data.tableau;

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}
	console.log({ $actualPaintingIndex }, { PageId });

	if ($exploringMode === 'placeItems') {
		url = `/tableau/${$actualPaintingIndex + 1}/explore`;
	}
	if (PageId === data.total) {
		url = '/transition';
	}
</script>

<h1 class="text-red-600">{name}</h1>
<p class="text-background font-texts font-normal">{description}</p>
<Button {url}>Oeuvre suivante {PageId}</Button>

<style lang="postcss">
</style>
