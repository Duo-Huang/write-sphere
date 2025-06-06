import { xcodeDarkInit } from '@uiw/codemirror-theme-xcode'
import colors from 'tailwindcss/colors'

const dark = xcodeDarkInit({
    settings: {
        background: colors.neutral[800], // keep same as container background (content/index.tsx)
        backgroundImage: '',
        foreground: colors.neutral[300],
        caret: colors.lime[300],
        selectionMatch: colors.neutral[700],
        gutterBackground: colors.neutral[800],
        gutterForeground: colors.neutral[500],
        fontSize: '1rem',
        fontFamily: 'var(--font-lxgwwenkai)',
        gutterActiveForeground: colors.lime[300],
        gutterBorder: colors.neutral[700],
    },
})

export default dark
