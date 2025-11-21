import { Draft, produce } from 'immer';
import { useCallback } from 'react';
import { INoteStore, useNoteStore } from '../application';

export const useNoteStoreSetter = () => {
    const storeSetState = useNoteStore.setState;

    return useCallback(
        (updater: (draft: Draft<INoteStore>) => void) => {
            storeSetState(produce(updater));
        },
        [storeSetState]
    );
};
