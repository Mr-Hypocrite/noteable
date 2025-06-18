import { useAppStore } from '../application';

export const useGetSelectedNotes = () => {
    const selectedNotes = useAppStore(({ selectedNotes }) => selectedNotes);

    return selectedNotes;
};
