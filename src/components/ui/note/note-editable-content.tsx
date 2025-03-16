import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { EditorToolbar } from './editor-toolbar';

const extensions = [
    StarterKit,
    Placeholder.configure({
        placeholder: 'content'
    }),
    Underline
];

export interface EditableContentProps {
    noteContent: string;
    onChange: (content: string) => void;
}

export const EditableContent: FC<EditableContentProps> = ({ noteContent, onChange }) => {
    const editor = useEditor({
        extensions,
        content: noteContent,
        onUpdate(props) {
            onChange(props.editor.getHTML());
        }
    });

    return (
        <>
            <EditorContent
                className={css({
                    overflowY: 'auto',
                    scrollbar: 'hidden',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                })}
                editor={editor}
                placeholder="content"
                defaultValue={'content'}
            />
            <EditorToolbar editor={editor} />
        </>
    );
};
