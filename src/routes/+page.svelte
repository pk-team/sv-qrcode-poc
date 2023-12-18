<script lang="ts">
	import ScanQrV1 from '$lib/components/ScanQrV1.svelte';

	let barcodes = new Set<string>()

	function onScan(e: CustomEvent<string>) {
		barcodes = new Set([...barcodes, e.detail])
	}
</script>

<section>
	<ScanQrV1 on:scan={onScan} />
</section>

<section>
	<h2>Barcodes</h2>
	<ul class="barcodes">
		{#each barcodes as barcode}
			<li>{barcode}</li>
		{/each}
	</ul>
</section>

<style>
    .barcodes {
        list-style-type: none;
    }

    .barcodes li {
        border-bottom: 1px solid #444;
        padding: 0.5rem;
    }
</style>