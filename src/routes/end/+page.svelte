<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';

	let endPageData;

	if ($exploringMode === 'getItems') {
		$exploringMode = 'placeItems';
		$actualPaintingIndex = 0;

		endPageData = {
			title: 'BRAVO !',
			description: "Vous avez trouvé tous les objets en trop. Il vous reste à <span class='font-button'>remettre les objets au bon propriétaire</span>, pour cela rendez-vous devant le tableau <span class='font-button'>''Les héritiers''</span>. Une fois que vous y êtes, appuyez sur le bouton <span class='font-button'>''J'y suis'</span> !",
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
			description: 'Guide : "Vous avez réussi à remettre en ordre tout les tableaux, ils ont l’air de meilleure humeur maintenant. Je vais vous dire un secret mais ça reste entre nous hein! C’est moi qui ai mélangé tous leurs objets. Il faut bien ajouter un peu d’animation dans ce musée !”',
			button: {
				url: '/',
				text: "Quitter l'expèrience"
			}
		};
	}

	const { title, description, button } = endPageData;
	const { url, text } = button;
</script>
<body class="bg-background h-screen z-0 relative no-scrollbar">
	<div class="flex justify-center flex-col text-center z-50">
		<h1 class="font-title text-title py-5">{title}</h1>
		<p class="font-text text-left px-5">{@html description}</p>
		<div class="relative mt-5">
			<img src="/paintings/les-heritiers.jpeg" class="w-auto left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2  h-2/3 z-10 rounded-md " />
			<img src="/assets/fond-finding.png" class=" z-0" />
		</div>
		
		<Button {url} id="btn" className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20">
			{text}
		</Button>
	</div>

</body>

