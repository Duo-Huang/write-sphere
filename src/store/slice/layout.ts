const initialState: AppStore.LayoutState = {
    currentScreen: '2xl',
    isTopBarVisible: true,
    isBottomBarVisible: true,
    isModeBarVisible: true,
    isEditorFullScreen: false,
    isPreviewFullScreen: false,
}

const createLayoutSlice: AppStore.SliceCreator<AppStore.LayoutStore> = (set, get): AppStore.LayoutStore => {
    return {
        ...initialState,
        setCurrentScreen: (screen: Screen.Breakpoint) => {
            set((state) => {
                state.layout.currentScreen = screen
            })
        },
        toggleTopBar: () => {
            set(
                (state) => {
                    state.layout.isTopBarVisible = !state.layout.isTopBarVisible // with immer syntax, state is immutable
                },
                undefined, // No point when using immer
                'layout/toggleTopBar'
            )
        },
        toggleBottomBar: () => {
            set(
                {
                    // exmple for normal set instead of immer, don't use (state) => ({}), will lose typing of set overload
                    layout: {
                        ...get().layout,
                        isBottomBarVisible: !get().layout.isBottomBarVisible,
                    },
                },
                undefined,
                'layout/toggleBottomBar'
            )
        },
        toggleModeBar: () => {
            set(
                (state) => {
                    state.layout.isModeBarVisible = !state.layout.isModeBarVisible
                },
                undefined,
                'layout/toggleModeBar'
            )
        },
        setTopBarVisible: (visible: boolean) => {
            set((state) => {
                state.layout.isTopBarVisible = visible
            })
        },
        setBottomBarVisible: (visible: boolean) => {
            set((state) => {
                state.layout.isBottomBarVisible = visible
            })
        },
        setModeBarVisible: (visible: boolean) => {
            set((state) => {
                state.layout.isModeBarVisible = visible
            })
        },
        setEditorFullScreen: (fullScreen: boolean) => {
            set(
                (state) => {
                    if (fullScreen) {
                        state.layout.isEditorFullScreen = true
                        state.layout.isPreviewFullScreen = false
                    } else {
                        state.layout.isEditorFullScreen = false
                        state.layout.isPreviewFullScreen = true
                    }
                },
                undefined,
                'layout/setEditorFullScreen'
            )
        },
        setPreviewFullScreen: (fullScreen: boolean) => {
            set(
                (state) => {
                    if (fullScreen) {
                        state.layout.isEditorFullScreen = false
                        state.layout.isPreviewFullScreen = true
                    } else {
                        state.layout.isEditorFullScreen = true
                        state.layout.isPreviewFullScreen = false
                    }
                },
                undefined,
                'layout/setPreviewFullScreen'
            )
        },
        reset: () =>
            set(
                {
                    layout: {
                        ...get().layout,
                        ...initialState,
                    },
                },
                false,
                'layout/reset'
            ),
    }
}

export default createLayoutSlice
