import { xcodeLightInit } from '@uiw/codemirror-theme-xcode'
import colors from 'tailwindcss/colors'

const light = xcodeLightInit({
    settings: {
        background: colors.neutral[100],
        backgroundImage: '',
        foreground: colors.neutral[800],
        caret: colors.rose[800],

        // selection: colors.sky[300], // 选中背景 some bugs with theme default, don't use it
        // lineHighlight: colors.gray[200], // 行高亮 some bugs with theme default, don't use it

        selectionMatch: colors.gray[300],
        gutterBackground: colors.neutral[100],
        fontSize: '1rem',
        fontFamily: 'var(--font-lxgwwenkai)',
        gutterActiveForeground: colors.rose[800],
        gutterBorder: colors.neutral[300],
    },
})

export default light
