import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import '@/locales/i18n'
import { default as store } from '@/store'
import { SETTING } from '@/config'
import App from '@/App.tsx'

store.subscribe(
    (state) => state.config.theme,
    (theme) => {
        const isDark =
            theme === SETTING.THEME.DARK ||
            (theme === SETTING.THEME.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches)

        document.documentElement.classList.add('transition-colors', 'duration-500')
        document.documentElement.classList.toggle('dark', isDark)
        // setTimeout(() => {
        //     document.documentElement.classList.remove('transition-colors', 'duration-500')
        // }, 5000)
    },
    { fireImmediately: true }
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
