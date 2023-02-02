<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex } from '../../stores';

	console.log($actualPaintingIndex);
</script>

<p>audio</p>
<p>cliquez sur j'y suis quand vous aurrez trouver le tableau</p>

{$actualPaintingIndex}
<Button url="/tableau/{$actualPaintingIndex + 1}/video">J'y suis</Button>
