import { create } from 'zustand';

interface BearStore {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
}

export const userBearStore = create<BearStore>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    incrementPopulation: (by: number) => set((states) => ({ blackBears: states.blackBears + by })),
    removeAllBears: () => set({ blackBears: 0, polarBears: 0, pandaBears: 0 })
}))