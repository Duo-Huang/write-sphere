import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { default as store } from '@/store'
import '@/locales/i18n'
import { SETTING } from '@/config'
import '@/styles/global.css'
import App from '@/App.tsx'

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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
