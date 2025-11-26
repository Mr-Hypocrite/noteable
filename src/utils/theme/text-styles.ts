import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
    noteTitle: {
        value: {
            fontSize: { base: 'xl' },
            fontWeight: { base: 'normal' }
        }
    },
    noteContent: {
        value: {
            fontSize: { base: 'lg' },
            fontWeight: { base: 'thin' }
        }
    }
});
