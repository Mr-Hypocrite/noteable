import { PinIcon, PinOffIcon } from 'lucide-react';
import { FC } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { Tooltip } from '../tooltip';

export interface PinNoteProps extends IconButtonProps {
    noteId: string;
    pinned: boolean;
}

export const PinNote: FC<PinNoteProps> = ({ noteId, pinned = false, ...props }) => {
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <IconButton {...props}>{pinned ? <PinOffIcon /> : <PinIcon />}</IconButton>;
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>pin Note</Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    );
};
