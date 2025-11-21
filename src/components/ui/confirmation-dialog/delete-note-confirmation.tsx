import { getDeleteNoteIds, useNoteStore, useNoteStoreActions } from '@/stores';
import { DialogRootProps, Portal } from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import { FC, useId } from 'react';
import { Stack } from 'styled-system/jsx';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { IconButton } from '../icon-button';

export interface DeleteNoteConfirmationProps extends DialogRootProps {}

export const DeleteNoteConfirmation: FC<DeleteNoteConfirmationProps> = ({ ...props }) => {
    const trigger = useId();
    const { deleteNotes, deselectNotes, setDeleteNoteIds } = useNoteStoreActions();
    const deleteNoteIds = useNoteStore(getDeleteNoteIds);

    const handleDeleteNote = (noteIds: string[]) => {
        deselectNotes(noteIds);
        setDeleteNoteIds([]);
        deleteNotes(noteIds);
    };

    return (
        <Dialog.Root
            ids={{ trigger }}
            open={deleteNoteIds.length > 0}
            onOpenChange={(e) => {
                if (!e.open) {
                    setDeleteNoteIds([]);
                }
            }}
            {...props}
        >
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
                                    onClick={() => handleDeleteNote(deleteNoteIds)}
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
