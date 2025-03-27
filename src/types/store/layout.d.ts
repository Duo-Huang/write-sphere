import { SCREEN } from '@/config'

declare global {
    namespace AppStore {
        interface LayoutState {
            currentScreen: SCREEN.SIZE
            isTopBarVisible: boolean
            isStatusBarVisible: boolean
            isModeBarVisible: boolean
            isEditorFullScreen: boolean
            isPreviewFullScreen: boolean
        }

        interface LayoutStore extends LayoutState {}
    }
}

export {}
