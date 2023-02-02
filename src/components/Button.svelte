<script lang="ts">
	export let url: string;
	export let disabled: boolean;
</script>

{#if !disabled}
<a href={url} class="text-buttons"><slot /></a>
{:else}
	<slot />
{/if}
