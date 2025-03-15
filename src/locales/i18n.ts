import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { default as store } from '@/store'
import { SETTING } from '@/config'
import en from './en'
import zh from './zh'

const fallbackLng = SETTING.LANGUAGE.EN


i18n.use(initReactI18next).init({
    resources: {
        [SETTING.LANGUAGE.EN]: {
            translation: en,
        },
        [SETTING.LANGUAGE.ZH]: {
            translation: zh,
        },
    },
    lng: store.getState().config.language,
    fallbackLng,
    interpolation: {
        escapeValue: false,
    },
})

store.subscribe((state) => state.config.language, (lang) => {
    if (lang === SETTING.LANGUAGE.SYSTEM) {
        const language = navigator.language.split('-')[0]
        if (language in SETTING.LANGUAGE) {
            i18n.changeLanguage(language)
        } else {
            i18n.changeLanguage(fallbackLng)
        }
    } else {
        i18n.changeLanguage(lang)
    }
})

export default i18n