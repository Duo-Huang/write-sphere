import { EDITOR } from "@/config"


const initialState: AppStore.EditorState = {
    _prevEditMode: EDITOR.MODE.REALTIME,
    mode: {
        [EDITOR.MODE.REALTIME]: true,
        [EDITOR.MODE.EDIT]: false,
        [EDITOR.MODE.PREVIEW]: false,
        [EDITOR.MODE.HEADLESS]: false,
        [EDITOR.MODE.FOOTLESS]: false,
        [EDITOR.MODE.FOCUS]: false,
        [EDITOR.MODE.SYNC_SCROLL]: true,
    },
}

const createEditorSlice: AppStore.SliceCreator<AppStore.EditorStore> = (set, get) => {
    return {
        ...initialState,
        setMode: (mode: EDITOR.MODE) => {
            set((state) => {
                if (mode === EDITOR.MODE.REALTIME) {
                    state.editor._prevEditMode = EDITOR.MODE.REALTIME
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.REALTIME]: true,
                        [EDITOR.MODE.EDIT]: false,
                        [EDITOR.MODE.PREVIEW]: false,
                    }
                } else if (mode === EDITOR.MODE.EDIT) {
                    state.editor._prevEditMode = EDITOR.MODE.EDIT
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.EDIT]: true,
                        [EDITOR.MODE.REALTIME]: false,
                        [EDITOR.MODE.PREVIEW]: false,
                    }
                } else if (mode === EDITOR.MODE.PREVIEW) {
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.PREVIEW]: true,
                        [EDITOR.MODE.REALTIME]: false,
                        [EDITOR.MODE.EDIT]: false,
                    }
                } else if (mode === EDITOR.MODE.FOCUS) {
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.FOCUS]: true,
                        [EDITOR.MODE.HEADLESS]: true,
                        [EDITOR.MODE.FOOTLESS]: true,
                    }
                } else if (mode === EDITOR.MODE.HEADLESS) {
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.HEADLESS]: true,
                    }
                } else if (mode === EDITOR.MODE.FOOTLESS) {
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.FOOTLESS]: true,
                    }
                }
            },
                undefined,
                'editor/setMode'
            )
        },
        toggleMode: (mode: EDITOR.MODE) => {
            set((state) => {
                state.editor.mode[mode] = !state.editor.mode[mode]
                if (mode === EDITOR.MODE.FOCUS) {
                    state.editor.mode[EDITOR.MODE.HEADLESS] = state.editor.mode[EDITOR.MODE.FOCUS]
                    state.editor.mode[EDITOR.MODE.FOOTLESS] = state.editor.mode[EDITOR.MODE.FOCUS]
                } else if (mode === EDITOR.MODE.PREVIEW) {
                    if (state.editor.mode[mode]) { // is preview mode now
                        state.editor.mode[EDITOR.MODE.EDIT] = false
                        state.editor.mode[EDITOR.MODE.REALTIME] = false
                    } else { // is not preview mode now
                        state.editor.mode[EDITOR.MODE.EDIT] = state.editor._prevEditMode === EDITOR.MODE.EDIT
                        state.editor.mode[EDITOR.MODE.REALTIME] = state.editor._prevEditMode === EDITOR.MODE.REALTIME
                    }

                }
            },
                undefined,
                'editor/toggleMode'
            )
        },
        reset: () => {
            set(
                {
                    editor: {
                        ...get().editor,
                        ...initialState,
                    },
                },
                undefined,
                'editor/reset'
            )
        },
    }
}

export default createEditorSlice
