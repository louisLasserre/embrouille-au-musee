<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode, items } from 'src/stores';
	import { paintingsData } from 'src/lib/data.ts';

	let nextPageType = 'video';

	if ($exploringMode === 'placeItems') {
		nextPageType = 'explore';
	}

	let src = paintingsData[$actualPaintingIndex].fileName + '.jpeg';
	let paintingName = paintingsData[$actualPaintingIndex].name;
</script>

<div class="w-screen h-screen bg-background py-10 flex flex-col ">
	{#if $actualPaintingIndex === 0}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">C'est parti !</h1>
	{:else}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">Au suivant !</h1>
		<p class="text-textDark uppercase font-medium text-center mt-3">Vous avez trouvé {$items.length} sur 3 objets !</p>
	{/if}
	
	<p class="text-textDark text-text font-text px-10 pt-10 pb-5">
		Digirez-vous devant le tableau
		<span class="font-button">{paintingName}</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="font-button">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="relative border-2 ">
		<img src="/paintings/{src}" class="p-10 absolute top-1/2 -translate-y-1/2  h-auto z-10 rounded-md " />
		<img src="/assets/fond-finding.png" class=" z-0" />
	</div>

	<Button
		className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
		url="/tableau/{$actualPaintingIndex + 1}/{nextPageType}">J'y suis</Button
	>
</div>
