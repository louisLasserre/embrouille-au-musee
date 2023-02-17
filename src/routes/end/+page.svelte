<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';
	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';

	let endPageData;

	if ($exploringMode === 'getItems') {
		$exploringMode = 'placeItems';
		$actualPaintingIndex = 0;

		endPageData = {
			title: 'BRAVO !',
			description:
				"Vous avez trouvé tous les objets en trop. Il vous reste à <span class='font-button'>remettre les objets au bon propriétaire</span>, pour cela rendez-vous devant le tableau <span class='font-button'>''Les héritiers''</span>. Une fois que vous y êtes, appuyez sur le bouton <span class='font-button'>''J'y suis'</span> !",
			button: {
				url: '/tableau/1/explore',
				text: "J'y suis"
			}
		};
	} else {
		$exploringMode = 'getItems';
		$actualPaintingIndex = 0;
		endPageData = {
			title: 'FÉLICITATIONS !',
			description:
				'Vous avez réussi à <span class="font-button">remettre en ordre</span> tout les tableaux, ils ont l’air de <span class="font-button">meilleure humeur</span> maintenant. Je vais vous dire un <span class="font-button">secret</span> mais ça reste entre nous hein! C’est moi qui ai <span class="font-button">mélangé</span> tous leurs objets.”',
			button: {
				url: '/',
				text: "Quitter l'expérience"
			}
		};
	}

	const { title, description, button } = endPageData;
	const { url, text } = button;
</script>

<svelte:window bind:innerWidth/>


<body class="bg-background h-screen z-0 relative {widthContent}">
	<div class="flex justify-center flex-col text-center z-50">
		<h1 class="font-title text-title py-5">{title}</h1>
		<p class="font-text text-left px-5 italic">{@html description}</p>
		{#if $exploringMode === 'placeItems'}
			<div class="relative mt-5">
				<img
					src="/paintings/les-heritiers.jpeg"
					class="w-auto left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2  h-2/3 z-10 rounded-md "
				/>
				<img src="/assets/fond-finding.png" class="z-0" />
			</div>
		{:else}
			<div class="relative mt-5">
				<div class="px-5 absolute top-1/2 -translate-y-1/2">
					<p class="font-text">
						L’équipe derrière <span class="font-button">EMBROUILLE AU MUSÉE</span> vous remercie d’avoir
						participé et espère que vous avez passer un bon moment !
					</p>
				</div>
				<img src="/assets/fond-finding.png" class="z-0" />
			</div>
		{/if}

		<Button
			{url}
			id="btn"
			className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
		>
			{text}
		</Button>
	</div>
</body>
