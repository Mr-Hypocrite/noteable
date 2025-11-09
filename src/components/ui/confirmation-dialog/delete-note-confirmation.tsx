import { useAppStoreActions, useNoteStoreActions } from '@/stores';
import { DialogRootProps, Portal } from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import { FC, useId } from 'react';
import { Stack } from 'styled-system/jsx';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { IconButton } from '../icon-button';
import { Tooltip } from '../tooltip';

export interface DeleteNoteConfirmationProps extends DialogRootProps {
    noteId: string;
    selected?: boolean;
}

export const DeleteNoteConfirmation: FC<DeleteNoteConfirmationProps> = ({
    noteId,
    selected,
    children,
    ...props
}) => {
    const trigger = useId();
    const { deleteNote } = useNoteStoreActions();
    const { deselectNotes } = useAppStoreActions();

    const handleDeleteNote = (noteIds: string[]) => {
        deselectNotes(noteIds);
        deleteNote(noteIds[0]);
    };

    return (
        <Dialog.Root ids={{ trigger }} {...props}>
            <Tooltip.Root ids={{ trigger }}>
                <Dialog.Trigger asChild>
                    <Tooltip.Trigger asChild>
                        <IconButton
                            size={{ base: 'sm', md: 'md' }}
                            colorPalette={'emerald'}
                            {...props}
                        >
                            {children}
                        </IconButton>
                    </Tooltip.Trigger>
                </Dialog.Trigger>
                <Portal>
                    <Tooltip.Positioner>
                        <Tooltip.Content>delete</Tooltip.Content>
                    </Tooltip.Positioner>
                </Portal>
            </Tooltip.Root>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Stack gap="8" p="6">
                            <Stack gap="1">
                                <Dialog.Title>delete note</Dialog.Title>
                                <Dialog.Description>
                                    are you sure you wanna proceed?
                                </Dialog.Description>
                            </Stack>
                            <Stack gap="3" direction="row" width="full">
                                <Dialog.CloseTrigger asChild>
                                    <Button variant="outline" flexGrow={1}>
                                        cancel
                                    </Button>
                                </Dialog.CloseTrigger>
                                <Button
                                    colorPalette={'red'}
                                    flexGrow={1}
                                    onClick={() => handleDeleteNote([noteId])}
                                >
                                    yeet
                                </Button>
                            </Stack>
                        </Stack>
                        <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
                            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                                <XIcon />
                            </IconButton>
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
