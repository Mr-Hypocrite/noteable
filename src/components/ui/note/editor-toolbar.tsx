import { Editor } from '@tiptap/react';
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from 'lucide-react';
import { FC } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { IconButton, IconButtonProps } from '../icon-button';

export interface EditorToolbarProps {
    editor: Editor | null;
}

export const EditorToolbar: FC<EditorToolbarProps> = ({ editor }) => {
    return (
        <Flex {...editorToolbarContainerStyles}>
            <IconButton
                className={`${editor?.isActive('bold') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleBold().run()}
                {...commonIconButtonStyles}
            >
                <BoldIcon />
            </IconButton>
            <IconButton
                className={`${editor?.isActive('italic') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleItalic().run()}
                {...commonIconButtonStyles}
            >
                <ItalicIcon />
            </IconButton>
            <IconButton
                className={`${editor?.isActive('strike') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleStrike().run()}
                {...commonIconButtonStyles}
            >
                <StrikethroughIcon />
            </IconButton>
            <IconButton
                className={`${editor?.isActive('underline') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleUnderline().run()}
                {...commonIconButtonStyles}
            >
                <UnderlineIcon />
            </IconButton>
        </Flex>
    );
};

const editorToolbarContainerStyles: FlexProps = {
    flexDir: 'row',
    flexShrink: 0,
    gap: '1',
    overflowX: 'auto'
};

const commonIconButtonStyles: IconButtonProps = {
    size: 'xs',
    '&.active': {
        backgroundColor: 'colorPalette.emphasized'
    }
};
