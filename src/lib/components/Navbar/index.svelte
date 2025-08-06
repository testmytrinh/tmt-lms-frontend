<script>
	import ThemeToggleBtn from "$lib/components/Buttons/ThemeToggleBtn.svelte";
	import Avatar from "$lib/components/Avatar.svelte";
	import Popover from "$lib/components/Popover/Popover2.svelte";
	import FlowbiteBookOpenSolid from "~icons/flowbite/book-open-solid";
	import FlowbiteWandMagicSparklesSolid from "~icons/flowbite/wand-magic-sparkles-solid";

	const LOGO_SRC = "/favicon.svg";
</script>

<header
	class="fixed h-12 top-0 shadow-xl inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 lg:z-61 w-full bg-zinc-100 text-sm py-2.5 dark:bg-neutral-900 dark:border-b-indigo-500 dark:border-b-1"
>
	<nav
		class="px-4 sm:px-5.5 flex basis-full items-center w-full mx-auto h-full"
	>
		<div class="w-full flex items-center gap-x-1.5">
			<div
				class="inline-flex items-center relative text-gray-700"
			>
				<a
					class="inline-flex justify-center items-center text-xl font-semibold gap-x-1.5"
					href="/"
					aria-label="Preline"
				>
					<img
						src={LOGO_SRC}
						alt=""
						class="size-8"
					/>
				</a>
			</div>
      
			<ul class="flex items-center gap-1.5 ms-5 h-full">
				<li
					class="inline-flex items-center relative text-gray-200 pe-1.5 last:pe-0"
				>
					<Popover buttonClasses="py-2 px-1.5">
						{#snippet label()}
							<span
								class="text-gray-800 dark:text-neutral-200"
								>Course</span
							>
						{/snippet}
						{#snippet popoverContent()}
							<div
								class="overflow-hidden first:rounded-t-lg last:rounded-b-lg"
							>
								<a
									href="/"
									class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
								>
									Course 1
									<p
										class="text-sm text-gray-500 dark:text-gray-400"
									>
										desc
									</p>
								</a>
								<a
									href="/"
									class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
								>
									Course 1
									<p
										class="text-sm text-gray-500 dark:text-gray-400"
									>
										desc
									</p>
								</a>
								<a
									href="/"
									class="block w-max text-blue-600 px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-500/50 dark:text-blue-400"
								>
									Course 1
									<p
										class="text-sm text-gray-500 dark:text-gray-400"
									>
										desc
									</p>
								</a>
							</div>
						{/snippet}
					</Popover>
				</li>
			</ul>

			<ul class="flex flex-row items-center gap-x-3 ms-auto">
				<li
					class="hidden md:inline-flex items-center gap-1.5 relative text-gray-500 pe-2 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12 dark:text-neutral-200 dark:after:bg-neutral-300"
				>
					<button
						type="button"
						class="flex items-center gap-x-1.5 py-2 px-2.5 font-medium text-xs bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
					>
						<FlowbiteWandMagicSparklesSolid
							class="shrink-0 size-5 text-indigo-500 dark:text-indigo-400"
						/>
						Ask AI
					</button>
					<ThemeToggleBtn />
				</li>

				<li
					class="inline-flex items-center gap-1.5 relative text-gray-500 pe-3 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-gray-300 after:rounded-full after:-translate-y-1/2 after:rotate-12 dark:text-neutral-200 dark:after:bg-neutral-300"
				>
					<a
						href="/"
						class="hover:bg-gray-200 dark:hover:bg-gray-500/50 w-9 aspect-square inline-flex items-center justify-center rounded-full"
						><FlowbiteBookOpenSolid
							font-size="1.15rem"
							class="text-gray-600 dark:text-neutral-200"
						/></a
					>
					<Popover
						hasIcon={false}
						isLabelInButton={true}
						popoverClasses="right-0 w-60"
						buttonClasses="rounded-full! p-0!"
					>
						{#snippet label()}
							<Avatar
								src="https://encrypted-tbn0.static.com/images?q=tbn:ANd9GcQdGagNnhzKI9hoJDmtWyHFlrn-9179AK5rIg&s"
								name="Quang Huy"
								classes="size-8!"
							/>
						{/snippet}
						{#snippet popoverContent()}
							<div class="p-4">
								<h3
									class="text-lg font-semibold"
								>
									User
									Profile
								</h3>
								<p
									class="text-sm text-gray-500"
								>
									Manage
									your
									account
									settings
									and set
									email
									preferences.
								</p>
								<a
									href="/profile"
									class="block mt-2 text-blue-600 hover:underline"
									>View
									Profile</a
								>
							</div>
						{/snippet}
					</Popover>
				</li>
			</ul>
		</div>
	</nav>
</header>
