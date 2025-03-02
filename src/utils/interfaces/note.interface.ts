export interface INoteGeneratedMeta {
    id: string;
    created_at: Date;
}

export interface INote extends INoteGeneratedMeta {
    title: string;
    content: string;
    pinned: boolean;
}
