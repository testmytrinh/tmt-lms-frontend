<script lang="ts">
	import '../app.css';
	
import Navbar from "$lib/components/Navbar/index.svelte";
	let { children } = $props();
</script>

<div class="app">
    <Navbar />
	<main class="top-12 relative">
		{@render children()}
	</main>
</div>
