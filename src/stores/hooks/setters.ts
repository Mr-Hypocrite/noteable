import { Draft, produce } from 'immer';
import { useCallback } from 'react';
import { INoteStore, useAppStore } from '../application';

export const useApplicationStoreSetter = () => {
    const storeSetState = useAppStore.setState;

    return useCallback(
        (updater: (draft: Draft<INoteStore>) => void) => {
            storeSetState(produce(updater));
        },
        [storeSetState]
    );
};
