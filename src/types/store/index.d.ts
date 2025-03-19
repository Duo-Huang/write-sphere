import { type StateCreator } from 'zustand'
import { type Store } from '@/store'

declare global {
    namespace AppStore {
        type Self = Store

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
            editor: EditorStore
        }

        interface RootState { }

        interface RootActions { }

        interface RootStore extends RootState, RootActions, SliceStore { }

    }
}
