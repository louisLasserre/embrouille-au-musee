import { writable } from 'svelte/store'
import type { IItemData } from './lib/items';

export const actualPaintingIndex = writable(0);

type TExploringMode = 'getItems' | 'placeItems'
export const exploringMode = writable<TExploringMode>("getItems");


export const items = writable<IItemData['id'][]>([]);
