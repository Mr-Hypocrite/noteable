import { INoteModifiableContents } from '@/utils';
import { PlusIcon } from 'lucide-react';
import { FC } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { Tooltip } from '../tooltip';
import { useStoreActions } from '@/stores';

export interface CreateNoteProps extends IconButtonProps, Partial<INoteModifiableContents> {}

const newNote: Partial<INoteModifiableContents> = {
    noteTitle: '',
    noteContent: '',
    pinned: false
};

export const CreateNote: FC<CreateNoteProps> = ({ ...props }) => {
    const { createNote } = useStoreActions();
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <IconButton colorPalette={'emerald'} onClick={() => createNote(newNote)} {...props}>
                    <PlusIcon />
                </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>create</Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    );
};
