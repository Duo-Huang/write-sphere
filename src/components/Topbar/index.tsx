import FileExplorer from './FileExplorer'
import EditorToolbar from './EditorToolbar'
import Spinner from './Spinner'
import Menu from './Menu'
import FileName from './FileName'
import ActionBar from './ActionBar'

const TopBar = () => {
    return (
        <div className="w-full h-10 bg-stone-100 border-b border-gray-200 flex items-center justify-between py-1.5 px-4 fixed top-0 left-0 z-50">
            <div className="flex items-center gap-2">
                <FileExplorer />
                <EditorToolbar />
            </div>
            <div className="flex items-center gap-2">
                <Spinner />
                <FileName />
                <ActionBar />
                <Menu />
            </div>
        </div>
    )
}

export default TopBar
