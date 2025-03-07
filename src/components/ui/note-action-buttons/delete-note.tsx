import { Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { Tooltip } from '../tooltip';

export interface DeleteNoteProps extends IconButtonProps {
    noteId: string;
}

export const DeleteNote: FC<DeleteNoteProps> = ({ noteId, ...props }) => {
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <IconButton {...props}>
                    <Trash2Icon />
                </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>delete</Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    );
};
