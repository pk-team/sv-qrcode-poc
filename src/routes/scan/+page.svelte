<script lang="ts">
	import ScanQrV1 from '$lib/components/ScanQrV1.svelte';

	let barcodes = new Set<string>()

	function onScan(e: CustomEvent<string>) {
		barcodes = new Set([...barcodes, e.detail])
	}
</script>

<section>
	<h2>Scan Barcodes</h2>
	<ScanQrV1 on:scan={onScan} />
</section>

<section>
	<h2>Results</h2>
	<ul>
		{#each barcodes as barcode}
			<li>{barcode}</li>
		{/each}
	</ul>
</section>