import { devtools, persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { INoteStore } from './store.interface';

export const useNoteStore = createWithEqualityFn<INoteStore>()(
    devtools(
        persist(
            (_set) => ({
                notes: {},
                selectedNotes: [],
                deleteNoteIds: [],
                editNoteId: ''
            }),
            {
                name: 'noteable-notes-store',
                partialize: (state) => ({
                    notes: state.notes
                })
            }
        ),
        { name: 'noteable-notes-store' }
    ),
    shallow
);
