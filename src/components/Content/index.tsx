import Editor from './Editor'
import Preview from './Preview'
import ModelBar from './ModelBar'
// import useStore from '@/store'

const Content = () => {
    // const isTopBarVisible = useStore((state) => state.layout.isTopBarVisible)

    return (
        <div
            className={`fixed inset-x-0 bottom-[20px] top-[40px] flex justify-between bg-neutral-100 duration-500 ease-out dark:bg-neutral-800`}
        >
            <div className="grow overflow-y-auto p-6">
                <Editor />
            </div>
            <div className="w-7 bg-stone-200 py-6 duration-500 ease-out dark:bg-neutral-700">
                <ModelBar />
            </div>
            <div className="hidden grow overflow-y-auto p-6 sm:block">
                <Preview />
            </div>
        </div>
    )
}

export default Content
