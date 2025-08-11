<script lang="ts">
	import type { Snippet } from "svelte";
	import VARIANTS from "$lib/constants/styles";

	type Props = {
		classes?: string;
		children?: Snippet;
	};
	const { classes, children }: Props = $props();
</script>

<div
	class="{VARIANTS.RING_ON_HOVER} bg-white dark:bg-neutral-900 transition {classes}"
>
	{#if children}
		{@render children()}
	{/if}
</div>
