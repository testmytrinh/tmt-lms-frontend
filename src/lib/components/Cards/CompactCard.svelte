<script lang="ts">
	import VARIANTS from "$lib/constants/styles";
	import type { Snippet } from "svelte";

	type Props = {
		imgSrc?: string;
		alt?: string;
		classes?: string;
		children?: Snippet;
	};
	const { imgSrc, alt = "", classes, children }: Props = $props();
</script>

<div
	class="{VARIANTS.RING_ON_HOVER} relative group bg-gradient-to-br from-neutral-950/80 to-neutral-900/80 transition {classes}"
>
	{#if imgSrc}
		<img
			src={imgSrc}
			{alt}
			loading="lazy"
			class="absolute inset-0 w-full h-full object-cover opacity-36 group-hover:opacity-50 transition"
		/>
	{/if}
	<div class="relative p-6 inline-flex flex-col gap-y-2">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
