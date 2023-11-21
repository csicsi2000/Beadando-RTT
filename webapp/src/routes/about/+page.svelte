<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import kukorica from '$lib/images/kukorica.jpg'
</script>
<div class="text-column">
	<h1>Leírás</h1>

	<p>
		Ez a beadandó Svelte keretrendszerben készült.
	</p>
	<img src={kukorica} class="img-fluid" alt="kukorica">

</div>
