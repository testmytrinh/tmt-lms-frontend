import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const theme = writable<Theme>('light');

if (browser) {
	const saved = localStorage.getItem('theme') as Theme;
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const initial = saved ?? (prefersDark ? 'dark' : 'light');
	theme.set(initial);

	theme.subscribe((t) => {
		document.documentElement.classList.toggle('dark', t === 'dark');
		localStorage.setItem('theme', t);
	});
}

export { theme };

