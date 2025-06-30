import { useNoteStoreActions } from '@/stores';
import { INote } from '@/utils';
import debounce from 'debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { NoteActions } from './note-actions';
import { EditableContent } from './note-editable-content';
import { NoteEditableTitle } from './note-editable-title';

export interface NoteProps extends INote {
    selected: boolean;
}

export const Note: FC<NoteProps> = ({ id, pinned, noteTitle, noteContent, selected }) => {
    const { editNote } = useNoteStoreActions();
    const [localNoteTitle, setLocalNoteTitle] = useState(noteTitle);
    const [localNoteContent, setLocalNoteContent] = useState(noteContent);
    const [hoverState, setHoverState] = useState(false);
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
        <Flex
            id={id}
            className="group"
            onMouseOver={() => setHoverState(true)}
            onMouseOut={() => setHoverState(false)}
            {...noteStyles}
        >
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
            <NoteActions id={id} pinned={pinned} selected={selected} hoverState={hoverState} />
        </Flex>
    );
};

const noteStyles: FlexProps = {
    bgColor: { base: 'emerald.3', _hover: 'emerald.4' },
    color: { base: 'fg.default' },
    gap: '2',
    transition: 'background',
    transitionDuration: 'normal',
    transitionTimingFunction: 'ease-in-out',
    borderRadius: 'md',
    direction: 'column',
    aspectRatio: '2/3',
    h: 'auto',
    p: '4',
    position: 'relative'
};
