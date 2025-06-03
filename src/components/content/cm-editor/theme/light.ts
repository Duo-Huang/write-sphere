import { xcodeLightInit } from '@uiw/codemirror-theme-xcode'
import colors from 'tailwindcss/colors'

const light = xcodeLightInit({
    settings: {
        background: colors.neutral[100],
        backgroundImage: '',
        foreground: colors.neutral[800],
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
