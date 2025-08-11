<script lang="ts">
	import { ROUTES_ON_FOOTER } from "$lib/constants/route";

	type LinkGroup = {
		title: string;
		links: { label: string; path: string }[];
	};
	type Props = {
		groups?: LinkGroup[];
		copyrightOwner?: string;
	};
	const { groups = ROUTES_ON_FOOTER, copyrightOwner = "TMT LMS" }: Props =
		$props();

	const year = new Date().getFullYear();
</script>

<footer class="mt-32 border-t border-white/10 bg-neutral-950 text-neutral-300">
	<div
		class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-4"
	>
		<div>
			<h3
				class="text-lg font-semibold tracking-tight text-white"
			>
				{copyrightOwner}
			</h3>
			<p
				class="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs"
			>
				A modern learning platform focused on deep skill
				acquisition through real projects and guided
				practice.
			</p>
		</div>
		{#each groups as g}
			<div>
				<p
					class="text-xs uppercase tracking-wide font-semibold text-neutral-400"
				>
					{g.title}
				</p>
				<ul class="mt-4 space-y-2 text-sm">
					{#each g.links as l}
						<li>
							<a
								href={l.path}
								class="hover:text-white transition-colors"
								>{l.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div
		class="border-t border-white/10 py-6 text-xs text-neutral-500 text-center px-4"
	>
		<p>This site is maintained by anui</p>
	</div>
</footer>
