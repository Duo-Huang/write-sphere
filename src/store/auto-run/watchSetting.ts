import { SETTING } from '@/constants'

const watchEditorMode = (store: AppStore.Self) => {
    store.subscribe(
        (state) => state.setting.mode,
        (mode) => {
            store.setState({
                layout: {
                    ...store.getState().layout,
                    isTopBarVisible: !mode[SETTING.MODE.HEADLESS],
                    isStatusBarVisible: !mode[SETTING.MODE.FOOTLESS],
                    isEditorFullScreen: mode[SETTING.MODE.EDIT],
                    isPreviewFullScreen: mode[SETTING.MODE.PREVIEW],
                },
            })
            console.log('setting mode', mode)
        },
        { fireImmediately: true }
    )
}

export default watchEditorMode
