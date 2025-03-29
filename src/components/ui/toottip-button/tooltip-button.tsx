import { FC, PropsWithChildren, ReactNode } from 'react';
import { Tooltip } from '../tooltip';

export interface ToolTipButtonProps extends PropsWithChildren {
    toolTipContent?: ReactNode | string;
}

export const ToolTipButton: FC<ToolTipButtonProps> = ({ toolTipContent, children }) => {
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>{toolTipContent}</Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    );
};
