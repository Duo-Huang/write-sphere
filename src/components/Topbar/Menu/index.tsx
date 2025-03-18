import { memo } from 'react'
import { Drawer, DrawerContent, useDisclosure } from '@heroui/react'
import { useScreenBreakpoint } from '@/hooks'

const Menu = memo(() => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const breakpoint = useScreenBreakpoint()

    return (
        <div>
            <span onClick={onOpen}>Menu</span>
            <Drawer
                size={breakpoint === 'xs' ? 'full' : 'sm'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="right"
                classNames={{
                    base: 'content-height data-[placement=right]:top-[40px] data-[placement=right]:bottom-[20px] rounded-none bg-stone-100 dark:bg-zinc-800',
                }}
            >
                <DrawerContent>
                    <h1>Menu</h1>
                </DrawerContent>
            </Drawer>
        </div>
    )
})

export default Menu
