import { SETTING } from '@/config'

declare global {
    namespace AppStore {

        interface ConfigState {
            theme: SETTING.THEME
            language: SETTING.LANGUAGE
        }

        interface ConfigActions {
            setTheme: (theme: ConfigState['theme']) => void
            setLanguage: (language: ConfigState['language']) => void
        }

        interface ConfigStore extends ConfigState, ConfigActions { }
    }
}