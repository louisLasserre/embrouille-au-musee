<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={onClick()} class="font-button text-button items-center">
	Indice
	<img src="/icons/clue.png" alt="" class="w-12">
</button>
