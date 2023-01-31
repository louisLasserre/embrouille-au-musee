<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { title, content } = data;
</script>

<h1 class="text-red-600">{title}</h1>
<p>{content}</p>

<style lang="postcss">
</style>
