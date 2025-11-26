import { FC, PropsWithChildren, ReactNode } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { Tooltip } from '../tooltip';
import { Portal } from '@ark-ui/react';

export interface NoteActionBtnProps extends PropsWithChildren, IconButtonProps {
    tooltipContent?: ReactNode;
}

export const NoteActionBtn: FC<NoteActionBtnProps> = ({ tooltipContent, children, ...props }) => {
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <IconButton size={{ base: 'sm', md: 'md' }} colorPalette={'emerald'} {...props}>
                    {children}
                </IconButton>
            </Tooltip.Trigger>
            <Portal>
                <Tooltip.Positioner>
                    <Tooltip.Content>{tooltipContent}</Tooltip.Content>
                </Tooltip.Positioner>
            </Portal>
        </Tooltip.Root>
    );
};
