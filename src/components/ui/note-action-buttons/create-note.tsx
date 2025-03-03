import { INoteModifiableContents } from '@/utils';
import { PlusIcon } from 'lucide-react';
import { FC } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { Tooltip } from '../tooltip';

export interface CreateNoteProps extends IconButtonProps, Partial<INoteModifiableContents> {}

export const CreateNote: FC<CreateNoteProps> = ({ ...props }) => {
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <IconButton {...props}>
                    <PlusIcon />
                </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>create Note</Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    );
};
