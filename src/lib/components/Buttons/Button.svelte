<script lang="ts">
	import VARIANTS from "../../constants/styles";
	import type { Snippet } from "svelte";

	type Props = {
		variant?: VARIANTS;
		children: Snippet;
		classes?: string;
		onclick?: (e?: Event) => void;
		type?: "button" | "submit" | "reset";
		isDisabled?: boolean;
		isLoading?: boolean;
	};

	let {
		variant = VARIANTS.PRIMARY,
		children,
		classes = "",
		onclick = (e?: Event) => {},
		type = "button",
		isDisabled = false,
		isLoading = false,
	}: Props = $props();
</script>

<button
	class="{variant} {classes}"
	{onclick}
	{type}
	disabled={isDisabled}
>
	{#if isLoading}
		<span class="loader"></span>
	{/if}
	{@render children()}
</button>
