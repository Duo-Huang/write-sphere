
const initialState: AppStore.EditorState = {
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\nLorem fsdf gfdg hgfh kjlj wijd jiejf jkoe; kjjui jkjsdkjfjk mnngga hheioj.\n \n \n```js\nconsole.log("Hello, world!");\n```'
}

const createEditorSlice: AppStore.SliceCreator<AppStore.EditorStore> = (set, get, store) => {
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
        }
    }
}

export default createEditorSlice