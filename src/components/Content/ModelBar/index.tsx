import Icon from '@/components/common/Icon'
import { Button } from '@heroui/react'

const ModelBar = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-2">
            <div className="w-full h-7 flex items-center justify-center cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-700 rounded transition duration-200">
                <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
            </div>
            <div className="w-full h-7 flex items-center justify-center cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-700 rounded transition duration-200">
                <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
            </div>
        </div>
    )
}

export default ModelBar
