import { v4 as uuid } from 'uuid';
import { IAppActions, IAppStoreSetter, INoteActions, INoteStoreSetter } from './store.interface';

export const noteStoreActions = (set: INoteStoreSetter): INoteActions => {
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
        deleteNotes: (_ids) =>
            set(({ notes }) => {
                _ids.forEach((id) => {
                    delete notes[id];
                });
            }),
        pinNotes: (_ids) => set(({}) => {})
    };
};

export const appStoreActions = (set: IAppStoreSetter): IAppActions => {
    return {
        setSelectedNotes(noteIds) {
            set(({ selectedNotes }) => {
                const selectedNotesSet = new Set(selectedNotes);
                noteIds.forEach((noteId) => {
                    selectedNotesSet.add(noteId);
                });
                return { selectedNotes: Array.from(selectedNotesSet) };
            });
        },
        deselectNotes(noteIds) {
            set(({ selectedNotes }) => {
                const selectedNotesSet = new Set(selectedNotes);
                noteIds.forEach((noteId) => {
                    selectedNotesSet.delete(noteId);
                });
                return { selectedNotes: Array.from(selectedNotesSet) };
            });
        },
        toggleSelectedNotes(noteIds) {
            set(({ selectedNotes }) => {
                const selectedNotesSet = new Set(selectedNotes);
                noteIds.forEach((noteId) => {
                    if (selectedNotesSet.has(noteId)) {
                        selectedNotesSet.delete(noteId);
                    } else {
                        selectedNotesSet.add(noteId);
                    }
                });
                return { selectedNotes: Array.from(selectedNotesSet) };
            });
        }
    };
};
