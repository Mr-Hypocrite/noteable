import { Flex } from 'styled-system/jsx';
import { Text } from '@/components';

function App() {
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
}

export default App;
