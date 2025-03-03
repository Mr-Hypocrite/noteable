import { FC } from 'react';
import { InitContent } from './init-content';
import { CreateNote } from '@/components';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    return (
        <>
            <InitContent />
            <CreateNote pos={'fixed'} right={'6'} bottom={'6'} />
        </>
    );
};
