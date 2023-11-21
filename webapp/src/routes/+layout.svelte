<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<div class="m-auto" style="max-width: 50rem">
		<slot />
	</div>
	</main>

	<footer>
		<p>Neptun kód: FSFKP7</p>
	</footer>
</div>