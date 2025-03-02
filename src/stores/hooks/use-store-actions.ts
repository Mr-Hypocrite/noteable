import { useMemo } from 'react';
import { useApplicationStoreSetter } from './setters';
import { INoteActions, storeActions } from '../application';

export const useStoreActions = () => {
    const set = useApplicationStoreSetter();
    return useMemo((): INoteActions => {
        return {
            ...storeActions(set)
        };
    }, [set]);
};
