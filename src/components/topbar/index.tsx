import FileExplorer from './file-explorer'
import EditorToolbar from './editor-tool-bar'
import Icon from '@/components/common/icon'
import Menu from './menu'
import FileName from './file-name'
import ActionBar from './action-bar'
import useStore from '@/store'

const TopBar = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)

    return (
        <div
            className={`fixed flex h-10 w-full items-center justify-between px-4 py-1.5 shadow-lg dark:shadow-black/60 ${isTopBarVisible ? 'top-0' : '-top-10'} z-30 duration-500 ease-out`}
        >
            <div className="flex items-center gap-2">
                <FileExplorer />
                <EditorToolbar />
            </div>
            <div className="flex items-center gap-2">
                <Icon name="loading" className="!size-6" />
                <FileName />
                <ActionBar />
                <Menu />
            </div>
        </div>
    )
}

export default TopBar
