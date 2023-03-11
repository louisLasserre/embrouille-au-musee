<script>
	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0'

	let srcs	= [
		'/assets/madame-home.png',
		'/assets/heritier-home.png',
		'/assets/alfred-home.png',
		'/assets/bg-home.png'
	]
</script>

<svelte:window bind:innerWidth/>

<svelte:head>
	{#each	srcs as src}
		<link rel="preload" href={src} as="image" />
	{/each}
</svelte:head>

<body class="background p-5 relative overflow-auto {widthContent}">
	<div class="flex justify-end">
		<img src="/assets/madame-home.png" class=" w-[80%]"/>
	</div>
	<h1 class="font-title text-title text-background pl-10 w-2/3 flex justify-center uppercase">
		Embrouille au musee
	</h1>
	<img src="/assets/heritier-home.png" class="w-[80%]"/>
	<div class="flex justify-end">
		<img src="/assets/alfred-home.png" class="w-[80%]"/>
	</div>
	<div class="fixed bottom-10 left-1/2 -translate-x-1/2 w-60">
		<a href="/home" class=" flex justify-center text-text font-button px-6 py-3 rounded-md bg-background ">
		Commencer la visite
		</a>
	</div>
</body>

<style>
	.background {
		background-image: url("/assets/bg-home.png");
		background-size: contain;
		background-attachment: fixed;
		height: 100vh;
	}
</style>
