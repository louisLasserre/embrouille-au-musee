<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import { actualPaintingIndex, exploringMode, items } from 'src/stores';
	import { paintingsData } from 'src/lib/data';

	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';

	let nextPageType = 'video';

	if ($exploringMode === 'placeItems') {
		nextPageType = 'explore';
	}

	let srcPainting = '/paintings/' + paintingsData[$actualPaintingIndex].fileName + '.jpeg';
	let paintingName = paintingsData[$actualPaintingIndex].name;
	let paintingDescription = paintingsData[$actualPaintingIndex].description;

	let srcs = [srcPainting, '/assets/fond-item2.png'];
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	{#each srcs as src}
		<link rel="preload" href={src} as="image" />
	{/each}
</svelte:head>

<body class=" bg-background py-10 flex flex-col gap-6 justify-start h-screen {widthContent}">
	{#if $actualPaintingIndex === 0}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">C'est parti !</h1>
	{:else}
		<h1 class="font-title text-title text-textDark flex justify-center uppercase">Au suivant !</h1>
	{/if}

	{#if $exploringMode === 'getItems' && $items.length > 0}
		<p class="text-textDark uppercase font-medium text-center">
			Vous avez trouvé {$items.length} sur 3 objets !
		</p>
	{/if}

	<p class="text-textDark text-text font-text px-10">
		Digirez-vous devant le tableau
		<span class="font-button">
			<span class="italic">{paintingName}</span> de {paintingDescription}
		</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="font-button">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="relative find-painting w-full h-24 grid place-items-center">
		<div class="w-2/3">
			<img
				src={srcPainting}
				alt={paintingDescription}
				class="w-full object-contain z-10 rounded-md max-h-[50vh]"
			/>
		</div>
	</div>

	<Button
		disabled={false}
		className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
		url="/tableau/{$actualPaintingIndex + 1}/{nextPageType}">J'y suis</Button
	>
</body>

<style>
	.find-painting {
		background-image: url('/assets/fond-item2.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 100%;
	}
</style>
