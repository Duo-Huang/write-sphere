import { xcodeLightInit } from '@uiw/codemirror-theme-xcode'
import colors from 'tailwindcss/colors'

const light = xcodeLightInit({
    settings: {
        background: colors.neutral[100], // keep same as container background (content/index.tsx)
        backgroundImage: '',
        foreground: colors.neutral[700],
        caret: colors.rose[800],
        selectionMatch: colors.gray[300],
        gutterBackground: colors.neutral[100],
        fontSize: '1rem',
        fontFamily: 'var(--font-lxgwwenkai)',
        gutterActiveForeground: colors.rose[800],
        gutterBorder: colors.neutral[300],
    },
})

export default light
