<script lang="ts">
	import { theme } from "$lib/stores/theme";
	import { Switch } from "@skeletonlabs/skeleton-svelte";
	import FlowbiteMoonSolid from "~icons/flowbite/moon-solid";
	import FlowbiteSunSolid from "~icons/flowbite/sun-solid";
	let isDark = $derived($theme === "dark");
</script>

<Switch
	name="compact"
	controlWidth="w-9"
	controlClasses="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-500/50"
	thumbClasses="bg-transparent"
	checked={isDark}
	onCheckedChange={(e) => theme.set(e.checked ? "dark" : "light")}
	compact
>
	{#snippet activeChild()}<FlowbiteSunSolid
			color="var(--color-yellow-500)"
			font-size="1.15rem"
		/>{/snippet}
	{#snippet inactiveChild()}<FlowbiteMoonSolid
			color="var(--color-indigo-500)"
			font-size="1.15rem"
		/>{/snippet}
</Switch>
