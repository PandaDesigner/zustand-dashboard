import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';



type ShareState = PersonSlice;

export const useWSeddingBoundStore = create<ShareState>()((...a) => ({
    ...createPersonSlice(...a)
})
);