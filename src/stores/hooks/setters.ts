import { Draft, produce } from 'immer';
import { useCallback } from 'react';
import { IAppStore, INoteStore, useAppStore, useNoteStore } from '../application';

export const useNoteStoreSetter = () => {
    const storeSetState = useNoteStore.setState;

    return useCallback(
        (updater: (draft: Draft<INoteStore>) => void) => {
            storeSetState(produce(updater));
        },
        [storeSetState]
    );
};

export const useAppStoreSetter = () => {
    const storeSetState = useAppStore.setState;

    return useCallback(
        (updater: (draft: Draft<IAppStore>) => void) => {
            storeSetState(produce(updater));
        },
        [storeSetState]
    );
};
