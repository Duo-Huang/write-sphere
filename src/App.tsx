import { HeroUIProvider } from '@heroui/react'
import TopBar from '@/components/topbar'
import Content from '@/components/content'
import StatusBar from '@/components/status-bar'

function App() {
    return (
        <HeroUIProvider>
            <div className="min-h-dvh">
                <TopBar />
                <Content />
                <StatusBar />
            </div>
        </HeroUIProvider>
    )
}

export default App
