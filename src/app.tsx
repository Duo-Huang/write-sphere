import { HeroUIProvider } from '@heroui/react'
import { Toaster } from 'sonner'
import TopBar from '@/components/topbar'
import Content from '@/components/content'
import StatusBar from '@/components/status-bar'

function App() {
    return (
        <HeroUIProvider>
            <div className="min-h-dvh">
                <Toaster richColors position="top-center" />
                <TopBar />
                <Content />
                <StatusBar />
            </div>
        </HeroUIProvider>
    )
}

export default App
