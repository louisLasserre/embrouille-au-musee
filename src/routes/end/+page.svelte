<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { actualPaintingIndex, exploringMode } from '../../stores';

	let endPageData;

	if ($exploringMode === 'getItems') {
		$exploringMode = 'placeItems';
		$actualPaintingIndex = 0;

		endPageData = {
			title: 'Bravo',
			description: 'Description',
			button: {
				url: '/tableau/1/explore',
				text: "J'y suis"
			}
		};
	} else {
		$exploringMode = 'getItems';
		$actualPaintingIndex = 0;
		endPageData = {
			title: 'Merci',
			description: 'Description',
			button: {
				url: '/',
				text: "Quitter l'expèrience"
			}
		};
	}

	const { title, description, button } = endPageData;
	const { url, text } = button;
</script>

<h1 class="text-text">{title}</h1>
<Button {url}>{text}</Button>
