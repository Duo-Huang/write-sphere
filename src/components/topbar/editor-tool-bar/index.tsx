import { memo } from 'react'
import useStore from '@/store'

const EditorToolbar = memo(() => {
    const reset = useStore((state) => state.reset)
    return <button onClick={reset}>Toolbar</button>
})

export default EditorToolbar
