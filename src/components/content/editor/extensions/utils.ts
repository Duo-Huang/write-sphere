import { EditorSelection, type EditorState, type EditorView } from '@uiw/react-codemirror'
import { syntaxTree } from '@codemirror/language'

export function isMakdownContext(state: EditorState) {
    const tree = syntaxTree(state)
    const pos = state.selection.main.head
    const node = tree.resolveInner(pos, 1)

    const disallowedContexts = new Set([
        'CodeBlock',
        'FencedCode',
        'InlineCode',
        'CommentBlock',
        'Comment',
        'InlineMath',
        'MathBlock',
    ])

    let current = node
    while (current) {
        // console.log("Node:", current.name, "from:", current.from, "to:", current.to)
        if (disallowedContexts.has(current.name)) {
            return false
        }
        current = current.parent!
    }

    return true
}

export function createMarkdownFormatCommand(format: CEditor.MarkdownFormat) {
    return (view: EditorView) => {
        const state = view.state
        // if (!isMakdownContext(state)) return false

        const { left, right } = format
        const leftLen = left.length
        const rightLen = right.length

        const changes = state.changeByRange((range) => {
            const { from, to, anchor, head } = range
            const selected = state.sliceDoc(from, to)

            // 检测现有格式
            const prevLeft = state.sliceDoc(from - leftLen, from)
            const nextRight = state.sliceDoc(to, to + rightLen)
            const hasFormat = prevLeft === left && nextRight === right

            // 删除格式
            if (hasFormat) {
                return {
                    changes: [
                        { from: from - leftLen, to: from, insert: '' },
                        { from: to, to: to + rightLen, insert: '' },
                    ],
                    range: EditorSelection.range(anchor - leftLen, head - leftLen),
                }
            } else if (isMakdownContext(state)) {
                return {
                    changes: [
                        {
                            from,
                            to,
                            insert: `${left}${selected}${right}`,
                        },
                    ],
                    range: EditorSelection.range(anchor + leftLen, head + leftLen),
                }
            }
            return {
                range: EditorSelection.range(anchor, head),
            }
        })

        view.dispatch(state.update(changes, { scrollIntoView: true }))
        return true
    }
}
