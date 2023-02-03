<script lang="ts">
	export let url: string;
	export let disabled: boolean;

</script>
<div class={disabled ? "w-48 bg-backgroundDisabled text-textBtnDisabled px-6 py-3 rounded-md" : "w-48 flex justify-center	bg-background text-textBtn px-6 py-3 rounded-md"}>
{#if !disabled}
	<a href={url}><slot /></a>
{:else}
	<slot />
{/if}
</div>