import { memo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Plate } from '@udecode/plate/react'

import { useCreateEditor } from './rt-editor/use-create-editor'
import { SettingsDialog } from './rt-editor/settings'
import { Editor, EditorContainer } from './rt-editor/ui/editor'

export function PlateEditor() {
    const editor = useCreateEditor()

    return (
        <DndProvider backend={HTML5Backend}>
            <Plate editor={editor}>
                <EditorContainer>
                    <Editor variant="none" />
                </EditorContainer>

                <SettingsDialog />
            </Plate>
        </DndProvider>
    )
}

const Preview = memo(({ className }: { className?: string }) => (
    <div className={className}>
        <PlateEditor />
    </div>
))

export default Preview
