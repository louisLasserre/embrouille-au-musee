<script>
	import Button from 'src/components/Button.svelte';
</script>

<div class="background">
	<img src="/assets/madame-home.png" class="absolute top-4 right-2 w-80" />
	<h1 class="font-title text-title text-background pl-10 pt-52 flex justify-center uppercase">
		Embrouille au musée
	</h1>
	<img src="/assets/heritier-home.png" class="w-80 absolute bottom-48" />
	<img src="/assets/alfred-home.png" class="w-80 absolute right-0 bottom-28" />

	<a
		href="/home"
		class=" absolute bottom-20 translate-x-24 flex justify-center text-text font-button px-6 py-3 rounded-md bg-background"
	>
		Commencer la visite
	</a>
</div>

<style>
	.background {
		background-image: url('/assets/bg-home.png');
		background-size: cover;
		width: 100vw;
		height: 100vh;
	}
</style>
