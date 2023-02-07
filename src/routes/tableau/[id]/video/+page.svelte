<script lang="ts">
	import VideoPlayer from 'svelte-video-player';

	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';

	import type { PageData } from '../$types';

	export let data: PageData;

	const { name, description, fileName, transcription } = data.tableau;

	const poster = `/paintings/${fileName}.jpg`;
	const source = [`/videos/madame-samazeuilh.mp4`];
	const videoHeight = window.innerHeight;
	const videoWidth = window.innerWidth;

	let IsShowMore: boolean = false;
	const showMore = () => {
		IsShowMore = !IsShowMore;
	};
</script>

<div class="h-[100vh] relative flex flex-col justify-end">
	<div class="h-full w-full absolute overflow-hidden">
		<VideoPlayer
			{poster}
			{source}
			height={videoHeight}
			width={videoWidth}
			borderRadius="0"
			controlsOnPause={true}
			thumbSize="0"
			color="#FF8367"
		/>
	</div>
	<div class="h-full w-full absolute overflow-hidden pointer-events-none">
		<div class="gradient" />
	</div>

	<article class="z-10 relative p-8 pt-0">
		<h1 class="text-background text-titlePainting">{name}</h1>
		<p class="text-background font-texts font-light ml-4">{description}</p>

		<div class="flex min-w-0 items-start mb-6 {IsShowMore ? 'flex-col' : ''}">
			<p
				class="font-textTrans transition-all  overflow-y-auto text-background {!IsShowMore
					? 'whitespace-nowrap max-h-[2rem]'
					: 'max-h-[6rem]'} overflow-hidden text-ellipsis"
			>
				<span class="font-text">Transcription: </span>{transcription}
			</p>
			<button class="underline text-background whitespace-nowrap " on:click={() => showMore()}
				>Afficher {IsShowMore ? 'moins' : 'plus'}</button
			>
		</div>
		<div class="w-fit mx-auto">
			<Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre</Button>
		</div>
	</article>
</div>

<style>
	.gradient {
		height: 100%;
		width: 100%;
		background: rgb(17, 17, 17);
		background: linear-gradient(
			0deg,
			rgba(17, 17, 17, 1) 0%,
			rgba(32, 32, 32, 1) 10%,
			transparent 100%
		);
	}
</style>
