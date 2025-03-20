import { EDITOR } from '@/config'

const watchEditorMode = (store: AppStore.Self) => {
    store.subscribe(
        (state) => state.editor.mode,
        (mode) => {
            store.setState({
                layout: {
                    ...store.getState().layout,
                    isTopBarVisible: !mode[EDITOR.MODE.HEADLESS],
                    isStatusBarVisible: !mode[EDITOR.MODE.FOOTLESS],
                    isEditorFullScreen: mode[EDITOR.MODE.EDIT],
                    isPreviewFullScreen: mode[EDITOR.MODE.PREVIEW],
                },
            })
            console.log('editor mode', mode)
        },
        { fireImmediately: true }
    )
}

export default watchEditorMode
