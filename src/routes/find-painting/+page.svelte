<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from 'src/stores';
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
		<p class="text-textDark uppercase font-medium text-center mt-3">
			Vous avez trouvé {$items.length}/3 objets !
		</p>
	{/if}

	<p class="text-textDark text-text font-text p-10">
		Digirez-vous devant le tableau
		<span class="font-bold">{paintingName}</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="font-bold">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="flex justify-center relative h-80">
		<img src="/paintings/{src}" class="w-74 h-64 z-10 rounded-md translate-y-[15%]" />
		<img src="/icons/fond_item.png" class="opacity-50 absolute left-0 z-0" />
	</div>

	<Button
		className="absolute bottom-10 translate-x-36"
		url="/tableau/{$actualPaintingIndex + 1}/{nextPageType}">J'y suis</Button
	>
</div>
