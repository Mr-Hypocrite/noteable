import { INote, INoteModifiableContents } from '@/utils/interfaces';
import { Draft } from 'immer';

export interface INoteActions {
    createNote: (note: Partial<INoteModifiableContents>) => void;
    editNote: (id: string, note: Partial<INoteModifiableContents>) => void;
    deleteNote: (id: string) => void;
    deleteNotes: (ids: string[]) => void;
    togglePinNote: (id: string) => void;
    pinNotes: (ids: string[]) => void;

    setSelectedNotes: (noteIds: string[]) => void;
    deselectNotes: (noteIds: string[]) => void;
    toggleSelectedNotes: (noteIds: string[]) => void;
    setEditNoteId: (noteId: string) => void;
    setDeleteNoteIds: (noteIds: string[]) => void;
}

export interface INoteState {
    notes: Record<string, INote>;
    selectedNotes: string[];
    deleteNoteIds: string[];
    editNoteId: string;
}

export interface INoteStore extends INoteState {}

export type INoteStoreSetter = (updater: (draft: Draft<INoteStore>) => void) => void;
