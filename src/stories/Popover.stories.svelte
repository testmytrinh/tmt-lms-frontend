<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Popover from "$lib/components/Popover/Popover.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Popover",
		component: Popover,
		tags: ["autodocs"],
	});
</script>

<Story name="Simple Template">
	{#snippet template(args)}
		<Popover {...args}>
			{#snippet label()}
				<span
					class="text-gray-800 dark:text-neutral-200"
					>Course</span
				>
			{/snippet}
			{#snippet popoverContent()}
				<div
					class="overflow-hidden first:rounded-t-lg last:rounded-b-lg"
				>
					<a
						href="/"
						class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
					>
						Course 1
						<p
							class="text-sm text-gray-500 dark:text-gray-400"
						>
							desc
						</p>
					</a>
					<a
						href="/"
						class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
					>
						Course 1
						<p
							class="text-sm text-gray-500 dark:text-gray-400"
						>
							desc
						</p>
					</a>
					<a
						href="/"
						class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
					>
						Course 1
						<p
							class="text-sm text-gray-500 dark:text-gray-400"
						>
							desc
						</p>
					</a>
				</div>
			{/snippet}
		</Popover>
	{/snippet}
</Story>
