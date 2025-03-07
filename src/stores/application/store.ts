import { devtools, persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { INoteStore } from './store.interface';

export const useAppStore = createWithEqualityFn<INoteStore>()(
    devtools(
        persist(
            (_set) => ({
                notes: {}
            }),
            {
                name: 'noteable-notes-store'
            }
        ),
        { name: 'noteable-app-store' }
    ),
    shallow
);
