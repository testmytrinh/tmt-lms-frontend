<script lang="ts">
	import CourseCard from "$lib/components/Cards/CourseCard.svelte";
	import VARIANTS from "$lib/constants/styles";
	import { type CourseCardInfo } from "$lib/types/feed";
	import { popularCourses } from "$lib/mocks/feed";

	type Props = {
		items?: CourseCardInfo[];
		maxCards?: number;
		heading?: string;
	};
	const {
		items = popularCourses,
		heading = "Popular Courses",
		maxCards = 4,
	}: Props = $props();
</script>

<section class="mt-28 px-4 sm:px-6 lg:px-12">
	<div class="flex items-center justify-between mb-8">
		<h2 class="text-2xl md:text-3xl font-bold tracking-tight">
			{heading}
		</h2>
		<a href="/courses" class={VARIANTS.OUTLINED}>Browse all</a>
	</div>
	{#if items.length === 0}
		<p
			class="col-span-full text-sm text-gray-500 dark:text-gray-400"
		>
			No courses yet.
		</p>
	{:else}
		<div class="grid gap-4 grid-cols-2">
			{#each items.slice(0, maxCards) as course}
				<CourseCard {course} classes="bg-red"/>
			{/each}
		</div>
	{/if}
</section>
