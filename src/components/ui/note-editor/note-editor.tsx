import { getEditNoteId, useNoteStore, useNoteStoreActions } from '@/stores';
import { INote } from '@/utils';
import { DialogRootProps, Portal } from '@ark-ui/react';
import debounce from 'debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { Flex } from 'styled-system/jsx';
import { Dialog } from '../dialog';
import { EditableContent, NoteEditableTitle } from '../note';

const noteSelector =
    (editNoteId: string) =>
    ({ notes }: { notes: Record<string, INote> }) =>
        notes[editNoteId];

export interface NoteEditorDialogProps extends DialogRootProps {}

export const NoteEditorDialog: FC<NoteEditorDialogProps> = () => {
    const editNoteId = useNoteStore(getEditNoteId);
    const { editNote, setEditNoteId } = useNoteStoreActions();
    const note = useNoteStore(noteSelector(editNoteId));

    const [localNoteTitle, setLocalNoteTitle] = useState<string>(note?.noteTitle || '');
    const [localNoteContent, setLocalNoteContent] = useState<string | undefined>(
        note?.noteContent || ''
    );

    const debouncedEditNoteTitle = useCallback(
        debounce((noteId: string, noteTitle: string) => {
            editNote(noteId, {
                noteTitle
            });
        }, 100),
        []
    );
    const debouncedEditNoteContent = useCallback(
        debounce((noteId: string, noteContent: string | undefined) => {
            editNote(noteId, {
                noteContent
            });
        }, 100),
        []
    );

    useEffect(() => {
        if (!editNoteId) return;
        debouncedEditNoteTitle(editNoteId, localNoteTitle);
    }, [editNoteId, localNoteTitle]);

    useEffect(() => {
        if (!editNoteId) return;
        debouncedEditNoteContent(editNoteId, localNoteContent);
    }, [editNoteId, localNoteContent]);

    useEffect(() => {
        if (note) {
            setLocalNoteTitle(note.noteTitle || '');
            setLocalNoteContent(note.noteContent || '');
        }
    }, [editNoteId, note]);

    return (
        <Dialog.Root
            open={editNoteId !== ''}
            onOpenChange={(e) => {
                if (!e.open) {
                    setEditNoteId('');
                }
            }}
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content
                        p={'4'}
                        minW={'xl'}
                        maxW={'2xl'}
                        aspectRatio={'4/3'}
                        bgColor={'emerald.1'}
                    >
                        <Flex direction={'column'} gap={'2'} h={'full'}>
                            <NoteEditableTitle
                                inputProps={{
                                    autoFocus: true,
                                    onChange: (event) => {
                                        setLocalNoteTitle(event.target.value);
                                    }
                                }}
                                value={localNoteTitle}
                            />
                            <EditableContent
                                noteContent={localNoteContent}
                                editable={true}
                                onChange={(value) => setLocalNoteContent(value)}
                            />
                        </Flex>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
