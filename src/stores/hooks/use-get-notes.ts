import { useAppStore } from '../application';

interface IUseGetNotesProps {
    pinned?: boolean;
}

export const useGetNotes = ({ pinned }: IUseGetNotesProps = { pinned: false }) => {
    const { notes } = useAppStore(({ notes }) => ({ notes }));

    if (pinned) {
        return Object.values(notes).filter(({ pinned }) => pinned);
    } else {
        return Object.values(notes).filter(({ pinned }) => !pinned);
    }
};
