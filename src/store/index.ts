import { create } from "zustand";
import { devtools, persist, PersistOptions, subscribeWithSelector, type DevtoolsOptions, type StorageValue } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import createLayoutSlice from "./layout";
import createConfigSlice from "./config";
// import repository from "@/utils/repository";

const middlewareConfig: {
    devtools: DevtoolsOptions,
    persist: PersistOptions<AppStore.RootStore, Partial<AppStore.RootStore>>
} = {
    devtools: {
        name: "write-spere-store",
        enabled: import.meta.env.DEV,
    },
    persist: {
        name: "write-spere-store",
        version: 1,
        // storage: {
        //     getItem: (key: string) => repository.get(key),
        //     setItem: (key: string, value: StorageValue<Partial<AppStore.RootStore>>) => repository.set(key, value, true),
        //     removeItem: (key: string) => repository.remove(key)
        // },
        partialize: (state) => {
            return {
                layout: state.layout,
                config: state.config
            }
        },
        onRehydrateStorage: (state) => {
            if (import.meta.env.PROD) return
            console.log('State rehydration started:', state);

            return (state, error) => {
                if (error) {
                    console.error('Error during rehydration:', error);
                } else {
                    console.log('State rehydration completed:', state);
                }
            };
        },
        merge: (persistedState, currentState) => {
            if (!persistedState) return currentState
            return {
                ...currentState,
                layout: {
                    ...currentState.layout,
                    ...(persistedState as Partial<AppStore.RootStore>).layout
                },
                config: {
                    ...currentState.config,
                    ...(persistedState as Partial<AppStore.RootStore>).config
                }
            }
        }
    }
}

if (import.meta.env.APP_ENABLE_STORE_ENCRYPT) {
    import('@/utils/repository').then(module => {
        const repository = module.default
        middlewareConfig.persist.storage = {
            getItem: (key: string) => repository.get(key),
            setItem: (key: string, value: StorageValue<Partial<AppStore.RootStore>>) => repository.set(key, value, true),
            removeItem: (key: string) => repository.remove(key)
        }
    })
}

const useStore = create<AppStore.RootStore>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((set, get, store) => ({
                    layout: { ...createLayoutSlice(set, get, store) },
                    config: { ...createConfigSlice(set, get, store) },
                })),
            ),
            middlewareConfig.persist,
        ),
        middlewareConfig.devtools,
    ),
);

export default useStore
