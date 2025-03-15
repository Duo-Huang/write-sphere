import { SETTING } from '@/config'

const initialState: AppStore.ConfigState = {
    theme: SETTING.THEME.SYSTEM,
    language: SETTING.LANGUAGE.SYSTEM
}

const createConfigSlice: AppStore.SliceCreator<AppStore.ConfigStore> = (set, get) => {
    return {
        ...initialState,
        setTheme: (theme: AppStore.ConfigState['theme']) => {
            set((state) => {
                state.config.theme = theme
            }, undefined, 'config/setTheme')
        },
        setLanguage: (language: AppStore.ConfigState['language']) => {
            set((state) => {
                state.config.language = language
            }, undefined, 'config/setLanguage')
        }
    }
}

export default createConfigSlice
