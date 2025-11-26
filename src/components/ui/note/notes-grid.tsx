import { INote } from '@/utils';
import { FC } from 'react';
import { Grid } from 'styled-system/jsx';
import { Note } from './note';

export interface NotesGridProps {
    notes: INote[];
    selectedNotes?: INote['id'][];
}

export const NotesGrid: FC<NotesGridProps> = ({ notes, selectedNotes }) => {
    return (
        <Grid
            gridTemplateColumns={'repeat(auto-fill, minmax(270px, 1fr))'}
            gridGap={'12'}
            py={'4'}
            width={'full'}
            alignItems={'center'}
        >
            {notes.map((note, _index) => (
                <Note
                    key={note.id}
                    selected={!!selectedNotes?.find((id) => id === note.id) || false}
                    {...note}
                />
            ))}
        </Grid>
    );
};
