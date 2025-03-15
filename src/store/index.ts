import { create } from "zustand";
import { devtools, persist, PersistOptions, subscribeWithSelector, type DevtoolsOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import createLayoutSlice from "./layout";
import createConfigSlice from "./config";

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
        partialize: (state) => {
            return {
                layout: state.layout
            }
        },
        onRehydrateStorage: (state) => {
        },
        merge: (persistedState, currentState) => {
            return {
                ...currentState,
                layout: {
                    ...currentState.layout,
                    ...(persistedState as Partial<AppStore.RootStore>).layout
                }
            }
        }
    }
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
