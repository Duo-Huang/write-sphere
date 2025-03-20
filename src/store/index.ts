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
import createConfigSlice from './slice/config'
import createEditorSlice from './slice/editor'
import autoRun from './autoRun'

const middlewareConfig: {
    devtools: DevtoolsOptions
    persist: PersistOptions<AppStore.RootStore, AppStore.PersistedStore>
} = {
    devtools: {
        name: 'write-spere-store',
        enabled: import.meta.env.DEV,
    },
    persist: {
        name: 'write-spere-store',
        version: Number(import.meta.env.APP_STORE_VERSION) || Date.now(),
        // storage: {
        //     getItem: (key: string) => repository.get(key),
        //     setItem: (key: string, value: StorageValue<Partial<AppStore.RootStore>>) => repository.set(key, value, true),
        //     removeItem: (key: string) => repository.remove(key)
        // },
        partialize: (state) => {
            return {
                config: state.config,
                editor: state.editor,
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
        merge: (persistedState, currentState) => {

            if (!persistedState) return currentState
            return {
                ...currentState,
                config: {
                    ...currentState.config,
                    ...(persistedState as Partial<AppStore.RootStore>).config,
                },
                editor: {
                    ...currentState.editor,
                    ...(persistedState as Partial<AppStore.RootStore>).editor,
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
        setItem: (key: string, value: StorageValue<Partial<AppStore.RootStore>>) => repository.set(key, value, true),
        removeItem: (key: string) => repository.remove(key),
    }
}

console.log('create store')

const useStore = create<AppStore.RootStore>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((set, get, store) => ({
                    layout: { ...createLayoutSlice(set, get, store) },
                    config: { ...createConfigSlice(set, get, store) },
                    editor: { ...createEditorSlice(set, get, store) },
                    reset: () => {
                        get().config.reset()
                        get().editor.reset()
                    },
                }))
            ),
            middlewareConfig.persist
        ),
        middlewareConfig.devtools
    )
)

export type Store = typeof useStore

export type StoreWithAutoRun = typeof useStore & {
    autoRun: () => void
}

(useStore as StoreWithAutoRun).autoRun = () => {
    autoRun(useStore)
}

export default useStore as StoreWithAutoRun
