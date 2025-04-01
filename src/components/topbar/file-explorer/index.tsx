import { memo } from 'react'
import { Button, Drawer, DrawerHeader, DrawerContent, DrawerBody, useDisclosure } from '@heroui/react'
import useStore from '@/store'

const FileExplorer = memo(() => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const currentScreen = useStore((state) => state.layout.currentScreen)

    return (
        <div>
            <Button onPress={onOpen}>File</Button>
            <Drawer
                size={currentScreen === 'xs' ? 'xs' : 'sm'}
                backdrop="transparent"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="left"
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
