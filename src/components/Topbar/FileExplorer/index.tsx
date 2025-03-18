import { memo } from 'react'
import { Drawer, DrawerContent, useDisclosure } from '@heroui/react'
import { useScreenBreakpoint } from '@/hooks'

const FileExplorer = memo(() => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const breakpoint = useScreenBreakpoint()
    console.log('FileExplorer render')

    return (
        <div>
            <span onClick={onOpen}>File</span>
            <Drawer
                size={breakpoint === 'xs' ? 'full' : 'sm'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="left"
                classNames={{
                    base: 'content-height data-[placement=right]:top-[40px] data-[placement=right]:bottom-[20px] rounded-none bg-stone-100 dark:bg-zinc-800',
                }}
            >
                <DrawerContent>
                    <h1>File</h1>
                </DrawerContent>
            </Drawer>
        </div>
    )
})

export default FileExplorer
