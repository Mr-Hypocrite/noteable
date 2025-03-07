import { CreateNote, Header, Text } from '@/components';
import { NotesGrid, ThemeMode } from '@/components/ui';
import { useGetNotes } from '@/stores';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { InitContent } from './init-content';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    const notes = useGetNotes();
    const pinnedNotes = useGetNotes({ pinned: true });

    return (
        <>
            {notes.length > 0 || pinnedNotes.length > 0 ? (
                <>
                    <Header />
                    {pinnedNotes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} gap={'4'} mb={'8'}>
                            <Text as={'h3'} fontWeight={'light'} size={'md'}>
                                pinned notes:
                            </Text>
                            <NotesGrid notes={pinnedNotes} />
                        </Flex>
                    ) : null}
                    {notes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} gap={'4'} mb={'8'}>
                            <Text as={'h3'} fontWeight={'light'} size={'md'}>
                                notes:
                            </Text>
                            <NotesGrid notes={notes} />
                        </Flex>
                    ) : null}
                </>
            ) : (
                <InitContent />
            )}
            <Flex
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
        </>
    );
};
