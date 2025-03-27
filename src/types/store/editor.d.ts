declare global {
    namespace AppStore {
        interface EditorState {
            content: string
        }

        interface EditorActions {
            setContent: (content: string) => void
        }

        interface EditorStore extends EditorState, EditorActions { }
    }
}

export { }