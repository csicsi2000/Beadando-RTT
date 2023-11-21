<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import viragok from '$lib/images/viragok.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="RTT Beadandó" />
</svelte:head>

<section>
	<h1>
		Főoldal
	</h1>
	<img src={viragok} class="img-fluid" alt="viragok">
</section>

