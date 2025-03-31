import { type EditorView } from "@uiw/react-codemirror"

declare global {
    namespace AppStore {
        interface EditorState {
            view: EditorView | null
            content: string
        }

        interface EditorActions {
            setContent: (content: string) => void
            setView: (view: EditorView) => void
        }

        interface EditorStore extends EditorState, EditorActions { }
    }
}
