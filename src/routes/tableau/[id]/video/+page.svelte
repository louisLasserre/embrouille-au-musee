<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import VideoPlayer from 'src/components/VideoPlayer.svelte';

	import type { PageData } from '../$types';

	import Modal from 'src/components/Modal.svelte';

	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';

	export let data: PageData;

	const { name, description, fileName, transcription } = data.tableau;

	const poster = `/paintings/${fileName}.jpg`;
	const source = [`/videos/${fileName}.mp4`];

	let isActive: boolean = false;
	const modalText =
		"Cliquez sur le bouton <span class='font-button'>explorer l’œuvre</span> pour observer les peintures. Le but est de retrouver les <span class='font-button'>différences</span> entre les peintures originales et le tableau affiché sur votre téléphone. ";
	const modalTitle = 'Comment jouer ?';
	let IsShowMore: boolean = false;
	const showMore = () => {
		IsShowMore = !IsShowMore;
	};

	const showModalHelp = () => {
		isActive = true;
		return isActive;
	};
</script>

<svelte:window bind:innerWidth />

<body class="h-[100vh] relative flex flex-col justify-end bg-black {widthContent}">
	<VideoPlayer src={source} {poster} />

	<article class="z-10  p-8 pt-0">
		<h1 class="text-background font-titlePainting uppercase italic text-titlePainting">{name}</h1>
		<p class="text-background font-texts font-light ml-4">{description}</p>

		<div class="flex flex-col min-w-0 items-start my-6 {IsShowMore ? 'backdrop-blur-sm' : ''}">
			{#if IsShowMore}
				<p
					class="font-textTrans transition-all text-background {!IsShowMore
						? 'whitespace-nowrap '
						: 'max-h-full'}"
				>
					Transcription : " {transcription} "
				</p>
			{/if}
			<button class="underline text-background whitespace-nowrap mt-5" on:click={() => showMore()}>
				{IsShowMore ? 'Fermer' : 'Transcription'}
			</button>
		</div>
		<div class="w-fit mx-auto flex gap-2 items-center">
			<Button isButtonHelp={true} onClick={() => showModalHelp()}>Comment jouer ?</Button>
			<Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre !</Button>
			<Modal bind:isActive text={modalText} title={modalTitle} />
		</div>
	</article>
</body>
