import { writable } from 'svelte/store';

export type SidebarState = 'open' | 'closed';

export const sidebarState = writable<SidebarState>('open');

export const toggleSidebar = () => {
    sidebarState.update((state) => (state === 'open' ? 'closed' : 'open'));
};