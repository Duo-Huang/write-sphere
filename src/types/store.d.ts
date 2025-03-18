import type { StateCreator } from 'zustand'
import { SETTING } from '@/config'

declare global {
    namespace AppStore {
        type SliceCreator<S> = StateCreator<
            RootStore,
            [
                ['zustand/devtools', never],
                ['zustand/persist', unknown],
                ['zustand/subscribeWithSelector', never],
                ['zustand/immer', never],
            ],
            [],
            S
        >

        // Root Store
        interface SliceStore {
            layout: LayoutStore
            config: ConfigStore
        }

        interface RootState {}

        interface RootActions {}

        interface RootStore extends RootState, RootActions, SliceStore {}

        // Layout Store
        interface LayoutState {
            isTopBarVisible: boolean
            isBottomBarVisible: boolean
        }

        interface LayoutActions {
            toggleTopBar: () => void
            toggleBottomBar: () => void
            reset: () => void
        }

        interface LayoutStore extends LayoutState, LayoutActions {}

        // Config store
        interface ConfigState {
            theme: SETTING.THEME
            language: SETTING.LANGUAGE
        }

        interface ConfigActions {
            setTheme: (theme: ConfigState['theme']) => void
            setLanguage: (language: ConfigState['language']) => void
        }

        interface ConfigStore extends ConfigState, ConfigActions {}
    }
}

export {}
