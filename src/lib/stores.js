import { writable } from 'svelte/store';

export const menuActive = writable(false);
export const menuStore = {
	open: () => menuActive.set(true),
	close: () => menuActive.set(false)
};

export const modalActive = writable(false);
export const modalStore = {
	open: () => modalActive.set(true),
	close: () => modalActive.set(false)
};

export const currentCategory = writable('Все');
