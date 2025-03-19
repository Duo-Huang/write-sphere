import { memo } from 'react'
import { Drawer, DrawerHeader, DrawerContent, DrawerBody, useDisclosure } from '@heroui/react'
import { useScreenBreakpoint } from '@/hooks'

const FileExplorer = memo(() => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const breakpoint = useScreenBreakpoint()
    console.log('FileExplorer render')

    return (
        <div>
            <span onClick={onOpen}>File</span>
            <Drawer
                size={breakpoint === 'xs' ? 'xs' : 'sm'}
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
