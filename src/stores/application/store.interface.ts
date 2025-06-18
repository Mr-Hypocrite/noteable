import { INote, INoteModifiableContents } from '@/utils/interfaces';
import { Draft } from 'immer';

export interface INoteActions {
    createNote: (note: Partial<INoteModifiableContents>) => void;
    editNote: (id: string, note: Partial<INoteModifiableContents>) => void;
    deleteNote: (id: string) => void;
    deleteNotes: (ids: string[]) => void;
    togglePinNote: (id: string) => void;
    pinNotes: (ids: string[]) => void;
}

export interface INoteState {
    notes: Record<string, INote>;
}

export interface INoteStore extends INoteState {}

export type INoteStoreSetter = (updater: (draft: Draft<INoteStore>) => void) => void;

export interface IAppActions {
    setSelectedNotes: (notes: string[]) => void;
    toggleSelectedNotes: (notes: string[]) => void;
}

export interface IAppState {
    selectedNotes: string[];
}

export interface IAppStore extends IAppState {}

export type IAppStoreSetter = (updater: (draft: Draft<IAppStore>) => void) => void;
