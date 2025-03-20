import useStore from '@/store'
import Editor from './Editor'
import Preview from './Preview'
import ModeBar from './ModeBar'

const Content = () => {
    const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)
    const isStatusBarVisible = useStore((state) => state.layout.isStatusBarVisible)
    const isEditorFullScreen = useStore((state) => state.layout.isEditorFullScreen)
    const isPreviewFullScreen = useStore((state) => state.layout.isPreviewFullScreen)

    return (
        <div
            className={`fixed inset-x-0 ${isStatusBarVisible ? 'bottom-[20px]' : 'bottom-0'} ${isTopBarVisible ? 'top-[40px]' : 'top-0'} flex bg-neutral-100 duration-500 ease-out dark:bg-neutral-800`}
        >
            <div
                className={`${isEditorFullScreen ? 'basis-full' : isPreviewFullScreen ? 'basis-0 !p-0' : 'basis-1/2'} overflow-y-auto p-6 duration-500`}
            >
                <Editor />
            </div>
            <div className="basis-7 bg-stone-200 py-6 duration-500 ease-out dark:bg-neutral-700">
                <ModeBar />
            </div>
            <div
                className={`${isPreviewFullScreen ? 'basis-full' : isEditorFullScreen ? 'basis-0 !p-0' : 'basis-1/2'} overflow-y-auto p-6 duration-500`}
            >
                <Preview />
            </div>
        </div>
    )
}

export default Content
