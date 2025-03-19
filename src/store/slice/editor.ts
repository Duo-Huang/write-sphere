import { EDITOR } from "@/config"


const initialState: AppStore.EditorState = {
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

const createEditorSlice: AppStore.SliceCreator<AppStore.EditorStore> = (set) => {
    return {
        ...initialState,
        setMode: (mode: EDITOR.MODE) => {
            set((state) => {
                if (mode === EDITOR.MODE.REALTIME) {
                    state.editor.mode = {
                        ...state.editor.mode,
                        [EDITOR.MODE.REALTIME]: true,
                        [EDITOR.MODE.EDIT]: false,
                        [EDITOR.MODE.PREVIEW]: false,
                    }
                } else if (mode === EDITOR.MODE.EDIT) {
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
            })
        },
        toggleMode: (mode: EDITOR.MODE) => {
            set((state) => {
                if (mode === EDITOR.MODE.FOCUS) {
                    state.editor.mode.focus = !state.editor.mode.focus
                    state.editor.mode.headless = state.editor.mode.focus
                    state.editor.mode.footless = state.editor.mode.focus
                } else {
                    state.editor.mode[mode] = !state.editor.mode[mode]
                }
            })
        },
    }
}

export default createEditorSlice
