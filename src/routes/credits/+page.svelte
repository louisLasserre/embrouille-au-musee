<script>
	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';

	const data = [
		{
			name: 'Auréliane Dor',
			network: 'https://www.linkedin.com/in/aur%C3%A9liane-dor-992967200/',
			img: '/pictures/aureliane.png'
		},
		{
			name: 'Bastien Garnier',
			network: 'https://www.linkedin.com/in/bastiengarnier19/',
			img: '/pictures/bastien.png'
		},
		{
			name: 'Emma Guillaume',
			network: 'https://www.linkedin.com/in/emma-guillaume-7122a6202/',
			img: '/pictures/emma.png'
		},
		{
			name: 'Louis Lasserre',
			network: 'https://www.linkedin.com/in/louis-lasserre-0a8308222/',
			img: '/pictures/louis.png'
		},
		{
			name: 'Safiya Seddiki',
			network: 'https://www.linkedin.com/in/safiya-seddiki/',
			img: '/pictures/safiya.png'
		}
	]
</script>

<svelte:window bind:innerWidth/>

<div class="{widthContent} bg-background">
	<h1 class="text-center font-title text-title uppercase py-10">Crédits</h1>
	<p class="text-center text-text font-text">
		L'équipe derrière
		<span class="font-button">Embrouille au musée</span>
	</p>
	<div class="flex flex-row flex-wrap justify-center gap-6 py-10">
		{#each data as data}
			<div class="w-40 h-full">
				<a href={data.network}>
					<p class="font-text text-text text-center">{data.name}</p>
					<div class="mask">
						<img src={data.img} />
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.mask{
		mask-image: url('/assets/fond-item2.png');
		mask-size: 100%;
		mask-repeat: no-repeat;
		mask-position: center;
	}
</style>