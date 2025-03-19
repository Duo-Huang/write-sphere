import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { default as store } from '@/store'
import '@/locales/i18n'
import '@/styles/global.css'
import App from '@/App.tsx'

store.autoRun()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
