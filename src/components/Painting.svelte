<script lang="ts">
	export let src: HTMLImageElement['src'];
	export let alt: HTMLImageElement['alt'];
</script>

<div class="relative">
	<img class="max-w-full block h-auto" {src} {alt} />
	<slot />
</div>



<style lang="postcss">
</style>
