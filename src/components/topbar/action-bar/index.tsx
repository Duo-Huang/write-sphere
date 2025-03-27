import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store'
import { SETTING } from '@/config'

const ActionBar = memo(() => {
    const { t } = useTranslation()
    const setLanguage = useStore((state) => state.setting.setLanguage)
    const setTheme = useStore((state) => state.setting.setTheme)
    const theme = useStore((state) => state.setting.theme)

    return (
        <div>
            <h3>{t('action.name')}</h3>
            <button
                onClick={() => {
                    setLanguage(SETTING.LANGUAGE.ZH)
                }}
            >
                change language
            </button>
            <button
                onClick={() => {
                    // toggle theme
                    if (theme === SETTING.THEME.DARK) {
                        setTheme(SETTING.THEME.LIGHT)
                    } else {
                        setTheme(SETTING.THEME.DARK)
                    }
                }}
            >
                change theme
            </button>
        </div>
    )
})

export default ActionBar
