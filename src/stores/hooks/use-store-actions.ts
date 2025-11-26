import { useMemo } from 'react';
import { INoteActions, noteStoreActions } from '../application';
import { useNoteStoreSetter } from './setters';

export const useNoteStoreActions = () => {
    const set = useNoteStoreSetter();
    return useMemo((): INoteActions => {
        return {
            ...noteStoreActions(set)
        };
    }, [set]);
};
