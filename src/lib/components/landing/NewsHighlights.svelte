<script lang="ts">
	import VARIANTS from "$lib/constants/styles";
	import CompactCard from "$lib/components/Cards/CompactCard.svelte";
	import HorizontalCard from "$lib/components/Cards/HorizontalCard.svelte";
	import { type NewsCardInfo } from "$lib/types/feed";
	import { newsFeed } from "$lib/mocks/feed";

	type Props = {
		items?: NewsCardInfo[];
		maxCards?: number;
		heading?: string;
	};

	const {
		items = newsFeed,
		heading = "Latest Updates",
		maxCards = 5,
	}: Props = $props();
</script>

<section
	class="mt-20 py-6 px-4 sm:px-6 lg:px-12 bg-neutral-200 dark:bg-neutral-700"
>
	<div class="flex items-center justify-between mb-6">
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight">
			{heading}
		</h2>
		<a href="/news" class={VARIANTS.OUTLINED}>View all</a>
	</div>

	{#if items.length === 0}
		<p class="text-sm text-gray-500 dark:text-gray-400">
			No news yet.
		</p>
	{:else}
		<div class="grid gap-8 md:grid-cols-3">
			<!-- Featured card -->
			<CompactCard
				imgSrc={items[0].imgSrc}
				classes="md:col-span-2"
			>
				<p
					class="text-xs uppercase font-semibold tracking-wider text-blue-200 dark:text-blue-200!"
				>
					{items[0].tag || "Featured"}
				</p>
				<h3
					class="text-3xl font-extrabold max-w-xl leading-snug text-white"
				>
					{items[0].title}
				</h3>
				<p class="text-base line-clamp-3 text-white">
					{items[0].desc}
				</p>
				<a
					href={items[0].href}
					class="{VARIANTS.TEXT} text-blue-200 dark:text-blue-200! w-fit"
					>Read more →</a
				>
			</CompactCard>
			<!-- Others -->
			<div class="space-y-2 grid grid-rows-4">
				{#each items.slice(1, maxCards) as item}
					<a href={item.href} class="block">
						<HorizontalCard
							classes="grid grid-cols-4 h-full gap-4"
						>
							<img
								src={item.imgSrc}
								alt=""
								class="col-span-1 size-full object-cover"
							/>
							<div class="col-span-3 py-2">
								<p
									class="text-sm uppercase font-semibold text-blue-500 dark:text-blue-200"
								>
									{item.tag}
								</p>
								<h4
									class="mt-1 text-base font-medium leading-snug line-clamp-2"
								>
									{item.title}
								</h4>
							</div>
						</HorizontalCard>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</section>
