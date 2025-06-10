import { memo } from 'react'
import { Button, Tooltip } from '@heroui/react'
import { Icon } from '@/components/common'
import useStore from '@/store'
import { SETTING } from '@/constants'
import { useTranslation } from 'react-i18next'

const config: {
    theme: {
        [key in SETTING.THEME]: {
            themeIconName: IconName
            themeLabel: string
        }
    }
    lang: {
        [key in SETTING.LANGUAGE]: {
            langIconName: IconName
            langLable: string
        }
    }
} = {
    theme: {
        [SETTING.THEME.SYSTEM]: {
            themeIconName: 'computer',
            themeLabel: 'home.system',
        },
        [SETTING.THEME.LIGHT]: {
            themeIconName: 'light',
            themeLabel: 'home.light',
        },
        [SETTING.THEME.DARK]: {
            themeIconName: 'dark',
            themeLabel: 'home.dark',
        },
    },
    lang: {
        [SETTING.LANGUAGE.SYSTEM]: {
            langIconName: 'lang',
            langLable: 'home.system',
        },
        [SETTING.LANGUAGE.ZH]: {
            langIconName: 'zh',
            langLable: 'home.zh',
        },
        [SETTING.LANGUAGE.EN]: {
            langIconName: 'en',
            langLable: 'home.en',
        },
    },
}

const ActionBar = memo(() => {
    const { t } = useTranslation()
    const toggleLanguage = useStore((state) => state.setting.toggleLanguage)
    const toggleTheme = useStore((state) => state.setting.toggleTheme)
    const theme = useStore((state) => state.setting.theme)
    const language = useStore((state) => state.setting.language)

    return (
        <div>
            <Tooltip radius="sm" content={t(config.lang[language].langLable)}>
                <Button isIconOnly onPress={toggleLanguage} radius="none" className="bg-transparent hover:!opacity-70">
                    <Icon name={config.lang[language].langIconName} className="text-default-foreground !size-6"></Icon>
                </Button>
            </Tooltip>
            <Tooltip radius="sm" content={t(config.theme[theme].themeLabel)}>
                <Button isIconOnly radius="none" className="bg-transparent hover:!opacity-70" onPress={toggleTheme}>
                    <Icon name={config.theme[theme].themeIconName} className="text-default-foreground !size-6"></Icon>
                </Button>
            </Tooltip>
        </div>
    )
})

export default ActionBar
