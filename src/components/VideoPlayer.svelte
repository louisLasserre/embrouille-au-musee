<script lang="ts">
	export let src: HTMLVideoElement['src'];
	export let poster: HTMLVideoElement['poster'];

	type TvideoStatus = 'play' | 'paused';
	let videoStatus: TvideoStatus = 'paused';

	const playpauseclick = () => {
		const video: HTMLVideoElement | null = document.querySelector('#video');
		const controlLogo: HTMLElement | null = document.querySelector('#controlsLogo');
		handleLoading(video);
		if (!video) {
			console.error('VideoPlayer: video not found');
			return;
		}
		controlLogo?.classList.toggle('active');
		if (video.paused) {
			play(video);
		} else {
			pause(video);
		}
	};
	const handleLoading = (video: HTMLVideoElement) => {
		video.addEventListener('waiting', () => {
			console.log('waiting');
		});
		video.addEventListener('loadeddata', () => {
			console.log('loadeddata');
		});
		video.addEventListener('canplay', () => {
			console.log('canplay');
		});
		video.addEventListener('playing', () => {
			console.log('playing');
		});
	};

	const play = (video: HTMLVideoElement) => {
		videoStatus = 'play';
		video.play();
	};
	const pause = (video: HTMLVideoElement) => {
		videoStatus = 'paused';
		video.pause();
	};

	$: controlIcon = () => {
		if (videoStatus === 'play') {
			return 'play.svg';
		}
		return 'pause.svg';
	};
</script>

<div id="videoContainer" class="h-full w-full absolute overflow-hidden">
	<video id="video" {src} playsinline preload="auto" {poster} />
	<div class="gradient" />
	<button class="controls" on:click={playpauseclick}>
		<div class="w-20">
			<img
				id="controlsLogo"
				class="text-purple-50 object-contain w-full"
				src={`/icons/${controlIcon()}`}
			/>
		</div>
	</button>
</div>

<style>
	.gradient {
		position: absolute;
		inset: 0;
		background: rgb(17, 17, 17);
		background: linear-gradient(
			0deg,
			rgba(17, 17, 17, 1) 0%,
			rgba(32, 32, 32, 1) 10%,
			transparent 100%
		);
	}
	.controls {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
	}
	:global(#controlsLogo.active) {
		opacity: 0;
		transition-delay: 2s;
	}
	:global(#controlsLogo) {
		opacity: 1;
		transition: all 0.3s linear;
	}
</style>
