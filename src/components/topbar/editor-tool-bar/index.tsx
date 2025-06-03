import { memo } from 'react'
import { Button } from '@heroui/react'
import useStore from '@/store'

const EditorToolbar = memo(() => {
    const reset = useStore((state) => state.reset)
    return (
        <Button radius="none" className="bg-transparent" onPress={reset}>
            Toolbar
        </Button>
    )
})

export default EditorToolbar
