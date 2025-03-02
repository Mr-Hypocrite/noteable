export interface INoteGeneratedMeta {
    id: string;
    created_at: Date;
}

export interface INote extends INoteGeneratedMeta {
    title: string;
    content: string;
    pinned: boolean;
}

export interface INoteModifiableContents extends Omit<INote, 'id' | 'created_at'> {}
