<script lang="ts">
	export let url: string;
	export let disabled: boolean;
	export let className: string;

	alert(url)

	let buttonStyle = 'w-48 text-background text-center font-button px-6 py-3 rounded-md bg-button';
	let disabledStyle = 'w-48 text-background text-center font-button px-6 py-3 rounded-md bg-buttonDisabled';

</script>

<div class=" {className} ">
	{#if !disabled}
		<a href={url} class={buttonStyle}><slot /></a>
	{:else}
		<button class={disabledStyle} disabled><slot /></button>
	{/if}
</div>
