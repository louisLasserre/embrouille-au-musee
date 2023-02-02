<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';

	if ($exploringMode === 'getItems') {
		$exploringMode = 'placeItems';
		$actualPaintingIndex = 0;
	}
</script>

<h1 class="text-text">Bravo</h1>
<Button url="/tableau/1/explore">J'y suis</Button>
