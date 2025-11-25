import { useNoteStoreActions } from '@/stores';
import { INote } from '@/utils';
import { CheckIcon, PinIcon, PinOffIcon, Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { NoteActionBtn } from './note-action-btn';

export interface NoteActionsProps extends Pick<INote, 'pinned' | 'id'> {
    selected: boolean;
    hoverState: boolean;
}

export const NoteActions: FC<NoteActionsProps> = ({ id, pinned, selected, hoverState }) => {
    const { togglePinNote, toggleSelectedNotes, setDeleteNoteIds } = useNoteStoreActions();

    return (
        <>
            {(selected || hoverState) && (
                <NoteActionBtn
                    size={{ base: 'xs', md: 'md' }}
                    data-state-selected={selected}
                    className={selectBtnStyles}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleSelectedNotes([id]);
                    }}
                    tooltipContent={<>select</>}
                >
                    <CheckIcon />
                </NoteActionBtn>
            )}
            {hoverState && (
                <Flex className={actionsCollectionStyles}>
                    <NoteActionBtn
                        size={{ base: 'xs', md: 'md' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePinNote(id);
                        }}
                        tooltipContent={<>pin</>}
                    >
                        {pinned ? <PinOffIcon /> : <PinIcon />}
                    </NoteActionBtn>
                    <NoteActionBtn
                        size={{ base: 'xs', md: 'md' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setDeleteNoteIds([id]);
                        }}
                        tooltipContent={<>delete</>}
                    >
                        <Trash2Icon />
                    </NoteActionBtn>
                </Flex>
            )}
        </>
    );
};

const actionsCollectionStyles = css({
    flexDir: { base: 'row', lg: 'column' },
    gap: '2',
    pos: 'absolute',
    pointerEvents: 'all',
    bottom: { base: '-4', lg: '4' },
    right: { base: '-1', lg: '-6' }
});

const selectBtnStyles = css({
    pos: 'absolute',
    pointerEvents: 'all',
    top: { base: '-4', lg: '4' },
    right: { base: '-1', lg: '-6' },
    visibility: 'visible',
    "&[data-state-selected='true']": {
        bgColor: 'emerald.7'
    }
});
