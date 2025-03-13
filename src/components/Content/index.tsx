import Editor from './Editor'
import Preview from './Preview'
import ModelBar from './ModelBar'

const Content = () => {
    return (
        <div className="fixed flex justify-between top-[40px] bottom-[20px] inset-x-0">
            <div className="grow overflow-y-auto">
                <Editor />
            </div>
            <div className="w-7 bg-gray-200">
                <ModelBar />
            </div>
            <div className="grow overflow-y-auto hidden sm:block">
                <Preview />
            </div>
        </div>
    )
}

export default Content
