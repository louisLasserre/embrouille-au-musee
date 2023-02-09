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

	console.log('find-painting');
</script>

<div class="w-screen h-screen bg-background py-10 flex flex-col ">
	{#if $actualPaintingIndex === 0}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">C'est parti !</h1>
	{:else}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">Au suivant !</h1>
		<p class="text-textDark uppercase font-medium text-center mt-3">
			Vous avez trouvé {$items.length} sur 3 objets !
		</p>
	{/if}

	<p class="text-textDark text-text font-text p-10">
		Digirez-vous devant le tableau
		<span class="font-bold">{paintingName}</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="font-bold">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="relative border-2 w-full h-full">
		<img src="/paintings/{src}" class=" p-20 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto z-10 rounded-md max-w-full max-h-full" />
		<img src="/assets/fond_finding.png" class=" z-0" />
	</div>

	<Button
		className="absolute bottom-10 translate-x-36"
		url="/tableau/{nextPageType}/{$actualPaintingIndex + 1}">J'y suis</Button
	>
</div>
