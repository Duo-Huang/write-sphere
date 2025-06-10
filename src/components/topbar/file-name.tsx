import { useState } from 'react'
import { Tooltip, Input } from '@heroui/react'
import { useTranslation } from 'react-i18next'

const FileName = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('Untitled.md')

    return (
        <Tooltip radius="sm" content={t('home.filename')}>
            <Input
                size="sm"
                radius="none"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-full"
                classNames={{
                    label: 'text-black/50 dark:text-white/90',
                    input: [
                        // 'bg-transparent',
                        // 'text-black/90 dark:text-white/90',
                        'transition-colors duration-500 ease-out',
                        'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                    ],
                    // innerWrapper: 'bg-transparent',
                    inputWrapper: [
                        'h-full',
                        'shadow-none',
                        'data-[hover=true]:bg-default-200/50',
                        'dark:data-[hover=true]:bg-muted',
                        'group-data-[focus=true]:bg-default-200/50',
                        // 'dark:group-data-[focus=true]:bg-muted',
                        '!cursor-text',
                        'bg-transparent',
                    ],
                }}
            />
        </Tooltip>
    )
}

export default FileName
