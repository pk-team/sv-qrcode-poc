<script lang="ts">
	import { Html5QrcodeScanner, type Html5QrcodeResult } from 'html5-qrcode';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher()

	let qrScanner: Html5QrcodeScanner;

	function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
		dispatch('scan', decodedText)
		soundEffect.play()
	}

	function onScanFailure(error: any) {
		console.warn(`Code scan error = ${error.message}`, error);
	}

	onMount(() => {
		qrScanner = new Html5QrcodeScanner('render', { fps: 10, qrbox: 250 }, false);
		qrScanner.render(onScanSuccess, onScanFailure);
	});

	onDestroy(() => {
		qrScanner?.clear();
	});

	let soundEffect: HTMLAudioElement

</script>

<div id="render"></div>
<audio src="/scanSuccess.mp3" bind:this={soundEffect}></audio>

<style>
	#render {
		width: 100%;
		border: 1px solid #444;
	}
</style>
