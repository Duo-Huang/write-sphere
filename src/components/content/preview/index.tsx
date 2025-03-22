import { memo } from 'react'
import { Editor, rootCtx } from '@milkdown/kit/core'
import { nord } from '@milkdown/theme-nord'
import { commonmark } from '@milkdown/kit/preset/commonmark'
import { gfm } from '@milkdown/kit/preset/gfm'
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react'

const MilkdownEditor: React.FC = () => {
    useEditor((root) =>
        Editor.make()
            .config(nord)
            .config((ctx) => {
                ctx.set(rootCtx, root)
            })
            .use(commonmark)
            .use(gfm)
    )

    return <Milkdown />
}

const Preview = memo(() => {
    return (
        <MilkdownProvider>
            <MilkdownEditor />
        </MilkdownProvider>
    )
})

export default Preview
