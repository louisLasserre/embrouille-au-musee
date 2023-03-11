<script>
	import Button from "src/components/Button.svelte";
	import {paintingsData, team} from "src/lib/data.ts";

	let innerWidth = 0;
	$: isMobile = innerWidth < 768;
	$: widthContent = isMobile ? 'w-screen' : 'w-96 mx-auto my-0';


</script>

<svelte:window bind:innerWidth/>

<div class="{widthContent} bg-background p-5">
	<h1 class="text-center font-title text-title uppercase py-10">Crédits</h1>
	<p class="text-text font-text pb-5">Les oeuvres choisies sont les suivantes :</p>
	<ul>
		{#each paintingsData as painting}
			<li class="text-text font-text"><span class="italic font-button">{painting.name}</span>, {painting.description};</li>
		{/each}
	</ul>
	<p class="pt-5 text-text font-text">
		L'équipe derrière
		<span class="font-button">Embrouille au musée :</span>
	</p>
	<div class="flex flex-row flex-wrap justify-center gap-6 py-10">
		{#each team as data}
			<div class="w-40 h-full">
				<a href={data.network}>
					<p class="font-button text-text text-center ">{data.name}</p>
					<div class="mask">
						<img src={data.img} />
					</div>
					<p class="text-text font-text text-center">{data.role}</p>
				</a>
			</div>
		{/each}
	</div>
	<div class="flex justify-center gap-6">
		<Button url="/end">Retour</Button>
		<Button url="/">Accueil</Button>
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