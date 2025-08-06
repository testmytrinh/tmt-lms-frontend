<script lang="ts">
	import { Avatar } from "bits-ui";

	let { src, name, classes = "" } = $props();
	let shortName = name
		.split(" ")
		.map((n: string[]) => n[0])
		.join("");
</script>

<Avatar.Root
	delayMs={200}
	class={`size-8 box-border
 rounded-full  flex items-center overflow-hidden ${classes}`}
>
	<Avatar.Image {src} alt={name} class="size-full object-cover" />
	<Avatar.Fallback
		class="size-full border-2 content-center rounded-full truncate w-full uppercase"
		>{shortName}</Avatar.Fallback
	>
</Avatar.Root>
