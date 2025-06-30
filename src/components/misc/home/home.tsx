import { Header, Text } from '@/components';
import { DesktopActionBar, NotesGrid } from '@/components';
import { useGetNotes, useGetSelectedNotes } from '@/stores';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { InitContent } from './init-content';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    const allNotes = useGetNotes();
    const selectedNotes = useGetSelectedNotes();
    const pinnedNotes = allNotes.filter(({ pinned }) => pinned);
    const notes = allNotes.filter(({ pinned }) => !pinned);

    return (
        <>
            {allNotes.length > 0 ? (
                <>
                    <Header />
                    {pinnedNotes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} gap={'2'} mb={'8'}>
                            <Text
                                as={'h3'}
                                textAlign={{ base: 'center', lg: 'left' }}
                                fontWeight={'light'}
                                size={'md'}
                            >
                                pinned notes
                            </Text>
                            <NotesGrid notes={pinnedNotes} selectedNotes={selectedNotes} />
                        </Flex>
                    ) : null}
                    {notes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} gap={'2'} mb={'8'}>
                            <Text
                                as={'h3'}
                                textAlign={{ base: 'center', lg: 'left' }}
                                fontWeight={'light'}
                                size={'md'}
                            >
                                notes
                            </Text>
                            <NotesGrid notes={notes} selectedNotes={selectedNotes} />
                        </Flex>
                    ) : null}
                </>
            ) : (
                <InitContent />
            )}
            <DesktopActionBar />
        </>
    );
};
