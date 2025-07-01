import { useAppStoreActions, useNoteStoreActions } from '@/stores';
import { INote } from '@/utils';
import { CheckIcon, PinIcon, PinOffIcon, Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Box, Flex } from 'styled-system/jsx';
import { DeleteNoteConfirmation } from '../confirmation-dialog';
import { NoteActionBtn } from './note-action-btn';

export interface NoteActionsProps extends Pick<INote, 'pinned' | 'id'> {
    selected: boolean;
    hoverState: boolean;
}

export const NoteActions: FC<NoteActionsProps> = ({ id, pinned, selected, hoverState }) => {
    const { togglePinNote } = useNoteStoreActions();
    const { toggleSelectedNotes } = useAppStoreActions();

    return (
        <Box className={noteActionsContainerStyles}>
            {(selected || hoverState) && (
                <NoteActionBtn
                    data-state-selected={selected}
                    className={selectBtnStyles}
                    onClick={() => toggleSelectedNotes([id])}
                    tooltipContent={<>select</>}
                >
                    <CheckIcon />
                </NoteActionBtn>
            )}
            <Flex className={actionsCollectionStyles}>
                <NoteActionBtn onClick={() => togglePinNote(id)} tooltipContent={<>pin</>}>
                    {pinned ? <PinOffIcon /> : <PinIcon />}
                </NoteActionBtn>
                <DeleteNoteConfirmation noteId={id}>
                    <Trash2Icon />
                </DeleteNoteConfirmation>
            </Flex>
        </Box>
    );
};

const noteActionsContainerStyles = css({
    pos: 'absolute',
    left: '0',
    top: '0',
    w: 'full',
    h: 'full',
    visibility: 'hidden',
    pointerEvents: 'none',
    _groupHover: {
        visibility: 'visible'
    }
});

const actionsCollectionStyles = css({
    flexDir: 'column',
    gap: '2',
    pos: 'absolute',
    pointerEvents: 'all',
    bottom: '4',
    right: '-6'
});

const selectBtnStyles = css({
    pos: 'absolute',
    pointerEvents: 'all',
    top: '4',
    right: '-6',
    visibility: 'visible',
    "&[data-state-selected='true']": {
        bgColor: 'emerald.7'
    }
});
