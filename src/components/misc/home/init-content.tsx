import { CreateNote, Text, ThemeMode } from '@/components';
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
            minH={'dvh'}
            gap={'2'}
        >
            <Text as={'h1'} size={{ base: '3xl' }} fontWeight={'light'}>
                noteable
            </Text>
            <Text as={'p'} size={{ base: 'sm' }} maxW={{ base: 'xs' }} textAlign={'center'}>
                capture, organize, and remember – your thoughts, your way.
            </Text>

            <Flex mt={'6'} gap={'2'}>
                <CreateNote showButtonText pl={'3'} pr={'4'} gap={'1'} alignItems={'center'} />
                <ThemeMode showButtonText pl={'3'} pr={'4'} gap={'1'} alignItems={'center'} />
            </Flex>
        </Flex>
    );
};
