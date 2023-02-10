<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import VideoPlayer from 'src/components/VideoPlayer.svelte';

	import type { PageData } from '../$types';

	import Modal from 'src/components/Modal.svelte';
	import { onMount } from 'svelte';

	export let data: PageData;

	const { name, description, fileName, transcription } = data.tableau;

	const poster = `/paintings/${fileName}.jpg`;
	const source = [`/videos/${fileName}.mp4`];

	let isActive: boolean = false;
	const modalText =
		"Cliquez sur le bouton <span class='font-button'>explorer l’œuvre</span> pour observer les peintures. Le but est que vous retrouviez les <span class='font-button'>différences</span> entre les peintures originelles et le tableau affiché sur votre téléphone. ";
	const modalTitle = 'Comment jouer ?';
	let IsShowMore: boolean = false;
	const showMore = () => {
		IsShowMore = !IsShowMore;
	};
</script>

<div class="h-[100vh] relative flex flex-col justify-end bg-black">
	<VideoPlayer src={source} {poster} />

	<article class="z-10  p-8 pt-0">
		<h1 class="text-background text-titlePainting">{name}</h1>
		<p class="text-background font-texts font-light ml-4">{description}</p>

		<div class="flex flex-col min-w-0 items-start my-6 {IsShowMore ? 'backdrop-blur-sm' : ''}">
			{#if IsShowMore}
				<p
					class="font-textTrans transition-all max-h-[2rem] text-background {!IsShowMore
						? 'whitespace-nowrap '
						: 'max-h-[17rem]'}"
				>
					Transcription : "{transcription}"
				</p>
			{/if}
			<button
				class="underline text-background whitespace-nowrap underline mt-5"
				on:click={() => showMore()}
			>
				{IsShowMore ? 'Retour à la vidéo' : 'Je ne peux pas écouter la vidéo'}
			</button>
		</div>
		<div class="w-fit mx-auto flex gap-6 items-center">
			<button
				class="bg-button font-title text-background px-[0.9rem] aspect-square rounded-md text-[22px]"
				on:click={() => (isActive = true)}>?</button
			>

			<Modal bind:isActive text={modalText} title={modalTitle} />
			<Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre</Button>
		</div>
	</article>
</div>
