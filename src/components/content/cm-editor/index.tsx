import { memo, useCallback, useMemo } from 'react'
import CodeMirror, { EditorView, type BasicSetupOptions } from '@uiw/react-codemirror'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import useStore from '@/store'
import { SETTING } from '@/constants'
import light from './theme/light'
import dark from './theme/dark'
import { markdownKeymap, overrideKeymap } from './extensions/keymap'
import { markdownMath, Highlight } from './syntax'

const baseStyle = EditorView.baseTheme({
    '&.cm-theme': {
        height: '100%',
    },
    '&.cm-editor, &.cm-editor *': {
        'transition-property':
            'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
        'transition-duration': '0.5s',
        'transition-timing-function': 'var(--ease-out)', // keep the same as tailwind default
        'transition-delay': '0s',
    },
    '& .cm-gutters': {
        'border-right': '1px solid transparent',
    },

    '&.cm-editor.cm-focused': {
        outline: 'none',
    },

    '& .cm-cursor': {
        'border-left': '2px solid transparent',
    },
})

const extensions = [
    baseStyle,
    EditorView.lineWrapping,
    markdown({
        base: markdownLanguage,
        codeLanguages: languages,
        extensions: [markdownMath, Highlight],
    }),
    overrideKeymap,
    markdownKeymap,
]

const basicSetup: BasicSetupOptions = {
    defaultKeymap: false,
    lintKeymap: false,
}

const CmEditor = memo(({ className }: { className?: string }) => {
    const content = useStore((state) => state.editor.content)
    const setContent = useStore((state) => state.editor.setContent)
    const appTheme = useStore((state) => state.setting.theme)
    const setCmView = useStore((state) => state.editor.setCmView)

    const isDark = useMemo(() => {
        return (
            appTheme === SETTING.THEME.DARK ||
            (appTheme === SETTING.THEME.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )
    }, [appTheme])

    const handleChange = (value: string) => setContent(value)

    const onCreateEditor = useCallback(
        (view: EditorView) => {
            setCmView(view)
        },
        [setCmView]
    )

    return (
        <div className={className}>
            <CodeMirror
                autoFocus
                value={content}
                extensions={extensions}
                onChange={handleChange}
                onCreateEditor={onCreateEditor}
                basicSetup={basicSetup}
                theme={isDark ? dark : light}
            />
        </div>
    )
})

export default CmEditor
