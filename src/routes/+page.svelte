<script lang="ts">
	import ScanQrV1 from '$lib/components/ScanQrV1.svelte';
	import '../app.css';

	let barcodes = new Set<string>()
	let vineBoom: HTMLAudioElement

	function onScan(e: CustomEvent<string>) {
		barcodes = new Set([...barcodes, e.detail])
		vineBoom.play()
	}
</script>

<main>
	<section>
		<h1>SCAN QrCode POC</h1>
		<ScanQrV1 on:scan={onScan} />
		<audio src="/vine-boom.mp3" bind:this={vineBoom}></audio>
	</section>

	<section>
		<h2>Results</h2>
		<ul>
			{#each barcodes as barcode}
				<li>{barcode}</li>
			{/each}
		</ul>
	</section>
</main>


<style>
	h1 {
		text-align: center;
	}

	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	main section {
		height: 100%;
	}
</style>
