import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip, Button, Drawer, DrawerHeader, DrawerContent, DrawerBody, useDisclosure } from '@heroui/react'
import { Icon } from '@/components/common'
import useStore from '@/store'

const FileExplorer = memo(() => {
    const { t } = useTranslation()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const currentScreen = useStore((state) => state.layout.currentScreen)

    return (
        <div>
            <Tooltip radius="sm" content={t('home.file')}>
                <Button radius="none" isIconOnly onPress={onOpen} className="bg-transparent hover:!opacity-70">
                    <Icon name="folder" className="text-default-foreground !size-6" />
                </Button>
            </Tooltip>
            <Drawer
                size={currentScreen === 'xs' ? 'xs' : 'sm'}
                backdrop="transparent"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="left"
                classNames={{
                    base: 'side-panel-height bg-neutral-50 !ml-2 data-[placement=right]:top-[60px] shadow-2xl rounded-2xl dark:shadow-black dark:bg-zinc-800',
                }}
            >
                <DrawerContent>
                    <DrawerHeader>
                        <h1>File Tool bar</h1>
                    </DrawerHeader>
                    <DrawerBody>
                        <h1>File tree</h1>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
})

export default FileExplorer
