import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import zh from './zh'

const getLanguage = () => {
    const storedLang = localStorage.getItem('language')
    if (storedLang) {
        return storedLang
    }

    const browserLang = navigator.language
    return browserLang.startsWith('zh') ? 'zh' : 'en'
}

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        zh: {
            translation: zh,
        },
    },
    lng: getLanguage(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng)
})