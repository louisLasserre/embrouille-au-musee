<script>
	import Button from 'src/components/Button.svelte';
</script>

<body class="bg-background w-screen h-screen z-10 relative">
	<h1 class="text-center text-title text-textDark pt-10 pb-5 uppercase">Bienvenue !</h1>
	<img src="/assets/fond_home.png" class="z-[-1] absolute top-0" />
	<p class="px-5 text-textDark text-text font-text leading-5 italic">
		" Bonjour et bienvenue au <span class="font-button">Musée des Beaux-Arts de Bordeaux</span> !
		Commençons la visite sans plus tarder ! Mais… Attendez Où est passé le
		<span class="font-button">testament</span>
		du tableau <span class="font-button">“Les Héritiers”</span> ? Et que sont devenus le
		<span class="font-button">chapeau</span>
		de Madame Samazeuil et le <span class="font-button">foulard</span> d'Alfred Roll ! Je ne peux
		pas commencer la visite dans ses conditions. S’il vous plaît retrouvez les
		<span class="font-button">objets intrus</span>
		et <span class="font-button">restituez-les</span> au bon endroit ! "
	</p>
	<div class="flex justify-center">
		<img src="/assets/paintings-all.png" />
	</div>
	<div class="fixed bottom-10 left-1/2 -translate-x-1/2 w-48">
		<Button disabled={false} url="/find-painting">Trouver les objets</Button>
	</div>
</body>
