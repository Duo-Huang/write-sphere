import { HeroUIProvider } from '@heroui/react'
import TopBar from '@/components/Topbar'
import Content from '@/components/Content'
import StatusBar from '@/components/StatusBar'

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
