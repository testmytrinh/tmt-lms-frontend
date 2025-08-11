<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import ThemeToggleBtn from "$lib/components/Buttons/ThemeToggleBtn.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Nav/ThemeToggleBtn",
		component: ThemeToggleBtn,
		tags: ["autodocs"],
	});
</script>

<Story name="Default" args={{}} />
