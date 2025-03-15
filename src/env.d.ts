/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly APP_ENABLE_STORE_ENCRYPT: boolean
    readonly APP_STORE_ENCRYPT_KEY: string
    readonly APP_STORE_ENCRYPT_IV: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
