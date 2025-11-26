import {
    DeleteNoteConfirmation,
    DesktopActionBar,
    Header,
    NoteEditorDialog,
    NotesGrid,
    Text
} from '@/components';
import { useNoteStore } from '@/stores';
import { getAllNotes, getSelectedNotes } from '@/stores/application/selectors';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { InitContent } from './init-content';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    const allNotes = Object.values(useNoteStore(getAllNotes));
    const selectedNotes = useNoteStore(getSelectedNotes);
    const pinnedNotes = allNotes.filter(({ pinned }) => pinned);
    const notes = allNotes.filter(({ pinned }) => !pinned);

    return (
        <>
            {allNotes.length > 0 ? (
                <>
                    <Header />
                    {pinnedNotes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} mb={'8'}>
                            <Text
                                as={'h3'}
                                textAlign={{ base: 'left' }}
                                fontWeight={'light'}
                                size={'md'}
                                mt={{ base: '4', md: 0 }}
                            >
                                pinned notes
                            </Text>
                            <NotesGrid notes={pinnedNotes} selectedNotes={selectedNotes} />
                        </Flex>
                    ) : null}
                    {notes.length > 0 ? (
                        <Flex w={'full'} direction={'column'} mb={'8'}>
                            <Text
                                as={'h3'}
                                textAlign={{ base: 'left' }}
                                fontWeight={'light'}
                                size={'md'}
                                mt={{ base: '4', md: 0 }}
                            >
                                notes
                            </Text>
                            <NotesGrid notes={notes} selectedNotes={selectedNotes} />
                        </Flex>
                    ) : null}
                    <DeleteNoteConfirmation />
                    <NoteEditorDialog />
                </>
            ) : (
                <InitContent />
            )}
            {allNotes.length > 0 && <DesktopActionBar />}
        </>
    );
};
