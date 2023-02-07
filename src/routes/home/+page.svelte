<script>
	import Button from "src/components/Button.svelte";
</script>
<body class="bg-background w-screen h-screen z-10 relative">
	<h1 class="text-center text-title text-textDark py-10 uppercase">
		Bienvenue !
	</h1>
	<img src="/icons/fond_item.png" class="z-[-1] absolute opacity-50 top-0"/>
	<p class="px-10 text-textDark text-text font-text">
		Bonjour et bienvenue au <span class="text-background font-button">Musée des Beaux-Arts de Bordeaux</span> !
		Commençons la visite sans plus tarder ! Mais… Attendez Où est passé le testament du tableau “Les Héritiers” ?
		Et que sont devenus le chapeau de Madame Samazeuil et le foulard d'Alfred Roll !
		Si les tableaux ne sont pas dans le bon ordre, je ne peux pas poursuivre la visite !
		S’il vous plaît retrouver les objets intrus et restituez-les au bon endroit !
	</p>
	<div class="flex justify-center pt-10">
		<img src="/assets/paintings-all.png" class="w-2/3"/>
	</div>
	<div class="flex justify-center fixed bottom-20 translate-x-2/3">
		<Button url="/find-painting">Trouver les objets</Button>
	</div>
</body>