import Editor from './Editor'
import Preview from './Preview'
import ModelBar from './ModelBar'

const Content = () => {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-800 fixed flex justify-between top-[40px] bottom-[20px] inset-x-0">
            <div className="grow overflow-y-auto">
                <Editor />
            </div>
            <div className="w-7 py-2 bg-stone-200 dark:bg-stone-950">
                <ModelBar />
            </div>
            <div className="grow overflow-y-auto hidden sm:block">
                <Preview />
            </div>
        </div>
    )
}

export default Content
