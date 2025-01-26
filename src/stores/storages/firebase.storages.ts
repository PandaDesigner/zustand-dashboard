import { createJSONStorage, StateStorage } from 'zustand/middleware';

const firebaseURL = 'https://zustand-storages-proyect-default-rtdb.firebaseio.com/zustand';


const firebaseStorageApi: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {

        try {
            const data = await fetch(`${firebaseURL}/${name}.json`).then(res => res.json());
            console.log(data);
            return JSON.stringify(data);
        } catch (error) {
            throw new Error('Error fetching data');
        }

    },
    setItem: async function (name: string, value: string): Promise<unknown> {
        await fetch(`${firebaseURL}/${name}.json`, {
            method: 'PUT',
            body: value
        }).then(res => res.json());
        console.count('setItem');
        return;
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log('removeItem', name);
        return
    }
}

export const customFireBaseStora = createJSONStorage(() => firebaseStorageApi)