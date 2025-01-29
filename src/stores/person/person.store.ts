import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { customFireBaseStora } from '../storages/firebase.storages';
//import { logger } from '../middlewares';

interface PersonStore {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}

const storeAPI: StateCreator<PersonStore & Actions, [['zustand/devtools', never], ['zustand/persist', PersonStore & Actions | unknown]]> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (name: string) => set({ firstName: name }, false, 'firstName'),
    setLastName: (name: string) => set({ lastName: name }, false, 'lastName'),
})


export const usePersonStore = create<PersonStore & Actions, [['zustand/persist', PersonStore & Actions | unknown]]>(
    persist(
        storeAPI, {
        name: 'person-storage',
        storage: customFireBaseStora
    }
    )
);