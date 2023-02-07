<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';

	let endPageData;

	if ($exploringMode === 'getItems') {
		$exploringMode = 'placeItems';
		$actualPaintingIndex = 0;

		endPageData = {
			title: 'BRAVO',
			description: "Vous avez trouvé tous les objets en trop. Il vous reste à <span class='font-button text-button'>remettre les objets au bon propriétaire</span>, pour cela rendez-vous devant le tableau <span class='font-button text-button'>''Les héritiers'''</span>. Une fois que vous y êtes, appuyez sur le bouton <span class='font-button text-button'>''J'y suis''</span> !",
			button: {
				url: '/tableau/1/explore',
				text: "J'y suis"
			}
		};
	} else {
		$exploringMode = 'getItems';
		$actualPaintingIndex = 0;
		endPageData = {
			title: 'Merci',
			description: 'Vous avez réussi à remettre en ordre tout les tableaux, ils ont l’air de meilleure humeur maintenant. </br> </br>  Je vais vous dire un secret mais ça reste entre nous hein! C’est moi qui ai mélangé tous leurs objets. Il faut bien ajouter un peu d’animation dans ce musée !',
			button: {
				url: '/',
				text: "Quitter l'expèrience"
			}
		};
	}

	const { title, description, button } = endPageData;
	const { url, text } = button;
</script>
<body class="bg-background h-screen z-0 relative">
	<div class="flex justify-center flex-col text-center pl-8 pr-8 gap-8 z-50">
		<img src="/icons/fond_item.png" class="absolute z-[-1] opacity-50 left-0 top-64 w-fit">
		<h1 class="font-title text-title m-0 p-0">{title}</h1>
		<p class="text-text text-left ">{@html description}</p>
		<img src="/paintings/les-heritiers.jpeg" class="w-fit top-64 pl-8 pr-8">
		
		<Button {url} id="btn">{text}</Button>
	</div>

</body>
