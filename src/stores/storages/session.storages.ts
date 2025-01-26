import { createJSONStorage, StateStorage } from 'zustand/middleware';


const storageApi: StateStorage = {
    getItem: function (name: string): string | null | Promise<string | null> {
        const data = sessionStorage.getItem(name);
        return data;
    },
    setItem: function (name: string, value: string): unknown | Promise<unknown> {
        sessionStorage.setItem(name, value);
        return
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log('removeItem', name);
        return
    }
}

export const customStora = createJSONStorage(() => storageApi)