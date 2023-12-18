<script lang="ts">
	import { Html5QrcodeScanner, type Html5QrcodeResult } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let qrScanner: Html5QrcodeScanner;

	let barcodes = new Set<string>();

	function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
		console.log(`Code matched = ${decodedText}`, decodedResult);
		barcodes = new Set([...barcodes, decodedText]);
	}

	function onScanFailure(error: any) {
		console.warn(`Code scan error = ${error.message}`, error);
	}

	onMount(() => {
		qrScanner = new Html5QrcodeScanner('render', { fps: 10, qrbox: 250 }, false);
		qrScanner.render(onScanSuccess, onScanFailure);
	});
</script>

<div id="render"></div>

<h2>Result</h2>
<ul>
	{#each barcodes as barcode}
		<li>{barcode}</li>
	{/each}
</ul>

<style>
	#render {
		height: 250px;
		width: 600px;
		border: 1px solid #444;
        overflow-y: clip;
	}
</style>
