<script lang="ts">
	import type { Snippet } from "svelte";
	import { Collapsible } from "bits-ui";
	import FlowbiteChevronSortOutline from '~icons/flowbite/chevron-sort-outline'

	type Props = {
		label: Snippet;
		isLabelInButton?: boolean;
		popoverContent?: Snippet;
		rootClasses?: string;
		labelClasses?: string;
		buttonClasses?: string;
		iconClasses?: string;
		hasIcon?: boolean;
		popoverClasses?: string;
	};

	const {
		label,
		isLabelInButton=true,
		popoverContent,
		rootClasses = "",
		labelClasses = "",
		buttonClasses = "",
		iconClasses = "",
		hasIcon = true,
		popoverClasses = "",
	}: Props = $props();
</script>

<Collapsible.Root
	class="flex dark:text-neutral-200 text-gray-800 {rootClasses}"
>
	<div class="flex items-center rounded-lg {labelClasses}">
		{#if !isLabelInButton}
			{@render label()}
		{/if}
		<Collapsible.Trigger
			class="flex gap-x-1 p-1 size-full items-center rounded-lg hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500/50 {buttonClasses}"
			aria-label="Show starred repositories"
		>
			{#if isLabelInButton}
				{@render label()}
			{/if}
			{#if hasIcon}
				<FlowbiteChevronSortOutline class="size-4 {iconClasses}" />
			{/if}
		</Collapsible.Trigger>
	</div>

	<Collapsible.Content
		class="absolute top-full z-10 mt-2 rounded-lg bg-white shadow-xl dark:bg-gray-800 {popoverClasses}"
	>
		{#if popoverContent}
			{@render popoverContent()}
		{/if}
	</Collapsible.Content>
</Collapsible.Root>
