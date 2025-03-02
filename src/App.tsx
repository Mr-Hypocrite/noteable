import { Flex } from 'styled-system/jsx';

function App() {
    return (
        <Flex
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            w={'full'}
            minH={'screen'}
        >
            <h1>noteable</h1>
            <p>capture, organize, and remember – your thoughts, your way.</p>
        </Flex>
    );
}

export default App;
