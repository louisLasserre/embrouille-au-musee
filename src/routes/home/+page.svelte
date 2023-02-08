<script>
	import Button from "src/components/Button.svelte";
</script>
<body class="bg-background w-screen h-screen z-10 relative">
	<h1 class="text-center text-title text-textDark py-10 uppercase">
		Bienvenue !
	</h1>
	<img src="/icons/fond_item.png" class="z-[-1] absolute opacity-50 top-0"/>
	<p class="px-10 text-textDark text-text font-text">
		Bonjour et bienvenue au <span class="font-bold">Musée des Beaux-Arts de Bordeaux</span> ! Commençons la visite sans plus tarder ! 
		Mais… Attendez où est passé le <span class="font-bold">testament</span> du tableau “<span class="font-bold">Les Héritiers</span>” ? 
		Et que sont devenus le <span class="font-bold">chapeau</span> de <span class="font-bold">Madame Samazeuil</span> et le <span class="font-bold">foulard d'Alfred Roll</span> !
		Si les tableaux ne sont pas dans le bon ordre, je ne peux pas poursuivre la visite ! 
		<br>S’il vous plaît, <span class="font-bold">retrouvez</span> les objets intrus et <span class="font-bold">restituez</span>-les au bon endroit !
	</p>
	<div class="flex justify-center pt-10">
		<img src="/assets/paintings-all.png" class="w-2/3 absolute bottom-28"/>
	</div>
	<div class="absolute bottom-20 translate-x-24">
		<Button url="/find-painting">Trouver les objets</Button>
	</div>
</body>