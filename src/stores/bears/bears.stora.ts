import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customFireBaseStora } from '../storages/firebase.storages';

interface Bear {
    id: number;
    name: string;
    type: string;
}

const typeBear = ['Black Bears', 'Polar Bears', 'Panda Bears']
interface BearStore {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    totalBears: () => number;



    bears: Bear[];


    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;
    removeAllBears: () => void;
    addBear: () => void;
    clearBears: () => void;
}

export const userBearStore = create<BearStore>()(

    devtools(
        persist(
            (set, get) => ({
                blackBears: 10,
                polarBears: 5,
                pandaBears: 1,
                bears: [],
                totalBears() {
                    return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
                },

                increaseBlackBears: (by: number) => set((states) => ({ blackBears: states.blackBears + by }), false, 'blackBears'),
                increasePolarBears: (by: number) => set((states) => ({ polarBears: states.polarBears + by }), false, 'polarBears'),
                increasePandaBears: (by: number) => set((states) => ({ pandaBears: states.pandaBears + by }), false, 'pandaBears'),
                removeAllBears: () => set({ blackBears: 0, polarBears: 0, pandaBears: 0 }),
                addBear: () => {
                    const bear = typeBear[Math.floor(Math.random() * typeBear.length)];
                    const newBear = bear.split(' ');
                    set((state) => ({
                        bears: [
                            ...state.bears,
                            { id: state.bears.length + 1, name: 'New Bear ' + newBear[0], type: bear }]
                    }))
                },
                clearBears: () => set({ bears: [] })
            }),
            {
                name: 'bear-storage',
                storage: customFireBaseStora
            }
        )
    )

)