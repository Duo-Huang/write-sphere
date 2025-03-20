import { SETTING } from '@/config'

const initialState: AppStore.ConfigState = {
    theme: SETTING.THEME.SYSTEM,
    language: SETTING.LANGUAGE.SYSTEM,
}

const createConfigSlice: AppStore.SliceCreator<AppStore.ConfigStore> = (set, get) => {
    return {
        ...initialState,
        setTheme: (theme: AppStore.ConfigState['theme']) => {
            set(
                (state) => {
                    state.config.theme = theme // with immer syntax, state is immutable
                },
                undefined,
                'config/setTheme'
            )
        },
        setLanguage: (language: AppStore.ConfigState['language']) => {
            set(
                { // exmple for normal set instead of immer, don't use (state) => ({}), will lose typing of set overload

                    config: {
                        ...get().config,
                        language: language,
                    },
                },
                undefined,
                'config/setLanguage'
            )
        },
        reset: () => {
            set(
                {
                    config: {
                        ...get().config,
                        ...initialState,
                    },
                },
                false,
                'config/reset'
            )
        },
    }
}

export default createConfigSlice
