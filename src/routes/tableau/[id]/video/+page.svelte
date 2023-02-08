<script lang="ts">
	import VideoPlayer from 'svelte-video-player';

	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';

	import type { PageData } from '../$types';
	import ButtonIndice from 'src/components/ButtonIndice.svelte';
	import Modal from 'src/components/Modal.svelte';

	export let data: PageData;

	const { name, description, fileName, transcription } = data.tableau;

	const poster = `/paintings/${fileName}.jpg`;
	const source = [`/videos/madame-samazeuilh.mp4`];
	const videoHeight = window.innerHeight;
	const videoWidth = window.innerWidth;
	let isActive: boolean = false;
	const modalText =
		"Cliquez sur le bouton 'explorer l’œuvre' pour observer les peintures. Le but est que vous retrouviez les différences entre les peintures originelles et le tableau affiché sur votre téléphone. ";

	let IsShowMore: boolean = false;
	const showMore = () => {
		IsShowMore = !IsShowMore;
	};
</script>

<div class="h-[100vh] relative flex flex-col justify-end bg-black">
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

	<article class="z-10  p-8 pt-0">
		<h1 class="text-background text-titlePainting">{name}</h1>
		<p class="text-background font-texts font-light ml-4">{description}</p>

		<div class="flex min-w-0 items-start mb-6 {IsShowMore ? 'flex-col' : ''}">
			<p
				class="font-textTrans transition-all max-h-[2rem] overflow-y-auto text-background {!IsShowMore
					? 'whitespace-nowrap '
					: 'max-h-[6rem]'} overflow-hidden text-ellipsis"
			>
				<span class="font-text">Transcription: </span>{transcription}
			</p>
			<button class="underline text-background whitespace-nowrap " on:click={() => showMore()}
				>Afficher {IsShowMore ? 'moins' : 'plus'}</button
			>
		</div>
		<div class="w-fit mx-auto flex gap-6 items-center">
			<button
				class="bg-button font-title text-background px-[0.9rem] aspect-square rounded-md text-[22px]"
				on:click={() => (isActive = true)}>?</button
			>

			<Modal bind:isActive text={modalText} />
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
