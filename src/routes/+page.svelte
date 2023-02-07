<script>
	import Button from "src/components/Button.svelte";
</script>


<div class="w-screen h-screen bg-background py-10">
	<h1 class="font-title text-title text-textDark flex justify-center uppercase">
		Bienvenue
	</h1>
	<p class="text-textDark text-text font-text p-10">
		Bonjour et bienvenue au Musée des Beaux-Arts de Bordeaux ! Pour commencer l’expérience, dirigez-vous devant le tableau
		<span class="font-button text-button">“Les héritiers”</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="font-button text-button">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="flex justify-center relative">
		<img src="/paintings/les-heritiers.jpeg" class="z-10 rounded-md translate-y-1/3 w-2/3"/>
		<img src="/icons/fond_item.png" class="opacity-50 absolute  left-0 z-0"/>
	</div>
	<Button url={"/find-painting"} className="absolute bottom-10 translate-x-2/3">J'y suis !</Button>
</div>