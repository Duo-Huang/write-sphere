import FileExplorer from './FileExplorer'
import EditorToolbar from './EditorToolbar'
import Icon from '@/components/common/Icon'
import Menu from './Menu'
import FileName from './FileName'
import ActionBar from './ActionBar'

const TopBar = () => {
    return (
        <div className="w-full h-10 bg-stone-200 dark:bg-neutral-700 flex items-center justify-between py-1.5 px-4 fixed top-0 left-0 z-50">
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
