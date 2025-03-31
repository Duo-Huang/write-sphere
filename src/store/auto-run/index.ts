import watchScreen from './watchScreen'
import watchTheme from './watchTheme'
import watchEditorMode from './watchSetting'

let isRunning = false

const autoRun = (store: AppStore.Self) => {
    if (isRunning) return
    isRunning = true

    watchScreen(store)
    watchTheme(store)
    watchEditorMode(store)
}

export default autoRun
