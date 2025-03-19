import Icon from '@/components/common/Icon'
import { EDITOR } from '@/config'
import useStore from '@/store'
import { useRef } from 'react'

const getActionBtnClass = (isActive: boolean) => {
    return isActive
        ? 'enabled:hover:bg-neutral-400 dark:enabled:hover:bg-neutral-800'
        : 'enabled:opacity-50 enabled:bg-neutral-400 dark:enabled:bg-neutral-900'
}

const ModeBar = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)
    const isBottomBarVisible = useStore((state) => state.layout.isBottomBarVisible)
    const mode = useStore((state) => state.editor.mode)
    const setMode = useStore((state) => state.editor.setMode)
    const toggleMode = useStore((state) => state.editor.toggleMode)

    const editModeRef = useRef<EDITOR.MODE>(
        mode[EDITOR.MODE.REALTIME] ? EDITOR.MODE.REALTIME : mode[EDITOR.MODE.EDIT] ? EDITOR.MODE.EDIT : null
    )

    const toggleEditMode = () => {
        if (mode[EDITOR.MODE.EDIT]) {
            setMode(EDITOR.MODE.REALTIME)
            editModeRef.current = EDITOR.MODE.REALTIME
        } else if (mode[EDITOR.MODE.REALTIME]) {
            setMode(EDITOR.MODE.EDIT)
            editModeRef.current = EDITOR.MODE.EDIT
        }
    }

    return (
        <div className="flex h-full flex-col items-center justify-between">
            <div>
                <button
                    className={`mb-2 flex h-6 w-full items-center justify-center rounded transition-all duration-300 disabled:cursor-not-allowed ${getActionBtnClass(isTopBarVisible)} ${mode[EDITOR.MODE.FOCUS] ? 'm-0 h-0 overflow-hidden' : ''}`}
                    onClick={() => toggleMode(EDITOR.MODE.HEADLESS)}
                >
                    <Icon name="menuToggleTop" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
                <button
                    className={`mb-2 flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${getActionBtnClass(!mode[EDITOR.MODE.EDIT])} ${mode[EDITOR.MODE.FOCUS] ? 'hidden' : ''}`}
                    onClick={toggleEditMode}
                >
                    <Icon name="sideToggle" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
                <button
                    className={`mb-2 flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${getActionBtnClass(!mode[EDITOR.MODE.PREVIEW])} ${mode[EDITOR.MODE.FOCUS] ? 'hidden' : ''}`}
                    onClick={() => setMode(EDITOR.MODE.PREVIEW)}
                >
                    <Icon name="eye" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
            </div>
            <div>
                <button
                    className={`mt-2 flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${getActionBtnClass(!mode[EDITOR.MODE.FOCUS])}`}
                    onClick={() => toggleMode(EDITOR.MODE.FOCUS)}
                >
                    <Icon name="focus" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
                <button
                    className={`mt-2 flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${getActionBtnClass(!mode[EDITOR.MODE.SYNC_SCROLL])} ${mode[EDITOR.MODE.FOCUS] ? 'hidden' : ''}`}
                    onClick={() => toggleMode(EDITOR.MODE.SYNC_SCROLL)}
                >
                    <Icon name="syncScroll" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
                <button
                    className={`mt-2 flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-300 ${getActionBtnClass(isBottomBarVisible)} ${mode[EDITOR.MODE.FOCUS] ? 'hidden' : ''}`}
                    onClick={() => toggleMode(EDITOR.MODE.FOOTLESS)}
                >
                    <Icon name="menuToggleBottom" className="!size-6 text-gray-600 dark:text-neutral-500" />
                </button>
            </div>
        </div>
    )
}

export default ModeBar
