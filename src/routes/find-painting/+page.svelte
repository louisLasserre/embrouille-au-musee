<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';

	console.log($actualPaintingIndex);

	let nextPageType = 'video';

	if ($exploringMode === 'placeItems') {
		nextPageType = 'explore';
	}
</script>

<p>audio</p>
<p>cliquez sur j'y suis quand vous aurrez trouver le tableau</p>

{$actualPaintingIndex}
<Button url="/tableau/{$actualPaintingIndex + 1}/{nextPageType}">J'y suis</Button>
