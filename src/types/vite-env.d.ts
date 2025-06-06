/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly APP_ENABLE_STORE_ENCRYPT: 'true' | 'false'
    readonly APP_STORE_ENCRYPT_KEY: string
    readonly APP_STORE_ENCRYPT_IV: string
    readonly APP_STORE_VERSION: string
    readonly APP_ENABLE_AI: 'true' | 'false'
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
