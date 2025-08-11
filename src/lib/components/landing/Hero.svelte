<script lang="ts">
	import Button from "$lib/components/Buttons/Button.svelte";
	import VARIANTS from "$lib/constants/styles";

	interface Props {
		heading?: string;
		body?: string;
		ctaLabel?: string;
		ctaHref?: string;
		imageSrc?: string;
		imageAlt?: string;
	}

	const {
		heading = "High-quality and open\nCourses for Everyone!",
		body = "Learn whatever we have. Start from the basics or dive deep into advanced topics — at your own pace.",
		ctaLabel = "Our courses",
		ctaHref = "/courses",
		imageSrc = "https://www.mooc.fi/_next/image/?url=%2Fimages%2Fnew%2Ffrontpage_hero_image_cropped.png&w=1920&q=75",
		imageAlt = "Learning outdoors",
	}: Props = $props();
</script>

<section class="px-4 sm:px-6 lg:px-12 grid gap-10 md:gap-16 md:grid-cols-2 items-center">
	<!-- Text Content -->
	<div>
		<h1
			class="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
		>
			{heading.toUpperCase()}
		</h1>
		<p
			class="mt-8 text-sm md:text-lg leading-relaxed max-w-prose"
		>
			{body}
		</p>
		<a
			class="{VARIANTS.PRIMARY} {VARIANTS.RING_ON_HOVER} mt-10 px-8 py-4 text-lg font-semibold inline-flex"
			href={ctaHref}
		>
			{ctaLabel} ➜
		</a>
	</div>

	<!-- Image -->
	<div class="relative aspect-video md:aspect-[4/3] overflow-hidden">
		{#if imageSrc}
			<img
				src={imageSrc}
				alt={imageAlt}
				class="absolute inset-0 w-full h-full object-cover"
			/>
		{/if}
	</div>
</section>
