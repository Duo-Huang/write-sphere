declare global {
    namespace AppStore {

        interface LayoutState {
            currentScreen: Screen.Breakpoint
            isTopBarVisible: boolean
            isBottomBarVisible: boolean
            isModeBarVisible: boolean
            isEditorFullScreen: boolean
            isPreviewFullScreen: boolean
        }

        interface LayoutActions {
            setCurrentScreen: (screen: Screen.Breakpoint) => void
            toggleTopBar: () => void
            toggleBottomBar: () => void
            toggleModeBar: () => void
            setTopBarVisible: (visible: boolean) => void
            setBottomBarVisible: (visible: boolean) => void
            setModeBarVisible: (visible: boolean) => void
            setEditorFullScreen: (fullScreen: boolean) => void
            setPreviewFullScreen: (fullScreen: boolean) => void
            reset: () => void
        }

        interface LayoutStore extends LayoutState, LayoutActions { }
    }
}

export { }