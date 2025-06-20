'use client'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Plate } from '@udecode/plate/react'

import { useCreateEditor } from './use-create-editor'
import { SettingsDialog } from './settings'
import { Editor, EditorContainer } from './ui/editor'

export function PlateEditor() {
    const editor = useCreateEditor()

    return (
        <DndProvider backend={HTML5Backend}>
            <Plate editor={editor}>
                <EditorContainer>
                    <Editor variant="demo" />
                </EditorContainer>

                <SettingsDialog />
            </Plate>
        </DndProvider>
    )
}
