import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { CreateNote } from './note-action-buttons';
import { ThemeMode } from './theme-mode';

export interface DesktopActionBarProps {}

export const DesktopActionBar: FC<DesktopActionBarProps> = () => {
    return (
        <Flex
            alignItems={'end'}
            direction={'column'}
            gap={'4'}
            pos={'fixed'}
            right={'6'}
            bottom={'6'}
            zIndex={'sticky'}
        >
            <ThemeMode />
            <CreateNote />
        </Flex>
    );
};
