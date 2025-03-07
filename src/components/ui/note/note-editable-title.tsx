import { EditableInputProps, EditableRootProps } from '@ark-ui/react';
import { FC } from 'react';
import { HTMLStyledProps } from 'styled-system/types';
import { Editable } from '../editable';

export interface NoteEditableTitleProps extends EditableRootProps {
    inputProps: EditableInputProps;
}

export const NoteEditableTitle: FC<NoteEditableTitleProps> = ({ inputProps, ...props }) => {
    return (
        <Editable.Root placeholder={'title'} defaultValue="title" activationMode="click" {...props}>
            <Editable.Area>
                <Editable.Input {...titleStyles} {...inputProps} />
                <Editable.Preview {...titleStyles} />
            </Editable.Area>
        </Editable.Root>
    );
};

const titleStyles: HTMLStyledProps<'input'> = {
    fontWeight: 'thin',
    fontSize: { base: 'lg' },
    _focus: {
        ring: 'none'
    }
};
