<script lang="ts">
	import '../app.css';

    const environment = process.env.NODE_ENV

    console.log('environment', environment)
</script>

<header>
	<div class="title">
		<h3><a href="/">SKD Barcode Scanner</a></h3>
	</div>
	<nav>
		<a href="/scan">Test Scan</a>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 2rem;
		padding: 1rem;
		background: #eee;
	}

	header h3 a {
		text-decoration: none;
		color: inherit;
	}

	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		padding: 1rem;
		margin: 0 auto;
	}

	main :global(section) {
		height: 100%;
	}

	main :global(h2) {
		margin-bottom: 0.5rem;
	}

	@media (max-width: 640px) {
		main {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		header {
			gap: 1rem;
		}
	}
</style>