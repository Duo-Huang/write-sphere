import { SCREEN } from '@/constants'

const initialState: AppStore.LayoutState = {
    currentScreen: SCREEN.SIZE['2XL'],
    isTopBarVisible: true,
    isStatusBarVisible: true,
    isModeBarVisible: true,
    isEditorFullScreen: false,
    isPreviewFullScreen: false,
}

const createLayoutSlice: AppStore.SliceCreator<AppStore.LayoutStore> = (): AppStore.LayoutStore => {
    return {
        ...initialState,
    }
}

export default createLayoutSlice
