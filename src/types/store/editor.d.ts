import { EDITOR } from '@/config'

declare global {
    namespace AppStore {
        interface EditorState {
            mode: Record<EDITOR.MODE, boolean>
        }

        interface EditorActions {
            setMode: (mode: EDITOR.MODE) => void
            toggleMode: (mode: EDITOR.MODE) => void
        }

        interface EditorStore extends EditorState, EditorActions { }
    }
}