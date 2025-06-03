import FileExplorer from './file-explorer'
import EditorToolbar from './editor-tool-bar'
import Icon from '@/components/common/icon'
import Menu from './menu'
import FileName from './FileName'
import ActionBar from './action-bar'
import useStore from '@/store'

const TopBar = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)

    return (
        <div
            className={`fixed flex h-10 w-full items-center justify-between bg-stone-200 px-4 py-1.5 shadow-lg dark:bg-neutral-700 dark:shadow-black/60 ${isTopBarVisible ? 'top-0' : '-top-10'} z-50 duration-500 ease-out`}
        >
            <div className="flex items-center gap-2">
                <FileExplorer />
                <EditorToolbar />
            </div>
            <div className="flex items-center gap-2">
                <Icon name="loading" className="!size-6 text-slate-700 dark:text-neutral-200" />
                <FileName />
                <ActionBar />
                <Menu />
            </div>
        </div>
    )
}

export default TopBar
