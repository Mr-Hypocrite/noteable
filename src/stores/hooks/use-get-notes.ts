import { useNoteStore } from '../application';

export const useGetNotes = () => {
    const notes = useNoteStore(({ notes }) => notes);

    return Object.values(notes);
};
