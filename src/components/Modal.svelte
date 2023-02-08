<script lang="ts">
	import { paintingsData } from '$lib/data.ts';
	import { exploringMode } from '../stores.ts';

	export let isActive: boolean = false;
	export let PageId: number;
	export let text: string | null;
</script>

{#if isActive}
	<section on:click={() => (isActive = false)} on:keydown />
	<div
		class={' bg-background text-textDark  py-4 px-6 gap-2 flex flex-col rounded-md	w-80 font-text'}
	>
		<button on:click={() => (isActive = false)} class="absolute h-14 w-14 -right-7 -top-5"
			><img src="/icons/close.png" /></button
		>
		{#if text}
			<p>
				{text}
			</p>
		{:else}
			<p>Indice :</p>
			{#if $exploringMode == 'getItems'}
				<p>{paintingsData[PageId - 1].clueCollect}</p>
			{:else if $exploringMode == 'placeItems'}
				<p>{paintingsData[PageId - 1].clueReturn}</p>
			{/if}
		{/if}
	</div>
{/if}

<style>
	section {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 2;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 20;
	}
</style>
