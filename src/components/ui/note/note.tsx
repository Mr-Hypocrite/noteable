import { useNoteStoreActions } from '@/stores';
import { INote } from '@/utils';
import { FC, useState } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { Text } from '../text';
import { NoteActions } from './note-actions';
import { EditableContent } from './note-editable-content';

export interface NoteProps extends INote {
    selected: boolean;
}

export const Note: FC<NoteProps> = ({ id, pinned, noteTitle, noteContent, selected }) => {
    const [hoverState, setHoverState] = useState(false);
    const { setEditNoteId } = useNoteStoreActions();

    return (
        <Flex
            id={id}
            className="group"
            cursor={'pointer'}
            onMouseOver={() => setHoverState(true)}
            onMouseOut={() => setHoverState(false)}
            onClick={() => setEditNoteId(id)}
            {...noteStyles}
        >
            <Text pointerEvents={'none'} textStyle={'noteTitle'}>
                {noteTitle || 'title'}
            </Text>
            <EditableContent
                noteContent={
                    noteContent !== '<p></p>' && noteContent !== '' ? noteContent : 'content'
                }
                editable={false}
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
    alignItems: 'start',
    aspectRatio: { base: '1/1.1', sm: '4/3' },
    h: 'auto',
    p: '4',
    position: 'relative'
};
