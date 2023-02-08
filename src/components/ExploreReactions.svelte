<script lang="ts">
	import { onMount } from 'svelte';

	type TVideosName = 'placedItems' | 'clueGetItems' | 'cluePlaceItems';
	interface videosUrls {
		name: TVideosName;
		fileName: string;
	}
	export let videosUrls: videosUrls[];
	//const { clueGetItems, cluePlaceItems, placedItem } = videosUrls;

	type TvideoElementsData = {
		name: TVideosName;
		element: HTMLVideoElement;
	};
	let videoElementsData: TvideoElementsData[] = [];

	onMount(() => {
		const videos: HTMLVideoElement[] = Array.from(document.querySelectorAll('.reactionVideo'));

		videos.forEach((video) => {
			const videoElementData = {
				name: video.id,
				element: video
			};
			videoElementsData.push(videoElementData);
		});
	});

	export const startVideo = (videoName: string) => {
		let videoOn: TvideoElementsData | undefined;
		let videosOff = videoElementsData.map((videoData) => {
			if (videoData.name === videoName) {
				videoOn = videoData;
				return;
			}
			return videoData;
		});

		if (!videoOn) {
			return;
		}

		videosOff.forEach((video) => {
			if (!video) {
				return;
			}
			video.element.pause();
			video.element.style.zIndex = '-1';
		});
		videoOn.element.currentTime = 0;
		videoOn.element.style.zIndex = '20';
		videoOn.element.play();
		videoOn.element.addEventListener('ended', () => {
			if (videoOn) {
				videoOn.element.style.zIndex = '-1';
			}
		});
	};
</script>

{#each videosUrls as video}
	<video id={video.name} class="reactionVideo" src={`/videos/${video.fileName}.mp4`} />
{/each}

<style>
	.active {
		z-index: 10;
		position: relative;
	}
	video {
		bottom: 40%;
		top: 0;
		position: absolute;
		z-index: -1;
	}
</style>
