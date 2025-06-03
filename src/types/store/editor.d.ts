import { type EditorView } from '@uiw/react-codemirror'

declare global {
    namespace AppStore {
        interface EditorState {
            cmView: EditorView | null
            content: string
        }

        interface EditorActions {
            setContent: (content: string) => void
            setCmView: (view: EditorView) => void
        }

        interface EditorStore extends EditorState, EditorActions {}
    }
}
