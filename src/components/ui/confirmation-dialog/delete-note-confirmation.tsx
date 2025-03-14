import { useStoreActions } from '@/stores';
import { DialogRootProps } from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import { FC } from 'react';
import { Stack } from 'styled-system/jsx';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { IconButton } from '../icon-button';

export interface DeleteNoteConfirmationProps extends DialogRootProps {
    noteId: string;
}

export const DeleteNoteConfirmation: FC<DeleteNoteConfirmationProps> = ({
    noteId,
    children,
    ...props
}) => {
    const { deleteNote } = useStoreActions();

    return (
        <Dialog.Root {...props}>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content>
                    <Stack gap="8" p="6">
                        <Stack gap="1">
                            <Dialog.Title>delete note</Dialog.Title>
                            <Dialog.Description>are you sure you wanna proceed?</Dialog.Description>
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
                                onClick={() => deleteNote(noteId)}
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
        </Dialog.Root>
    );
};
