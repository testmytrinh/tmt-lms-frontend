<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Avatar from "$lib/components/Avatars/Avatar.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Nav/Avatar",
		component: Avatar,
		tags: ["autodocs"],
	});
</script>

<Story name="Cant find image" args={{ src: "something", name: "John Doe" }} />
<Story
	name="vertical image"
	args={{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vertical_Flag_of_the_United_Kingdom_%281-2%29.svg/600px-Vertical_Flag_of_the_United_Kingdom_%281-2%29.svg.png",
		name: "John Doe",
	}}
/>
<Story
	name="horizontal image"
	args={{
		src: "https://www.shutterstock.com/image-photo/green-tea-plantation-sunrise-timenature-260nw-2322999967.jpg",
		name: "John Doe",
	}}
/>
<Story
	name="Fallback with delay"
	args={{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vertical_Flag_of_the_United_Kingdom_%281-2%29.svg/600px-Vertical_Flag_of_the_United_Kingdom_%281-2%29.svg.png",
		name: "John Doe",
		delayMs: 2000,
	}}
/>
