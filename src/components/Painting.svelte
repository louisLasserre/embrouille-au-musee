<script lang="ts">
	export let src: HTMLImageElement['src'];
	export let alt: HTMLImageElement['alt'];
</script>

<img class="absolute" {src} {alt} />
<slot />

<style lang="postcss">
</style>
