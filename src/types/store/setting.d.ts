import { SETTING } from '@/constants'

declare global {
    namespace AppStore {
        interface SettingState {
            theme: SETTING.THEME
            language: SETTING.LANGUAGE
            _prevMode: SETTING.MODE.EDIT | SETTING.MODE.REALTIME
            mode: Record<SETTING.MODE, boolean>
        }

        interface SettingActions {
            setTheme: (theme: SettingState['theme']) => void
            setLanguage: (language: SettingState['language']) => void
            setMode: (mode: SETTING.MODE) => void
            toggleMode: (mode: SETTING.MODE) => void
            reset: () => void
        }

        interface SettingStore extends SettingState, SettingActions {}
    }
}
