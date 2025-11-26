import { INoteStore } from './store.interface';

export const getAllNotes = ({ notes }: INoteStore) => {
    return notes;
};

export const getSelectedNotes = ({ selectedNotes }: INoteStore) => {
    return selectedNotes;
};

export const getDeleteNoteIds = ({ deleteNoteIds }: INoteStore) => {
    return deleteNoteIds;
};

export const getEditNoteId = ({ editNoteId }: INoteStore) => {
    return editNoteId;
};

export const getNoteById = ({ notes }: INoteStore, id: string) => {
    return notes[id];
};
