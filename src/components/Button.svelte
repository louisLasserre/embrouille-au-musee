<script lang="ts">
	export let url: string;
	export let disabled: boolean;
	export let className: string;

	let buttonStyle = 'w-48 text-background text-center font-button px-6 py-3 rounded-md bg-button';
	let disabledStyle = ' opacity-50 cursor-not-allowed';

</script>

<div class=" {className} ">
	{#if !disabled}
		<a href={url} class={buttonStyle}><slot /></a>
	{:else}
		<button class={`${buttonStyle} ${disabledStyle}`}><slot /></button>
	{/if}
</div>
