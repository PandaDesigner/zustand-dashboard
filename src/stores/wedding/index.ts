import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { createGuestBoundSlice, GuestSlice } from './guest.slice';
import { createDateBoundSlice, DateSlice } from './date.slice';
import { crateConfimationSlice, ConfirmationType } from './confimation.slice';

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationType;

export const useWeddingBoundStore = create<ShareState>()(
    devtools((...a) => ({
        ...createPersonSlice(...a),
        ...createGuestBoundSlice(...a),
        ...createDateBoundSlice(...a),
        ...crateConfimationSlice(...a),
    }))
);