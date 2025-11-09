import { useAppStore } from '@/stores';
import { FC } from 'react';
import { CreateNote } from '../note-action-buttons';
import { BulkActionsMenu } from './bulk-actions-menu';

export interface BulkActionMenuWrapperProps {}

export const BulkActionMenuWrapper: FC<BulkActionMenuWrapperProps> = () => {
    const { selectedNotes } = useAppStore();

    return selectedNotes.length > 0 ? (
        <BulkActionsMenu selectedNotes={selectedNotes} />
    ) : (
        <CreateNote
            size={{ base: 'xs', lg: 'md' }}
            visibility={{ base: 'visible', lg: 'hidden' }}
        />
    );
};
