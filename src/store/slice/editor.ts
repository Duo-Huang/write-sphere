import { type EditorView } from '@uiw/react-codemirror'
import { debounce } from 'throttle-debounce'
import { APP_CONFIG } from '@/constants'
import { initialMarkdown } from '@/constants/initial-markdown-content'

const initialState: AppStore.EditorState = {
    cmView: null,
    content: initialMarkdown,
}

const createEditorSlice: AppStore.SliceCreator<AppStore.EditorStore> = (set, get) => {
    const debouncedSetContent = debounce(APP_CONFIG.EDITOR_CHANGE_DEBOUNCE_TIME, (content: string) => {
        set(
            (state) => {
                state.editor.content = content
            },
            undefined,
            'editor/setContent'
        )
    })

    return {
        ...initialState,
        setContent: (content: string) => {
            // use debounce to prevent too many re-renders for cmEditor & rtEditor
            debouncedSetContent(content)
        },
        setCmView: (cmView: EditorView) => {
            set(
                {
                    editor: {
                        ...get().editor,
                        cmView,
                    },
                },
                undefined,
                'editor/setCmView'
            )
        },
    }
}

export default createEditorSlice
