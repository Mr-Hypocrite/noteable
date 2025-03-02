import { INoteActions, INoteStoreSetter } from './store.interface';
import { v4 as uuid } from 'uuid';

export const storeActions = (set: INoteStoreSetter): INoteActions => {
    return {
        createNote: (note) =>
            set(({ notes }) => {
                const noteId = uuid();
                notes[noteId] = {
                    id: noteId,
                    created_at: new Date(),
                    pinned: note.pinned ?? false,
                    title: note.title ?? '',
                    content: note.content ?? ''
                };
            }),
        editNote: (id, note) =>
            set(({ notes }) => {
                notes[id] = {
                    ...notes[id],
                    ...note
                };
            }),
        deleteNote: (id) =>
            set(({ notes }) => {
                delete notes[id];
            }),
        pinNote: (id) =>
            set(({ notes }) => {
                notes[id].pinned = true;
            }),
        deleteNotes: (ids) => set(({ notes }) => {}),
        pinNotes: (ids) => set(({ notes }) => {})
    };
};
