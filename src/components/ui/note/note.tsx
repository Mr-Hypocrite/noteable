import { useStoreActions } from '@/stores';
import { INote } from '@/utils';
import { FC } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { IconButtonProps } from '../icon-button';
import { DeleteNote, PinNote } from '../note-action-buttons';
import { NoteEditableTitle } from './note-editable-title';

export interface NoteProps extends INote {}

export const Note: FC<NoteProps> = ({ id, created_at, pinned, noteTitle, noteContent }) => {
    const { togglePinNote, deleteNote, editNote } = useStoreActions();

    return (
        <Flex id={id} className="group" {...noteStyles}>
            <NoteEditableTitle
                inputProps={{
                    onChange: (event) => editNote(id, { noteTitle: event.target.value })
                }}
                value={noteTitle}
            />
            <PinNote
                {...noteActionBtnCommonStyles}
                onClick={() => togglePinNote(id)}
                pinned={pinned}
                noteId={id}
                top={'-2'}
            />
            <DeleteNote
                {...noteActionBtnCommonStyles}
                onClick={() => deleteNote(id)}
                noteId={id}
                bottom={'-2'}
            />
        </Flex>
    );
};

const noteStyles: FlexProps = {
    bgColor: { base: 'emerald.3', _hover: 'emerald.4' },
    color: { base: 'fg.default' },
    gap: '1',
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
    _groupHover: {
        visibility: 'visible'
    },
    colorPalette: 'emerald',
    position: 'absolute',
    right: '-2'
};
