<script>
	import { DEFAULT_ROUTES_ON_NAV } from "$lib/constants/route";
	import VARIANTS from "$lib/constants/styles";

	const { classes = "" } = $props();
</script>

<div class="flex gap-x-2 {classes}">
	{#each DEFAULT_ROUTES_ON_NAV as { path, label }}
		<a
			href={path}
			class="{VARIANTS.LINK_HOVER_BG} font-bold! text-base!"
		>
			{label}
		</a>
	{/each}
</div>
