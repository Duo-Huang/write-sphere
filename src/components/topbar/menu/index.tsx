import { memo } from 'react'
import { Button, Drawer, DrawerHeader, DrawerContent, DrawerBody, useDisclosure } from '@heroui/react'
import useStore from '@/store'
import { SCREEN } from '@/constants'

const Menu = memo(() => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const currentScreen = useStore((state) => state.layout.currentScreen)
    const reset = useStore((state) => state.reset)
    return (
        <div>
            <Button radius="none" onPress={onOpen} className="bg-transparent">
                Menu
            </Button>
            <Drawer
                size={currentScreen === SCREEN.SIZE.XS ? 'xs' : 'sm'}
                backdrop="transparent"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="right"
                classNames={{
                    base: 'side-panel-height bg-neutral-50 !ml-2 data-[placement=right]:top-[60px] shadow-2xl rounded-2xl dark:shadow-black dark:bg-zinc-800',
                }}
            >
                <DrawerContent>
                    <DrawerHeader>
                        <h1>Menu</h1>
                    </DrawerHeader>
                    <DrawerBody>
                        <h1>Menu list</h1>
                        <button onClick={() => reset()}>Reset</button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
})

export default Menu
