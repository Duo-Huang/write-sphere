import useStore from '@/store'
import CmEditor from './cm-editor'
import Preview from './preview'
import ModeBar from './mode-bar'

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
                className={`@container/editor ${isEditorFullScreen ? 'basis-full' : isPreviewFullScreen ? 'basis-0 !p-0' : 'basis-1/2'} overflow-y-auto p-6 duration-500`}
            >
                <CmEditor className="p-0 transition-[padding] duration-500 @5xl/editor:px-100" />
            </div>
            <div className="basis-7 bg-stone-200 py-6 duration-500 ease-out dark:bg-neutral-700">
                <ModeBar />
            </div>
            <div
                id="rt-editor-container"
                className={`@container/perview ${isPreviewFullScreen ? 'basis-full' : isEditorFullScreen ? 'basis-0 !p-0' : 'basis-1/2'} overflow-y-auto p-6 duration-500`}
            >
                <Preview className="p-0 transition-[padding] duration-500 @5xl/perview:px-100" />
            </div>
        </div>
    )
}

export default Content
