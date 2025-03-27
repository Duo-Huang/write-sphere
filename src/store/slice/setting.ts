import { SETTING, SCREEN } from '@/config'
import { calculateBreakpoint } from '@/utils/screen'

const initialState: AppStore.SettingState = {
    theme: SETTING.THEME.SYSTEM,
    language: SETTING.LANGUAGE.SYSTEM,
    _prevMode: calculateBreakpoint() === SCREEN.SIZE.XS ? SETTING.MODE.EDIT : SETTING.MODE.REALTIME,
    mode: {
        [SETTING.MODE.REALTIME]: calculateBreakpoint() != SCREEN.SIZE.XS,
        [SETTING.MODE.EDIT]: calculateBreakpoint() === SCREEN.SIZE.XS,
        [SETTING.MODE.PREVIEW]: false,
        [SETTING.MODE.HEADLESS]: false,
        [SETTING.MODE.FOOTLESS]: false,
        [SETTING.MODE.FOCUS]: false,
        [SETTING.MODE.SYNC_SCROLL]: true,
    },
}

const createSettingSlice: AppStore.SliceCreator<AppStore.SettingStore> = (set, get) => {
    return {
        ...initialState,
        setTheme: (theme: AppStore.SettingState['theme']) => {
            set(
                (state) => {
                    state.setting.theme = theme // with immer syntax, state is immutable
                },
                undefined,
                'setting/setTheme'
            )
        },
        setLanguage: (language: AppStore.SettingState['language']) => {
            set(
                {
                    // exmple for normal set instead of immer, don't use (state) => ({}), will lose typing of set overload

                    setting: {
                        ...get().setting,
                        language: language,
                    },
                },
                undefined,
                'setting/setLanguage'
            )
        },
        setMode: (mode: SETTING.MODE) => {
            set(
                (state) => {
                    if (mode === SETTING.MODE.REALTIME) {
                        state.setting._prevMode = SETTING.MODE.REALTIME
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.REALTIME]: true,
                            [SETTING.MODE.EDIT]: false,
                            [SETTING.MODE.PREVIEW]: false,
                        }
                    } else if (mode === SETTING.MODE.EDIT) {
                        state.setting._prevMode = SETTING.MODE.EDIT
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.EDIT]: true,
                            [SETTING.MODE.REALTIME]: false,
                            [SETTING.MODE.PREVIEW]: false,
                        }
                    } else if (mode === SETTING.MODE.PREVIEW) {
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.PREVIEW]: true,
                            [SETTING.MODE.REALTIME]: false,
                            [SETTING.MODE.EDIT]: false,
                        }
                    } else if (mode === SETTING.MODE.FOCUS) {
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.FOCUS]: true,
                            [SETTING.MODE.HEADLESS]: true,
                            [SETTING.MODE.FOOTLESS]: true,
                        }
                    } else if (mode === SETTING.MODE.HEADLESS) {
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.HEADLESS]: true,
                        }
                    } else if (mode === SETTING.MODE.FOOTLESS) {
                        state.setting.mode = {
                            ...state.setting.mode,
                            [SETTING.MODE.FOOTLESS]: true,
                        }
                    }
                },
                undefined,
                'setting/setMode'
            )
        },
        toggleMode: (mode: SETTING.MODE) => {
            set(
                (state) => {
                    state.setting.mode[mode] = !state.setting.mode[mode]
                    if (mode === SETTING.MODE.FOCUS) {
                        state.setting.mode[SETTING.MODE.HEADLESS] = state.setting.mode[SETTING.MODE.FOCUS]
                        state.setting.mode[SETTING.MODE.FOOTLESS] = state.setting.mode[SETTING.MODE.FOCUS]
                    } else if (mode === SETTING.MODE.PREVIEW) {
                        if (state.setting.mode[mode]) {
                            // is preview mode now
                            state.setting.mode[SETTING.MODE.EDIT] = false
                            state.setting.mode[SETTING.MODE.REALTIME] = false
                        } else {
                            // is not preview mode now
                            state.setting.mode[SETTING.MODE.EDIT] = state.setting._prevMode === SETTING.MODE.EDIT
                            state.setting.mode[SETTING.MODE.REALTIME] =
                                state.setting._prevMode === SETTING.MODE.REALTIME
                        }
                    }
                },
                undefined,
                'setting/toggleMode'
            )
        },
        reset: () => {
            set(
                {
                    setting: {
                        ...get().setting, // nest setting??
                        ...initialState,
                    },
                },
                false,
                'setting/reset'
            )
        },
    }
}

export default createSettingSlice
