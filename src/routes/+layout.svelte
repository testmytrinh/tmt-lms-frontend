<script lang="ts">
	import "../app.css";

	import Navbar from "$lib/components/Navbar/Navbar.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
	let { children } = $props();
	
</script>

<svelte:head>
	<title>TMT.vi</title>
</svelte:head>

<div class="app">
	<Navbar />
	<main class="mt-16 relative min-h-[calc(100vh-16rem)]">
		{@render children()}
	</main>
	<Footer />
</div>
