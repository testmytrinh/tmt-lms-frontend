<script lang="ts">
	import { Avatar } from "bits-ui";

	let { src, name, classes = "", delayMs = 100 } = $props();
	let shortName = name
		.split(" ")
		.map((n: string[]) => n[0])
		.join("");
</script>

<Avatar.Root
	{delayMs}
	class={`size-8 flex items-center overflow-hidden ${classes}`}
>
	<Avatar.Image
		{src}
		alt={name}
		loading="lazy"
		class="size-full object-cover rounded-full"
	/>
	<Avatar.Fallback
		class="size-full content-center text-center rounded-full truncate uppercase border-2 black:border-white black:bg-white black:text-white"
		>{shortName}</Avatar.Fallback
	>
</Avatar.Root>
