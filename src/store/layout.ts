const initialState: AppStore.LayoutState = {
    isTopBarVisible: true,
    isBottomBarVisible: true,
}

const createLayoutSlice: AppStore.SliceCreator<AppStore.LayoutStore> = (set, get) => {
    return {
        ...initialState,
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
