<script lang="ts">
	export let url: string = '';
	export let disabled: boolean = false;
	export let className: string = '';
	export let onClick: () => void = () => {};
	export let isButtonHelp: boolean = false;

	let buttonStyle = 'text-background text-center font-button p-2 rounded-md bg-button';
	let disabledStyle = ' opacity-50 cursor-not-allowed text-textLightDisabled';
</script>

{#if isButtonHelp}
	<button class={buttonStyle} on:click={() => onClick()}><slot /></button>
{:else}
	<div class=" {className} ">
		{#if !disabled}
			<button class={buttonStyle}>
				<a href={url}><slot /></a>
			</button>
		{:else}
			<button class={`${buttonStyle} ${disabledStyle}`}><slot /></button>
		{/if}
	</div>
{/if}
