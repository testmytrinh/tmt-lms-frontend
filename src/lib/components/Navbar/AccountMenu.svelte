<script lang="ts">
	import Popover from "$lib/components/Popover/Popover.svelte";
	import Avatar from "$lib/components/Avatars/Avatar.svelte";
	import VARIANTS from "$lib/constants/styles";
	import { auth, user } from "$lib/stores/user";

	let fullName = $derived([$user.firstName, $user.lastName].join(" "));
</script>

{#if $auth.isAuthenticated}
	<Popover
		hasIcon={false}
		isLabelInButton={true}
		popoverClasses="right-0 w-72 p-0 overflow-hidden"
		buttonClasses="rounded-full! p-0!"
	>
		{#snippet label()}
			<Avatar
				src={$user.avatarUrl}
				name={fullName}
				classes="size-8!"
			/>
		{/snippet}
		{#snippet popoverContent()}
			<div class="flex flex-col text-sm">
				<!-- Header -->
				<div
					class="p-4 pb-3 border-b border-gray-200 dark:border-gray-700"
				>
					<p
						class="font-semibold text-gray-900 dark:text-gray-100 leading-tight"
					>
						{fullName}
					</p>
					<p
						class="text-gray-500 dark:text-gray-400 text-xs mt-0.5 truncate"
					>
						{$user.email}
					</p>
				</div>
				<!-- Actions -->
				<nav>
					<a
						href="/profile"
						class="{VARIANTS.LINK} hover:bg-gray-100 dark:hover:bg-gray-700"
						>Profile</a
					>
					<a
						href="/settings"
						class="{VARIANTS.LINK} hover:bg-gray-100 dark:hover:bg-gray-700"
						>Settings</a
					>
					<a
						href="/logout"
						class="{VARIANTS.LINK} hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600! dark:text-red-400!"
						>Log out</a
					>
				</nav>
			</div>
		{/snippet}
	</Popover>
{:else}
	<div class="flex items-center gap-2">
		<a href="/login" class={VARIANTS.LINK_HOVER_BG}> Log in </a>
		<a href="/signup" class={VARIANTS.PRIMARY}> Sign up </a>
	</div>
{/if}
