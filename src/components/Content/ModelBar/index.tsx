import Icon from '@/components/common/Icon'
import useStore from '@/store'

const ModelBar = () => {
    const toggleTopBar = useStore((state) => state.layout.toggleTopBar)
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)
    const actionBtnClass = isTopBarVisible
        ? 'hover:bg-neutral-400 dark:hover:bg-neutral-800'
        : 'opacity-50 bg-neutral-400 dark:bg-neutral-900'

    return (
        <div className="flex h-full flex-col items-center justify-center justify-between gap-1">
            <div>
                <div
                    className={`flex h-7 w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${actionBtnClass}`}
                    onClick={toggleTopBar}
                >
                    <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </div>
                <div className="flex h-7 w-full cursor-pointer items-center justify-center rounded transition duration-200 hover:bg-neutral-400 dark:hover:bg-neutral-800">
                    <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </div>
            </div>
            <div>
                <div
                    className={`flex h-7 w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${actionBtnClass}`}
                    onClick={toggleTopBar}
                >
                    <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </div>
                <div className="flex h-7 w-full cursor-pointer items-center justify-center rounded transition duration-200 hover:bg-neutral-400 dark:hover:bg-neutral-800">
                    <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </div>
            </div>
        </div>
    )
}

export default ModelBar
