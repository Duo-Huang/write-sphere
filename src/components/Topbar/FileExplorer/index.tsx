import { Drawer, DrawerContent, useDisclosure } from '@heroui/react'
import { useBreakpoint } from '@/hooks'

const FileExplorer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const breakpoint = useBreakpoint()

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
}

export default FileExplorer
