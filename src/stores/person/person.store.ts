import { create } from 'zustand';

interface PersonStore {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}


export const usePersonStore = create<PersonStore & Actions>((set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (name: string) => set({ firstName: name }),
    setLastName: (name: string) => set({ lastName: name }),
}));