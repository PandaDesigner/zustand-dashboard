import { StateCreator } from 'zustand';


export interface DateSlice {
    eventDate: Date;

    eventYYYYMMDD: () => string;
    eventHHMM: () => string;

    setEventDate: (parcialDalte: string) => void;
    setEventTime: (parcialTime: string) => void;

}


export const createDateBoundSlice: StateCreator<DateSlice> = (set, get) => ({

    eventDate: new Date(),

    eventYYYYMMDD: () => {
        return get().eventDate.toISOString().split('T')[0];
    },
    eventHHMM: () => {
        const hours = get().eventDate.getHours().toString().padStart(2, '0');
        const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    },
    setEventDate: (parcialDalte: string) => set((state) => {
        const date = new Date(parcialDalte);

        const year = date.getFullYear();
        const moth = date.getMonth();
        const day = date.getDay() + 1;

        const newDate = new Date(state.eventDate);
        newDate.setFullYear(year, moth, day);

        return { eventDate: newDate };
    }),

    setEventTime: (parcialTime: string) => set((state) => {
        const hours = parseInt(parcialTime.split(':')[0]);
        const minutes = parseInt(parcialTime.split(':')[1]);

        const newDate = new Date(state.eventDate)
        newDate.setHours(hours, minutes)
        return { eventDate: newDate }
    }),
});