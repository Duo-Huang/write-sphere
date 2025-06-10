import FileExplorer from './file-explorer'
import Menu from './menu'
import FileName from './file-name'
import ActionBar from './action-bar'
import useStore from '@/store'

const TopBar = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)

    return (
        <div
            className={`fixed flex h-10 w-full items-center justify-between px-4 shadow-lg dark:shadow-black/60 ${isTopBarVisible ? 'top-0' : '-top-10'} z-30 duration-500 ease-out`}
        >
            <div className="flex h-full items-center gap-2">
                <FileExplorer />
                <FileName />
            </div>
            <div className="flex h-full items-center gap-2">
                <ActionBar />
                <Menu />
            </div>
        </div>
    )
}

export default TopBar
