import { FC, PropsWithChildren, ReactNode } from 'react';
import { IconButton, IconButtonProps } from '../icon-button';
import { ToolTipButton } from '../toottip-button';

export interface ToolbarButtonWrapperProps extends IconButtonProps, PropsWithChildren {
    toolTipContent?: ReactNode | string;
}

export const ToolbarButtonWrapper: FC<ToolbarButtonWrapperProps> = ({
    toolTipContent,
    children,
    ...props
}) => {
    return (
        <ToolTipButton toolTipContent={toolTipContent ?? children}>
            <IconButton
                onMouseDown={(e) => {
                    e.preventDefault();
                }}
                {...commoniconbuttonstyles}
                {...props}
            >
                {children}
            </IconButton>
        </ToolTipButton>
    );
};

const commoniconbuttonstyles: IconButtonProps = {
    size: 'xs',
    '&.active': {
        backgroundColor: 'colorPalette.emphasized'
    }
};
