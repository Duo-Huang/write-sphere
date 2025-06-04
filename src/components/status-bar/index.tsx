import { useMemo, useEffect, useState } from 'react'
import { EditorView, StateEffect } from '@uiw/react-codemirror'
import useStore from '@/store'
import { calcWords, calcLines } from '@/utils/helper'

const StatusBar = () => {
    const isStatusBarVisible = useStore((state) => state.layout.isStatusBarVisible)
    const isEditorFullScreen = useStore((state) => state.layout.isEditorFullScreen)
    const isPreviewFullScreen = useStore((state) => state.layout.isPreviewFullScreen)
    const editorView = useStore((state) => state.editor.cmView)
    const editorState = useStore((state) => state.editor.cmView?.state)

    const [, forceUpdate] = useState<object | null>(null)

    const stats = useMemo(() => {
        if (!editorState) return { bytes: 0, words: 0, lines: 0, ln: 0, col: 0 }

        const range = editorState.selection.main
        const isSelection = range.from !== range.to
        const text = isSelection
            ? editorState.doc.sliceString(range.from, range.to)
            : editorState.doc.sliceString(0, editorState.doc.length)
        const bytes = new TextEncoder().encode(text).length
        const words = calcWords(text)
        const lines = isSelection ? calcLines(text) : editorState.doc.lines

        const cursor = editorState.selection.main.head
        const ln = editorState.doc.lineAt(cursor).number
        const col = cursor - editorState.doc.lineAt(cursor).from + 1
        const chars = text.length
        return { isSelection, bytes, words, lines, ln, col, chars }
    }, [editorState])

    useEffect(() => {
        if (editorView) {
            const updateListener = EditorView.updateListener.of((update) => {
                if (update.selectionSet) {
                    forceUpdate({})
                }
            })

            editorView?.dispatch({
                effects: StateEffect.appendConfig.of(updateListener),
            })
        }
    }, [editorView])

    return (
        <div
            className={`fixed ${isStatusBarVisible ? 'bottom-0' : '-bottom-[20px]'} z-50 flex h-5 w-full items-center justify-between bg-sky-600 text-xs text-white duration-500 ease-out`}
        >
            <div
                className={`truncate pl-4 ${isEditorFullScreen ? 'basis-full' : isPreviewFullScreen ? 'basis-0 !pl-0' : 'basis-1/2'} duration-500`}
            >
                <span className="mr-2">Markdown</span>
                <span className="max-xs:hidden mr-2">{stats.bytes} bytes</span>
                <span className="max-xs:hidden mr-2">{stats.chars} chars</span>
                <span className="mr-2">{stats.words} words</span>
                <span className="mr-2">{stats.lines} lines</span>
                <span className="mr-2">
                    Ln {stats.ln}, Col {stats.col}
                </span>
                {stats.isSelection ? <span className="rounded-xs bg-emerald-600 px-2">selection</span> : null}
            </div>
            <div className="basis-7"></div>
            <div
                className={`truncate pr-4 text-right ${isPreviewFullScreen ? 'basis-full' : isEditorFullScreen ? 'basis-0 !pr-0' : 'basis-1/2'} duration-500`}
            >
                <span>HTML</span>
                <span className="max-xs:hidden ml-2">{stats.bytes} bytes</span>
                <span className="max-xs:hidden ml-2">{stats.chars} chars</span>
                <span className="ml-2">{stats.words} words</span>
                <span className="ml-2">{stats.lines} lines</span>
                <span className="ml-2">
                    Ln {stats.ln}, Col {stats.col}
                </span>
                {stats.isSelection ? <span className="ml-2 rounded-xs bg-emerald-600 px-2">selection</span> : null}
            </div>
        </div>
    )
}

export default StatusBar
