import { create } from 'zustand'
import {
    devtools,
    persist,
    subscribeWithSelector,
    type PersistOptions,
    type DevtoolsOptions,
    type StorageValue,
} from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import createLayoutSlice from './slice/layout'
import createSettingSlice from './slice/setting'
import createEditorSlice from './slice/editor'
import autoRun from './auto-run'

const middlewareConfig: {
    devtools: DevtoolsOptions
    persist: PersistOptions<AppStore.RootStore, AppStore.PersistedStore>
} = {
    devtools: {
        name: 'write-spere-store',
        enabled: import.meta.env.DEV,
        stateSanitizer: (state: AppStore.RootStore) =>
            state.editor.cmView ? { ...state, editor: { ...state.editor, cmView: '<<EDITOR_VIEW_INSTANCE>>' } } : state,
    },
    persist: {
        name: 'write-spere-store',
        version: Number(import.meta.env.APP_STORE_VERSION) || Date.now(),
        // storage: {
        //     getItem: (key: string) => repository.get(key),
        //     setItem: (key: string, value: StorageValue<AppStore.PersistedStore>) => repository.set(key, value, true),
        //     removeItem: (key: string) => repository.remove(key)
        // },
        partialize: (state) => {
            return {
                setting: state.setting,
            }
        },
        onRehydrateStorage: (state) => {
            if (import.meta.env.PROD) return
            console.log('State rehydration started:', state)

            return (state, error) => {
                if (error) {
                    console.error('Error during rehydration:', error)
                } else {
                    console.log('State rehydration completed:', state)
                }
            }
        },
        merge: (s, currentState) => {
            const persistedState = s as AppStore.PersistedStore
            if (!persistedState) return currentState
            return {
                ...currentState,
                setting: {
                    ...currentState.setting,
                    ...persistedState.setting,
                },
            }
        },
    },
}

if (import.meta.env.APP_ENABLE_STORE_ENCRYPT === 'true') {
    const module = await import('@/utils/repository')
    const repository = module.default
    middlewareConfig.persist.storage = {
        getItem: (key: string) => repository.get(key),
        setItem: (key: string, value: StorageValue<AppStore.PersistedStore>) => repository.set(key, value, true),
        removeItem: (key: string) => repository.remove(key),
    }
}

const useStore = create<AppStore.RootStore>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((set, get, store) => ({
                    layout: { ...createLayoutSlice(set, get, store) },
                    setting: { ...createSettingSlice(set, get, store) },
                    editor: { ...createEditorSlice(set, get, store) },
                    reset: () => {
                        get().setting.reset()
                    },
                }))
            ),
            middlewareConfig.persist
        ),
        middlewareConfig.devtools
    )
)

export type Store = typeof useStore

type StoreWithAutoRun = Store & {
    autoRun: () => void
}
;(useStore as StoreWithAutoRun).autoRun = () => {
    autoRun(useStore)
}

export default useStore as StoreWithAutoRun
