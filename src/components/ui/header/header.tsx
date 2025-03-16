import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { Button } from '../button';
import { CreateNote } from '../note-action-buttons';
import { Text } from '../text';
import { ThemeMode } from '../theme-mode';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    return (
        <Flex
            backgroundColor={'emerald.1'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'sticky'}
            top={'0'}
            left={'0'}
            zIndex={'sticky'}
        >
            <ThemeMode
                size={{ base: 'xs', lg: 'md' }}
                visibility={{ base: 'visible', lg: 'hidden' }}
            />
            <Button variant={'link'} my={'4'} mx={'auto'} asChild>
                <a href="/">
                    <Text as={'h1'} size={{ base: '2xl' }} fontWeight={'light'}>
                        noteable
                    </Text>
                </a>
            </Button>
            <CreateNote
                size={{ base: 'xs', lg: 'md' }}
                visibility={{ base: 'visible', lg: 'hidden' }}
            />
        </Flex>
    );
};
