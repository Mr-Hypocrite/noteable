import { useStoreActions } from '@/stores';
import { INote } from '@/utils';
import debounce from 'debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { IconButtonProps } from '../icon-button';
import { DeleteNote, PinNote } from '../note-action-buttons';
import { EditableContent } from './note-editable-content';
import { NoteEditableTitle } from './note-editable-title';
import { DeleteNoteConfirmation } from '../confirmation-dialog';

export interface NoteProps extends INote {}

export const Note: FC<NoteProps> = ({ id, pinned, noteTitle, noteContent }) => {
    const { togglePinNote, deleteNote, editNote } = useStoreActions();
    const [localNoteTitle, setLocalNoteTitle] = useState(noteTitle);
    const [localNoteContent, setLocalNoteContent] = useState(noteContent);
    const debouncedEditNote = useCallback(
        debounce((id: string, _noteTitle: string) => editNote(id, { noteTitle: _noteTitle }), 500),
        [id]
    );
    const debouncedEditContent = useCallback(
        debounce((id: string, _noteContent) => editNote(id, { noteContent: _noteContent }), 500),
        [id]
    );

    useEffect(() => {
        debouncedEditNote(id, localNoteTitle);
    }, [localNoteTitle]);

    useEffect(() => {
        debouncedEditContent(id, localNoteContent);
    }, [localNoteContent]);

    return (
        <Flex id={id} className="group" {...noteStyles}>
            <NoteEditableTitle
                inputProps={{
                    onChange: (event) => setLocalNoteTitle(event.target.value)
                }}
                value={localNoteTitle}
            />
            <EditableContent
                noteContent={localNoteContent}
                onChange={(value) => setLocalNoteContent(value)}
            />
            <PinNote
                {...noteActionBtnCommonStyles}
                onClick={() => togglePinNote(id)}
                pinned={pinned}
                noteId={id}
                top={{ base: '0', md: '-2' }}
            />
            <DeleteNoteConfirmation noteId={id}>
                <DeleteNote {...noteActionBtnCommonStyles} bottom={{ base: '0', md: '-2' }} />
            </DeleteNoteConfirmation>
        </Flex>
    );
};

const noteStyles: FlexProps = {
    bgColor: { base: 'emerald.3', _hover: 'emerald.4' },
    color: { base: 'fg.default' },
    gap: '1',
    m: '2',
    transition: 'background',
    transitionDuration: 'normal',
    transitionTimingFunction: 'ease-in-out',
    borderRadius: 'md',
    direction: 'column',
    minH: 'sm',
    p: '4',
    position: 'relative'
};

const noteActionBtnCommonStyles: IconButtonProps = {
    visibility: 'hidden',
    size: { base: 'sm', md: 'md' },
    _groupHover: {
        visibility: 'visible'
    },
    colorPalette: 'emerald',
    position: 'absolute',
    right: { base: '0', md: '-2' }
};
