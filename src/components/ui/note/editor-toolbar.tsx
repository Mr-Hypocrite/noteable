import { Editor } from '@tiptap/react';
import { BoldIcon, ItalicIcon } from 'lucide-react';
import { FC } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { IconButton } from '../icon-button';

export interface EditorToolbarProps {
    editor: Editor | null;
}

export const EditorToolbar: FC<EditorToolbarProps> = ({ editor }) => {
    return (
        <Flex {...editorToolbarContainerStyles}>
            <IconButton size={'xs'} onClick={() => editor?.chain()?.focus()?.toggleBold().run()}>
                <BoldIcon />
            </IconButton>
            <IconButton size={'xs'} onClick={() => editor?.chain()?.focus()?.toggleItalic().run()}>
                <ItalicIcon />
            </IconButton>
        </Flex>
    );
};

const editorToolbarContainerStyles: FlexProps = {
    bottom: '4',
    flexDir: 'row',
    gap: '1',
    overflowX: 'auto',
    pos: 'absolute'
};
