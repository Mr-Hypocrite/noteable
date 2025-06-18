import { devtools, persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IAppStore, INoteStore } from './store.interface';

export const useNoteStore = createWithEqualityFn<INoteStore>()(
    devtools(
        persist(
            (_set) => ({
                notes: {}
            }),
            {
                name: 'noteable-notes-store'
            }
        ),
        { name: 'noteable-notes-store' }
    ),
    shallow
);

export const useAppStore = createWithEqualityFn<IAppStore>()(
    devtools(
        (_set) => ({
            selectedNotes: []
        }),

        { name: 'noteable-app-store' }
    ),
    shallow
);
