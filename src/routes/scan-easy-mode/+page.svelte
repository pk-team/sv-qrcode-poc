<script lang="ts">
	import ScanQrV1 from '$lib/components/ScanQrV1.svelte';

	let barcodes = new Set<string>()

	function onScan(e: CustomEvent<string>) {
		barcodes = new Set([...barcodes, e.detail])
	}
</script>

<div>Easy Mode</div>
<main>
	<section>
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
</main>


<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	main section {
		height: 100%;
	}
</style>
