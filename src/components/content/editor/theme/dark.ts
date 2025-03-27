import { xcodeDarkInit } from '@uiw/codemirror-theme-xcode';
import colors from 'tailwindcss/colors'


const dark = xcodeDarkInit({
    settings: {
        background: colors.neutral[800],
        backgroundImage: '',
        foreground: colors.neutral[300],
        caret: colors.lime[300],

        // selection: colors.sky[300], // 选中背景 some bugs with theme default, don't use it
        // lineHighlight: colors.gray[200], // 行高亮 some bugs with theme default, don't use it

        selectionMatch: colors.neutral[700],
        gutterBackground: colors.neutral[800],
        gutterForeground: colors.neutral[500],
        fontSize: '1rem',
        fontFamily: 'var(--font-lxgwwenkai)',
        gutterActiveForeground: colors.lime[300],
        gutterBorder: colors.neutral[700],
    }
})


export default dark
