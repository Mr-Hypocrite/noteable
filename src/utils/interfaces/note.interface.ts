export interface INoteGeneratedMeta {
    id: string;
    created_at: Date;
}

export interface INote extends INoteGeneratedMeta {
    noteTitle: string;
    noteContent: string;
    pinned: boolean;
}

export interface INoteModifiableContents extends Omit<INote, 'id' | 'created_at'> {}
