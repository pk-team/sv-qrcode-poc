<script lang="ts">
	import '../app.css';

    const environment = process.env.NODE_ENV

    console.log('environment', environment)
</script>

<div class="site-wrap">
	<header>
		<div class="title">
			<h3><a href="/">Barcode Scan POC</a></h3>
		</div>
		<nav>
			<a href="/scan-easy-mode">Easy Mode</a>
			<a href="/scan-pro-mode">Pro Mode</a>
		</nav>
	</header>
	<slot />
</div>

<style>
	nav a {
		margin-right: 0.5rem;
	}
</style>