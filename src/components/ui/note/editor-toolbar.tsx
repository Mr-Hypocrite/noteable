import { Editor } from '@tiptap/react';
import {
    BoldIcon,
    CodeIcon,
    ItalicIcon,
    ListIcon,
    MinusIcon,
    StrikethroughIcon,
    TextQuoteIcon,
    UnderlineIcon
} from 'lucide-react';
import { FC } from 'react';
import { Flex, FlexProps } from 'styled-system/jsx';
import { ToolbarButtonWrapper } from './editor-toolbar-button-wrapper';

export interface EditorToolbarProps {
    editor: Editor | null;
}

export const EditorToolbar: FC<EditorToolbarProps> = ({ editor }) => {
    return editor?.isFocused ? (
        <Flex {...editorToolbarContainerStyles}>
            <ToolbarButtonWrapper
                toolTipContent={'bold'}
                className={`${editor?.isActive('bold') ? 'active' : ''}`}
                onClick={() => {
                    editor?.chain()?.focus()?.toggleBold().run();
                }}
            >
                <BoldIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'italics'}
                className={`${editor?.isActive('italic') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleItalic().run()}
            >
                <ItalicIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'strike-through'}
                className={`${editor?.isActive('strike') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleStrike().run()}
            >
                <StrikethroughIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'underline'}
                className={`${editor?.isActive('underline') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleUnderline().run()}
            >
                <UnderlineIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'blockquote'}
                className={`${editor?.isActive('blockquote') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleBlockquote().run()}
            >
                <TextQuoteIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'bulletlist'}
                className={`${editor?.isActive('bulletlist') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleBulletList().run()}
            >
                <ListIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'codeblock'}
                className={`${editor?.isActive('codeblock') ? 'active' : ''}`}
                onClick={() => editor?.chain()?.focus()?.toggleCodeBlock().run()}
            >
                <CodeIcon />
            </ToolbarButtonWrapper>
            <ToolbarButtonWrapper
                toolTipContent={'horizontalrule'}
                className={`${editor?.isActive('horizontalrule') ? 'active' : ''}`}
                onClick={() => editor?.commands.setHorizontalRule}
            >
                <MinusIcon />
            </ToolbarButtonWrapper>
        </Flex>
    ) : null;
};

const editorToolbarContainerStyles: FlexProps = {
    flexDir: 'row',
    flexShrink: 0,
    gap: '1',
    overflowX: 'auto',
    md: {
        customScrollBar: 'something'
    }
};
