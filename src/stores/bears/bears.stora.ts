import { create } from 'zustand';

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
    computed: {
        totalBears: number
    };


    bears: Bear[];


    increaeBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;
    removeAllBears: () => void;
    addBear: () => void;
    clearBears: () => void;
}

export const userBearStore = create<BearStore>()((set, get) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    bears: [{ id: 1, name: 'Black Bear', type: 'blackBears' }, { id: 2, name: 'Polar Bear', type: 'polarBears' }, { id: 3, name: 'Panda Bear', type: 'pandaBears' }],

    computed: {
        get totalBears() {
            return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
        }
    },

    increaeBlackBears: (by: number) => set((states) => ({ blackBears: states.blackBears + by })),
    increasePolarBears: (by: number) => set((states) => ({ polarBears: states.polarBears + by })),
    increasePandaBears: (by: number) => set((states) => ({ pandaBears: states.pandaBears + by })),
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
}))