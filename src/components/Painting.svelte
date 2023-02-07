<script lang="ts">
	export let src: HTMLImageElement['src'];
	export let alt: HTMLImageElement['alt'];
</script>

<div class="relative w-full h-3/5 overflow-hidden">
	<img class="absolute" {src} {alt} />
	<slot />
</div>

<style lang="postcss">
</style>
