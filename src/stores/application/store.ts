import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { INoteStore } from './store.interface';

export const useAppStore = createWithEqualityFn<INoteStore>()(
    devtools(
        (_set) => ({
            notes: {}
        }),
        { name: 'noteable-app-store' }
    ),
    shallow
);
