import { SETTING } from '@/config'

const watchTheme = (store: AppStore.Self) => {
    store.subscribe(
        (state) => state.config.theme,
        (theme) => {
            window.localStorage.setItem('theme', theme) // used for index.html

            const isDark =
                theme === SETTING.THEME.DARK ||
                (theme === SETTING.THEME.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches)
            document.documentElement.classList.toggle('dark', isDark)
        },
        { fireImmediately: true }
    )
}

export default watchTheme
