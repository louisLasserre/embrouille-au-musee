<script lang="ts">
	import VideoPlayer from 'svelte-video-player';

	import Button from 'src/components/Button.svelte';
	import Painting from 'src/components/Painting.svelte';

	import type { PageData } from '../$types';

	export let data: PageData;

	const { name, description, fileName } = data.tableau;

	const poster = `/paintings/${fileName}.jpg`;
	const source = [
		'https://www.server.com/video.webm',
		'https://www.server.com/video.mp4',
		'https://www.server.com/video.ogv'
	];
</script>

<div class="h-[100vh] relative">
	<div class="h-full w-full absolute -z-10 overflow-hidden">
		<VideoPlayer {poster} {source} height="1920" width="1080" borderRadius="0" />
	</div>

	<h1 class="text-red-600">{name}</h1>
	<p class="text-background font-texts font-normal">{description}</p>

	<p>page vidéo du tableau {data.id}</p>
	<Button url="/tableau/{data.id}/explore">Explorer l'oeuvre</Button>
</div>

<style lang="postcss">
</style>
