import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { default as store } from '@/store'
import '@/locales/i18n'
import '@/styles/app.css'
import App from '@/app'

store.autoRun()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
