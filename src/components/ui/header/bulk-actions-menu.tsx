import { useNoteStoreActions } from '@/stores';
import { MenuRootProps } from '@ark-ui/react';
import { ChevronDownIcon, PinIcon, Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import { Box, Flex } from 'styled-system/jsx';
import { Button } from '../button';
import { Menu } from '../menu';
import { Text } from '../text';

export interface BulkActionsMenuProps extends MenuRootProps {
    selectedNotes: string[];
}

export const BulkActionsMenu: FC<BulkActionsMenuProps> = ({ selectedNotes, ...props }) => {
    const { pinNotes, setDeleteNoteIds, deselectNotes } = useNoteStoreActions();

    const handleBulkAction = (action: 'delete' | 'pin') => {
        if (action === 'delete') {
            setDeleteNoteIds(selectedNotes);
        }
        if (action === 'pin') {
            pinNotes(selectedNotes);
        }
        deselectNotes(selectedNotes);
    };

    return (
        <Box pos={'absolute'} right={'0'}>
            <Menu.Root {...props}>
                <Menu.Trigger asChild>
                    <Button>
                        <Text as="p" display={{ base: 'none', md: 'unset' }}>
                            bulk actions
                        </Text>
                        <ChevronDownIcon />
                    </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value={'delete'} onClick={() => handleBulkAction('delete')}>
                            <Flex alignItems={'center'} gap={'2'}>
                                <Trash2Icon />
                                delete
                            </Flex>
                        </Menu.Item>
                        <Menu.Item value={'pin'} onClick={() => handleBulkAction('pin')}>
                            <Flex alignItems={'center'} gap={'2'}>
                                <PinIcon />
                                pin
                            </Flex>
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    );
};
