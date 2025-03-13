import { Drawer, DrawerContent, useDisclosure } from '@heroui/react'
import { useBreakpoint } from '@/hooks'

const Menu = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const breakpoint = useBreakpoint()

    return (
        <div>
            <span onClick={onOpen}>Menu</span>
            <Drawer
                size={breakpoint === 'xs' ? 'full' : 'sm'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="right"
                classNames={{
                    base: 'content-height data-[placement=right]:top-[40px] data-[placement=right]:bottom-[20px] rounded-none',
                }}
            >
                <DrawerContent>
                    <h1>Menu</h1>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Menu
