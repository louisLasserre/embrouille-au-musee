<script lang="ts">
	import Item from 'src/components/Item.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';
	import Inventory from 'src/components/Inventory.svelte';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';

	import { actualPaintingIndex, exploringMode, items } from '../../../../stores';

	import type { PageData } from '../$types';
	import type { IItemData } from 'src/lib/items';
	import ExploreReactions from 'src/components/ExploreReactions.svelte';
	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';

	export let data: PageData;

	let PageId = Number(data.id);
	let isActive = false;

	const { name, description, itemId, fileName, missingItemId, reactionVideos } = data.tableau;

	let videosUrls = reactionVideos;
	if ($exploringMode === 'getItems') {
		videosUrls = reactionVideos.filter((video) => video.name === 'clueGetItems');
	}
	if ($exploringMode === 'placeItems') {
		videosUrls = reactionVideos.filter(
			(video) => video.name === 'cluePlaceItems' || video.name === 'placedItems'
		);
	}

	let url: string = '/find-painting';
	if (PageId === $actualPaintingIndex + 1) {
		$actualPaintingIndex = PageId;
	}

	if (PageId === data.total) {
		url = '/end';
	}

	let startChildVideo: (videoName: string) => void;
	$: disabled = () => {
		if ($exploringMode === 'placeItems') {
			return $items.includes(missingItemId);
		}

		return !$items.includes(itemId);
	};

	const handleClick = (itemId: IItemData['id']) => {
		if ($exploringMode === 'getItems' && !$items.includes(itemId)) {
			getItems(itemId);
		}
	};

	function getItems(id: IItemData['id']) {
		items.update((items) => {
			items.push(id);
			return items;
		});
	}
	let hasPlacedItem = false;
	const HasPlacedItem = () => {
		startChildVideo('placedItems');
		hasPlacedItem = true;
	};

	const reaction = (videoName?: string) => {
		if ($exploringMode === 'getItems') {
			startChildVideo('clueGetItems');
		} else {
			startChildVideo('cluePlaceItems');
		}
	};

</script>

<svelte:window bind:innerWidth/>


<body class="h-screen bg-background {widthContent}">
	<div class="relative w-full h-3/5 overflow-hidden">
		<Painting
			src={`/${hasPlacedItem ? 'reelpaintings' : 'paintings'}/${fileName}.jpg`}
			alt="Autoportrait de Alfred Roll"
		>
			{#if !$items.includes(itemId) && $exploringMode === 'getItems'}
				<Item {itemId} onClick={handleClick} />
			{/if}
		</Painting>
		<ExploreReactions {videosUrls} bind:startVideo={startChildVideo} imagefileName={fileName} />
	</div>

	<div class="px-10 py-5 flex flex-col justify-between h-[40%]">
		<div class="flex flex-row justify-between">
			<div>
				<h2 class="font-titlePainting text-titlePainting uppercase italic">{name}</h2>
				<p class="font-ssTitle text-ssTitle pl-5">{description}</p>
			</div>
			<ButtonIndice
				onClick={() => {
					isActive = true;
					reaction();
				}}
			/>
		</div>

		<Inventory {missingItemId} placedItem={HasPlacedItem} {itemId} />

		<Button {url} disabled={disabled()} className="flex justify-center py-5">Tableau suivant</Button
		>
	</div>
	<Modal bind:isActive {PageId} />
</body>
