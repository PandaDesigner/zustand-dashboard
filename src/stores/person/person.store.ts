import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customFireBaseStora } from '../storages/firebase.storages';

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


export const usePersonStore = create<PersonStore & Actions, [['zustand/devtools', never], ['zustand/persist', PersonStore & Actions | unknown]]>(
    devtools(
        persist(
            storeAPI, {
            name: 'person-storage',
            storage: customFireBaseStora
        }
        )
    )
);