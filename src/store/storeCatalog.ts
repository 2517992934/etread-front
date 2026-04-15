import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface StoreBookItem {
    localId: string;
    title: string;
    author?: string;
    coverPreviewUrl?: string;
    description?: string;
    createdAt: number;
}

const LS_KEY = 'store_catalog_items';

export const useStoreCatalog = defineStore('storeCatalog', () => {
    const items = ref<StoreBookItem[]>([]);

    function load() {
        const s = localStorage.getItem(LS_KEY);
        if (s) items.value = JSON.parse(s);
    }

    function persist() {
        localStorage.setItem(LS_KEY, JSON.stringify(items.value));
    }

    function add(item: Omit<StoreBookItem, 'localId' | 'createdAt'>) {
        const newItem: StoreBookItem = {
            localId: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            createdAt: Date.now(),
            ...item,
        };
        items.value.unshift(newItem);
        persist();
    }

    load();
    return { items, add };
});