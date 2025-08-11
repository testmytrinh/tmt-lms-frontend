<script>
	import ThemeToggleBtn from "$lib/components/Buttons/ThemeToggleBtn.svelte";
	import NavMenu from "./NavMenu.svelte";
	import AccountMenu from "./AccountMenu.svelte";
	import { APP_LOGO } from "$lib/constants/app";
</script>

<header
	class="fixed h-12 top-0 shadow-sm inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 lg:z-61 w-full bg-zinc-100 text-sm py-2.5 dark:bg-neutral-700 border-b-1 border-gray-400 dark:border-none"
>
	<nav
		class="px-4 sm:px-5.5 flex basis-full items-center w-full mx-auto h-full"
	>
		<div class="w-full flex items-center gap-x-1.5">
			<div
				class="inline-flex items-center relative text-gray-700"
			>
				<a
					class="inline-flex justify-center items-center text-2xl font-semibold gap-x-1.5 text-gray-900 dark:text-white"
					href="/"
					aria-label="Preline"
				>
					<img
						src={APP_LOGO}
						alt=""
						class="size-8"
					/>
					TMT.VI
				</a>
			</div>
			<NavMenu classes="ms-5" />

			<div class="flex flex-row items-center gap-x-3 ms-auto">
				<ThemeToggleBtn />
				<AccountMenu />
			</div>
		</div>
	</nav>
</header>
