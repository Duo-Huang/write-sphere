import { debounce } from "throttle-debounce"
import { calculateBreakpoint } from "@/utils/screen"

const watchScreen = (store: AppStore.Self) => {
    const handleResize = debounce(200, () => {
        store.setState((state) => { // with immer syntax, state is immutable
            state.layout.currentScreen = calculateBreakpoint()
        })
    })

    handleResize()

    window.addEventListener('resize', handleResize)
}

export default watchScreen
