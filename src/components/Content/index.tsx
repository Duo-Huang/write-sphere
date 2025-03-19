import Editor from './Editor'
import Preview from './Preview'
import ModeBar from './ModeBar'
import useStore from '@/store'

const Content = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)
    const isBottomBarVisible = useStore((state) => state.layout.isBottomBarVisible)

    return (
        <div
            className={`fixed inset-x-0 ${isBottomBarVisible ? 'bottom-[20px]' : 'bottom-0'} ${isTopBarVisible ? 'top-[40px]' : 'top-0'} flex justify-between bg-neutral-100 duration-500 ease-out dark:bg-neutral-800`}
        >
            <div className="grow overflow-y-auto p-6">
                <Editor />
            </div>
            <div className="w-7 bg-stone-200 py-6 duration-500 ease-out dark:bg-neutral-700">
                <ModeBar />
            </div>
            <div className="hidden grow overflow-y-auto p-6 sm:block">
                <Preview />
            </div>
        </div>
    )
}

export default Content
