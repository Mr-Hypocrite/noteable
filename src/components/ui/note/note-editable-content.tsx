import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FC, useEffect } from 'react';
import { css } from 'styled-system/css';
import { EditorToolbar } from './editor-toolbar';

const extensions = [
    StarterKit,
    Placeholder.configure({
        placeholder: 'content'
    }),
    Underline
];

export type EditableContentProps =
    | { editable: true; noteContent: string | undefined; onChange: (content: string) => void }
    | { editable: false; noteContent: string | undefined; onChange?: never };

export const EditableContent: FC<EditableContentProps> = ({ noteContent, editable, onChange }) => {
    const editor = useEditor({
        extensions,
        content: noteContent,
        editable,
        onUpdate(props) {
            onChange?.(props.editor.getHTML());
        }
    });

    useEffect(() => {
        if (editor && editor.getHTML() !== noteContent) {
            editor.commands.setContent(noteContent, false);
        }
    }, [noteContent, editor]);

    return (
        <>
            <EditorContent
                className={editorContentStyles}
                editor={editor}
                placeholder="content"
                defaultValue={'content'}
            />
            <EditorToolbar editor={editor} />
        </>
    );
};

const editorContentStyles = css({
    overflowY: 'auto',
    scrollbar: 'hidden',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    textStyle: 'noteContent'
});
