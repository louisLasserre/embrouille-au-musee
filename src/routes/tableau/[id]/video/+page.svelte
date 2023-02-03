<script lang="ts">
	import type { PageData } from '../$types';
	import Button from 'src/components/Button.svelte';

	export let data: PageData;

	const { name, description } = data.tableau;
</script>

<h1 class="text-red-600">{name}</h1>
<p class="text-background font-texts font-normal">{description}</p>

<p>page vidéo du tableau {data.id}</p>
<Button url="/tableau/{data.id}/explore">Explorer l'oeuvre</Button>

<style lang="postcss">
</style>
