import { useMemo } from 'react';
import { appStoreActions, IAppActions, INoteActions, noteStoreActions } from '../application';
import { useAppStoreSetter, useNoteStoreSetter } from './setters';

export const useNoteStoreActions = () => {
    const set = useNoteStoreSetter();
    return useMemo((): INoteActions => {
        return {
            ...noteStoreActions(set)
        };
    }, [set]);
};

export const useAppStoreActions = () => {
    const set = useAppStoreSetter();
    return useMemo((): IAppActions => {
        return {
            ...appStoreActions(set)
        };
    }, [set]);
};
