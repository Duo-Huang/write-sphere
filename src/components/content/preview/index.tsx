import { memo, useEffect, useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MarkdownPlugin } from '@udecode/plate-markdown'
import { Plate } from '@udecode/plate/react'
import useStore from '@/store'

import { useCreateEditor } from './rt-editor/use-create-editor'
import { SettingsProvider, SettingsDialog } from './rt-editor/settings'
import { Editor, EditorContainer } from './rt-editor/ui/editor'

export function PlateEditor() {
    const setContent = useStore((state) => state.editor.setContent)
    const content = useStore((state) => state.editor.content)
    const ignoreNextOnValueChange = useRef(false)
    const ignoreNextUpdate = useRef(false)
    const editor = useCreateEditor({
        value: (editor) => {
            return editor.getApi(MarkdownPlugin).markdown.deserialize(content)
        },
    })

    useEffect(() => {
        if (ignoreNextUpdate.current) {
            ignoreNextUpdate.current = false
            return
        }
        ignoreNextOnValueChange.current = true
        editor.tf.reset()
        const value = editor.getApi(MarkdownPlugin).markdown.deserialize(content)
        editor.tf.setValue(value)
    }, [editor, content])

    const onValueChange = () => {
        const initialLoadingEle = document.getElementById('initial-loading')
        if (initialLoadingEle) {
            // remove initial loading
            initialLoadingEle.ontransitionend = (e) => {
                if (e.propertyName !== 'opacity') return
                document.body.removeChild(initialLoadingEle)
            }
            setTimeout(() => {
                initialLoadingEle.style.opacity = '0'
            }, 0)
        }

        if (ignoreNextOnValueChange.current) {
            ignoreNextOnValueChange.current = false
            return
        }
        ignoreNextUpdate.current = true
        const mdstr = editor.getApi(MarkdownPlugin).markdown.serialize()
        setContent(mdstr)
    }

    return (
        <SettingsProvider>
            <DndProvider backend={HTML5Backend}>
                <Plate editor={editor} onValueChange={onValueChange}>
                    <EditorContainer>
                        <Editor variant="none" />
                    </EditorContainer>

                    <SettingsDialog />
                </Plate>
            </DndProvider>
        </SettingsProvider>
    )
}

const Preview = memo(({ className }: { className?: string }) => (
    <div className={className}>
        <PlateEditor />
    </div>
))

export default Preview
