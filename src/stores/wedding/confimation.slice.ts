import { StateCreator } from 'zustand'

export interface Confirmation {
    isConfirmed: boolean
}

export interface Action {
    setIsConfirmed: (value: boolean) => void
}


export type ConfirmationType = Confirmation & Action

export const crateConfimationSlice: StateCreator<ConfirmationType> = (set) => ({

    isConfirmed: false,
    setIsConfirmed: (value: boolean) => set({ isConfirmed: value })

})