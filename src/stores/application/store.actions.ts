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
                    noteTitle: note.noteTitle ?? '',
                    noteContent: note.noteContent ?? ''
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
        togglePinNote: (id) =>
            set(({ notes }) => {
                notes[id].pinned = !notes[id].pinned;
            }),
        deleteNotes: (ids) => set(({ notes }) => {}),
        pinNotes: (ids) => set(({ notes }) => {})
    };
};
