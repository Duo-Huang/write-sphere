import { useTranslation } from 'react-i18next'
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from '@heroui/react'

interface Language {
    code: string
    name: string
    flag: string
}

const languages: Language[] = [
    { code: 'zh', name: '简体中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
]

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const getCurrentLanguage = () => {
        return languages.find((lang) => lang.code === i18n.language) || languages[1]
    }

    const handleLanguageChange = (langCode: string | number) => {
        i18n.changeLanguage(String(langCode))
    }

    const currentLang = getCurrentLanguage()

    return (
        <Dropdown>
            <DropdownTrigger>
                <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                    <span className="text-base">{currentLang.flag}</span>
                    <span>{currentLang.name}</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </DropdownTrigger>

            <DropdownMenu onAction={handleLanguageChange}>
                {languages.map((lang) => (
                    <DropdownItem key={lang.code} textValue="lang.name">
                        <div className="flex items-center gap-x-2">
                            <span className="text-base">{lang.flag}</span>
                            <span className="flex-grow">{lang.name}</span>
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default LanguageSwitcher
