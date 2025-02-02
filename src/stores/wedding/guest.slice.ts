import { StateCreator } from 'zustand';

export interface GuestSlice {
    guestCount: number;

    setGuestCount: (count: number) => void
}


export const createGuestBoundSlice: StateCreator<GuestSlice> = (set) => ({
    guestCount: 0,
    setGuestCount: (count: number) => set({ guestCount: Math.max(0, count) })
})