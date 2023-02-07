<script lang="ts">
	export let isActive: boolean = false;
	export let PageId: number;
</script>

{#if isActive}
	<div
		class={'absolute inset-x-1/2 inset-y-1/2 w-full bg-textBtn text-text text-center py-6 px-6 gap-2 flex flex-col z-10'}
	>
		<button on:click={() => (isActive = false)}>fermer modal</button>
		<p>Indice Tableau {PageId}</p>
		<p>Je vous en supplie, retrouvez mon testament !</p>
	</div>
{/if}
