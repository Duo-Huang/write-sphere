import { EDITOR } from '@/config'

declare global {
    namespace AppStore {
        interface EditorState {
            _prevEditMode: EDITOR.MODE.EDIT | EDITOR.MODE.REALTIME
            mode: Record<EDITOR.MODE, boolean>
        }

        interface EditorActions {
            setMode: (mode: EDITOR.MODE) => void
            toggleMode: (mode: EDITOR.MODE) => void
            reset: () => void
        }

        interface EditorStore extends EditorState, EditorActions { }
    }
}