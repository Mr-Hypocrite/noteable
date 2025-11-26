import { EditableInputProps, useEditable } from '@ark-ui/react';
import { FC } from 'react';
import { HTMLStyledProps } from 'styled-system/types';
import { Editable } from '../editable';

export interface NoteEditableTitleProps {
    inputProps: EditableInputProps;
    value: string | undefined;
}

export const NoteEditableTitle: FC<NoteEditableTitleProps> = ({ inputProps, value }) => {
    const editable = useEditable({
        placeholder: 'title',
        defaultValue: 'title',
        activationMode: 'focus',
        value: value
    });

    return (
        <Editable.RootProvider value={editable}>
            <Editable.Area>
                <Editable.Input {...titleStyles} {...inputProps} />
                <Editable.Preview {...titleStyles} />
            </Editable.Area>
        </Editable.RootProvider>
    );
};

const titleStyles: HTMLStyledProps<'input'> = {
    textStyle: 'noteTitle',
    _focus: {
        ring: 'none'
    }
};
