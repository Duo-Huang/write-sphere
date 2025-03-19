import { debounce } from "throttle-debounce"
import { calculateBreakpoint } from "@/utils/screen"

const watchScreen = (store: AppStore.Self) => {
    const handleResize = debounce(200, () => {
        store.getState().layout.setCurrentScreen(calculateBreakpoint())
    })

    handleResize()

    window.addEventListener('resize', handleResize)
}

export default watchScreen
