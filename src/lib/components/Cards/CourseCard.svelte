<script lang="ts">
	import FlowbiteChalkboardSolid from "~icons/flowbite/chalkboard-solid";
	import FlowbiteGraduationCapSolid from "~icons/flowbite/graduation-cap-solid";
	import { type CourseCardInfo } from "$lib/types/feed";
	import VARIANTS from "$lib/constants/styles";
	import HorizontalCard from "$lib/components/Cards/HorizontalCard.svelte";

	type Props = {
		course: CourseCardInfo;
		buttonText?: string;
		classes?: string;
	};

	const {
		course,
		classes = "",
		buttonText = "VIEW COURSE",
	}: Props = $props();
	let startDateStr =
		course.startDate?.toLocaleDateString("vi") ?? "Unknown";
	let endDateStr = course.endDate?.toLocaleDateString("vi") ?? "Unknown";
</script>

<HorizontalCard classes="grid grid-cols-8 h-full {classes}">
	<div class="col-span-1" style="background-color: {course.color};"></div>
	<div class="col-span-7 flex flex-col justify-between">
		<div class="p-4 gap-y-2 grid tracking-tight">
			<h2
				class="uppercase text-2xl font-bold text-blue-800 dark:text-blue-400"
			>
				<a href={course.href} class="hover:underline"
					>{course.title}</a
				>
			</h2>
			<p class="text-base">
				{course.desc}
			</p>
			<div
				class=" flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold"
			>
				{#if course.author}
					<span>
						<FlowbiteGraduationCapSolid
							class="size-5 inline align-top"
						/>
						{course.author}
					</span>
				{/if}
				{#if course.startDate || course.endDate}
					<span>
						<FlowbiteChalkboardSolid
							class="size-5 inline align-top"
						/>
						{startDateStr} - {endDateStr}
					</span>
				{/if}
			</div>
		</div>
		<a href={course.href} class="{VARIANTS.PRIMARY} col-span-full"
			>{buttonText}</a
		>
	</div>
</HorizontalCard>
