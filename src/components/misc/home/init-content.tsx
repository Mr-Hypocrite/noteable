import { Text } from '@/components';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';

export interface InitContentProps {}

export const InitContent: FC<InitContentProps> = () => {
    return (
        <Flex
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            w={'full'}
            minH={'screen'}
            gap={'2'}
        >
            <Text as={'h1'} size={{ base: '3xl' }} fontWeight={'light'}>
                noteable
            </Text>
            <Text as={'p'} size={{ base: 'sm' }} maxW={{ base: 'xs' }} textAlign={'center'}>
                capture, organize, and remember – your thoughts, your way.
            </Text>
        </Flex>
    );
};
