import { FC } from 'react';
import { Button } from '../button';
import { Text } from '../text';
import { Flex } from 'styled-system/jsx';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    return (
        <Flex
            backgroundColor={'inherit'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'sticky'}
            top={'0'}
            left={'0'}
            zIndex={'sticky'}
        >
            <Button variant={'link'} my={'4'} mx={'auto'} asChild>
                <a href="/">
                    <Text as={'h1'} size={{ base: '2xl' }} fontWeight={'light'}>
                        noteable
                    </Text>
                </a>
            </Button>
        </Flex>
    );
};
