import { INote } from '@/utils';
import { FC } from 'react';
import { Grid } from 'styled-system/jsx';
import { Note } from './note';

export interface NotesGridProps {
    notes: INote[];
}

export const NotesGrid: FC<NotesGridProps> = ({ notes }) => {
    return (
        <Grid
            gridTemplateColumns={'repeat(auto-fill, minmax(240px, 1fr))'}
            gridGap={'4'}
            pt={'2'}
            pb={'4'}
            overflowY={'auto'}
            width={'full'}
            scrollbar={'hidden'}
            height={'full'}
            alignItems={'start'}
        >
            {notes.map((note, _index) => (
                <Note key={note.id} {...note} />
            ))}
        </Grid>
    );
};
