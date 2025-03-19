import useStore from '@/store'

const StatusBar = () => {
    const isBottomBarVisible = useStore((state) => state.layout.isBottomBarVisible)

    return (
        <div
            className={`fixed ${isBottomBarVisible ? 'bottom-0' : '-bottom-[20px]'} z-50 flex h-5 w-full items-center justify-between bg-sky-600 px-4 text-sm text-white duration-500 ease-out`}
        >
            <div>Markdown</div>
            <div>HTML</div>
        </div>
    )
}

export default StatusBar
