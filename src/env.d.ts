/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly APP_API_BASE_URL: string
    readonly APP_ENV: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
