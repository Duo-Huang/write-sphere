import { type EditorView } from "@uiw/react-codemirror"

const initialState: AppStore.EditorState = {
    view: null,
    content:
        'First line ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\nSecond line Lorem fsdf gfdg hgfh kjlj wijd jiejf jkoe; kjjui jkjsdkjfjk mnngga hheioj.\n\n\n\n\n\n\n\n```js\nconsole.log("Hello, world!");\n```',
}

const createEditorSlice: AppStore.SliceCreator<AppStore.EditorStore> = (set, get) => {
    return {
        ...initialState,
        setContent: (content: string) => {
            set(
                (state) => {
                    state.editor.content = content
                },
                undefined,
                'editor/setContent'
            )
        },
        setView: (view: EditorView) => {
            set(
                {
                    editor: {
                        ...get().editor,
                        view
                    }
                },
                undefined,
                'editor/setView'
            )
        },
    }
}

export default createEditorSlice
