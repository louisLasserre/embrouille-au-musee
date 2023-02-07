<script lang="ts">
	export let isActive : boolean = false;
    export let PageId : number ;
    import { paintingsData } from '$lib/data.ts';
    
</script>

{#if isActive}
<div class={" bg-background text-textDark  py-4 px-6 gap-2 flex flex-col rounded-md	w-80 font-text"}>
<button on:click={()=>isActive = false} class="absolute h-14 w-14 -left-4 -top-4"><img src="/icons/close.png"></button>
<p>Indice :</p><p>{paintingsData[PageId].clueCollect}</p>
</div>
{/if}

<style>
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
}
</style>
